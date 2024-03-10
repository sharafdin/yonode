import jwt from "jsonwebtoken";
import User from "../entity/User.js";
import { jwtSecret } from "../config/initialConfig.js";
import AppDataSource from "../config/dbConfig.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";

// Handles new user registration
export async function registerUser(req, res) {
  const { email, password } = req.body; // Extract email and password from request body

  try {
    // Check if a user with the given email already exists
    const userRepository = AppDataSource.getRepository(User);

    let user = await userRepository.findOneBy({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await hashPassword(password);

    // Create a new user instance and save it to the database
    user = userRepository.create({
      email,
      password: hashed,
    });
    await userRepository.save(user);

    // Respond with the generated token
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle any errors that occur during the registration process
    res.status(500).json({ message: "Server Error" });
  }
}

// Handles user login
export async function loginUser(req, res) {
  let { email, password } = req.body; // Extract email and password from request body

  try {
    // Check if a user with the given email exists
    const userRepository = AppDataSource.getRepository(User);

    let user = await userRepository.findOneBy({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Create a JWT payload and generate a token
    const payload = { userId: user._id };
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "1h",
    });
    // Respond with the generated token
    res.json({ token });
  } catch (error) {
    // Handle any errors that occur during the login process
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
}
