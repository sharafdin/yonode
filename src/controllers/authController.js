import jwt from "jsonwebtoken";
import prisma from "../../prisma/client.js";
import { comparePassword, hashedPassword } from "../utils/passwordUtils.js";
import { jwtSecret } from "../config/initialConfig.js";

// Handles new user registration
export async function register(req, res) {
  const { email, password } = req.body; // Extract email and password from request body

  try {
    // Check if a user with the given email already exists
    let user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashPassword = await hashedPassword(password);

    // Create a new user instance and save it to the database
    user = await prisma.user.create({
      data: { email, password: hashPassword },
    });
    // Respond with the generated token
    res.status(201).json({ user });
  } catch (error) {
    // Handle any errors that occur during the registration process
    res.status(500).json({ message: "Server Error" });

    console.log("Error at user Registration", error);
  }
}

// Handles user login
export async function login(req, res) {
  let { email, password } = req.body; // Extract email and password from request body

  try {
    // Check if a user with the given email exists
    let user = await prisma.user.findUnique({ where: { email } });
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
    res.status(500).json({ message: "Server Error" });
  }
}
// Logout function to add a token to the blacklist
export async function logout(req, res) {
  const token = req.headers.authorization.split(" ")[1]; // Extract the token from the Authorization header
  // you can do however you would like to add a token to the blacklist
  res.status(200).json({ message: "Successfully logged out" });
}
