import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "reflect-metadata";
import { JWT_Secret, Web_Url } from "../config/initial.config.js";
import User from "../entity/User.entity.js";
import sendVerificationEmail from "../utils/emails/sendVerificationToken.js";
import { generateVerificationToken } from "../utils/generations.js";
import AppDataSource from "../config/db.config.js";

export const registerUser = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    // Use TypeORM's MongoRepository to query for existing users
    const userRepository = AppDataSource.getMongoRepository(User);
    const emailLowerCase = email.toLowerCase();
    const usernameLowerCase = username.toLowerCase();

    const isUserExists = await userRepository.findOne({
      where: {
        $or: [{ email: emailLowerCase }, { username: usernameLowerCase }],
      },
    });
    console.log(isUserExists);
    if (isUserExists) {
      if (isUserExists.email === emailLowerCase) {
        return res.status(400).send("email already exists");
      }
      if (isUserExists.username === usernameLowerCase) {
        return res.status(400).send("username already exists");
      }
    }

    const verificationToken = generateVerificationToken();
    const tokenExpireDate = new Date();
    tokenExpireDate.setHours(tokenExpireDate.getHours() + 24);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance and save it
    const newUser = userRepository.create({
      name,
      username: usernameLowerCase,
      email: emailLowerCase,
      password: hashedPassword,
      token: verificationToken,
      expireDate: tokenExpireDate,
    });

    await userRepository.save(newUser);

    newUser.password = undefined;

    const verificationLink = `${Web_Url}/users/verify-user?token=${verificationToken}&userId=${newUser.id}`;

    sendVerificationEmail(email, verificationLink);

    res.status(201).send(newUser);
  } catch (err) {
    console.log("error at user registerUser", err);
    res.status(400).send(err.message);
  }
};

export const verifyUser = async (req, res) => {
  try {
    const { token, userId: _id } = req.query;

    const user = await User.findOne({ _id, token });

    if (!user) {
      return res.status(400).send("Invalid Token...");
    }

    const expirationTime = user.expireDate;

    if (!expirationTime || expirationTime < new Date()) {
      return res.status(400).send("Token has expired");
    }

    const maxAge = new Date();

    maxAge.setHours(maxAge.getHours() - 24);

    if (expirationTime < maxAge) {
      return res.status(400).send("Token has expired");
    }

    user.isEmailConfirmed = true;
    user.token = undefined;

    user.expireDate = undefined;

    await user.save();

    res.status(200).send({ status: true, message: "Token has been verified." });
  } catch (err) {
    console.log("error at user verification", err);
    res.status(400).send(err.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isUserExists = await User.findOne({
      $or: [
        { email: email?.toLowerCase() },
        { username: username?.toLowerCase() },
      ],
    }).select("+password");

    if (!isUserExists.isEmailConfirmed) {
      return res.status(401).send("Confirm your email first");
    }

    if (!isUserExists) {
      return res.status(400).send("Invalid username or password");
    }

    const validPassword = await isUserExists.comparePassword(password);

    if (!validPassword) {
      return res.status(400).send("Invalid username or password");
    }
    const expiresIn = 7 * 24 * 60 * 60;

    const token = jwt.sign({ _id: isUserExists._id }, JWT_Secret, {
      expiresIn,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: expiresIn * 1000,
    });

    isUserExists.password = undefined;

    res.status(200).send({ ...isUserExists.toJSON(), expiresIn });
  } catch (err) {
    console.log("first login failed", err);
    res.status(400).send(err.message);
  }
};

export const logoutUser = (req, res) => {
  try {
    res.clearCookie("token");

    res.send("Logout successfully");
  } catch (error) {
    console.log("error on logout", error);
  }
};
