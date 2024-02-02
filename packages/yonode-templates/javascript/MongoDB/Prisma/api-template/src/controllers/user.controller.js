import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY, Web_Url } from "../config/initial.config.js";
// import User from "../models/User.model.js";
import sendVerificationEmail from "../utils/emails/sendVerificationToken.js";
import { generateVerificationToken } from "../util/generations.js";
import prisma from '../../prisma/client.js';

export const registerUser = async (req, res) => {

    try {
        const { name, username, password, email } = req.body;

        const isUserExists = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: email.toLowerCase() },
                    { username: username.toLowerCase() }
                ],
            },
        });

        if (isUserExists) {

            if (isUserExists.email === email.toLowerCase()) {
                return res.status(400).send("email already exists");
            }
            if (isUserExists.username === username.toLowerCase()) {
                return res.status(400).send("username already exists");
            }
        }

        const verificationToken = generateVerificationToken();

        const tokeExpireDate = new Date();

        tokeExpireDate.setHours(tokeExpireDate.getHours() + 24);

        console.log("tokeExpireDate", tokeExpireDate);

        const userInfo = await prisma.user.create({
            data:{
                name,
                username: username.toLowerCase(),
                password,
                email
            }

        })

        userInfo.password = undefined;

        const verificationLink = `${Web_Url}/users/verify-user?token=${verificationToken}&userId=${userInfo._id}`;

        sendVerificationEmail(email, verificationLink);

        res.status(201).send(userInfo);

    } catch (err) {
        console.log("error at user registerUser", err);
        res.status(400).send(err.message);
    }

};


export const verifyUser = async (req, res) => {
    try {
        const { token, userId } = req.query;

        // Find the user by ID and token
        const user = await prisma.user.findUnique({
            where: {
                id: userId, // Assuming `id` is the field name in your Prisma model
                token: token,
            },
        });

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

        // Update the user's email confirmation status and clear the token and expireDate
        await prisma.user.update({
            where: {
                id: userId, // Again, assuming `id` is the correct field name
            },
            data: {
                isEmailConfirmed: true,
                token: null, // Assuming you want to clear the token
                expireDate: null, // Assuming you want to clear the expiration date
            },
        });

        res.status(200).send({ status: true, message: "Token has been verified." });
    } catch (err) {
        console.log("error at user verification", err);
        res.status(400).send(err.message);
    }
};



// Login User


// Helper function to compare passwords
const comparePassword = async (inputPassword, userPassword) => {
    return bcrypt.compare(inputPassword, userPassword);
};

export const loginUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Find the user by email or username
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: email?.toLowerCase() },
                    { username: username?.toLowerCase() },
                ],
            },
           
        });

        if (!user) {
            return res.status(400).send("Invalid username or password");
        }

        if (!user.isEmailConfirmed) {
            return res.status(401).send("Confirm your email first");
        }

        // Compare the provided password with the user's password
        const validPassword = await comparePassword(password, user.password);

        if (!validPassword) {
            return res.status(400).send("Invalid username or password");
        }

        const expiresIn = 7 * 24 * 60 * 60; // Token validity in seconds

        // Create a token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn });

        // Send the token in a HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // Set to true if using https
            maxAge: expiresIn * 1000, // Convert to milliseconds
        });

        // Prepare user object for response, excluding password
        const { password: _, ...userWithoutPassword } = user;

        res.status(200).send({ ...userWithoutPassword, expiresIn });
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