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


// Login User
export const loginUser = async (req, res) => {

    try {

        const { username, email, password } = req.body;

        const isUserExists = await User.findOne({
            $or: [
                { email: email?.toLowerCase() },
                { username: username?.toLowerCase() }
            ]
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

        const token = jwt.sign({ _id: isUserExists._id }, JWT_SECRET_KEY, { expiresIn });

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: expiresIn * 1000
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