// Import required modules and configuration
import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { validateUserLogin, validateUserRegister } from "../middlewares/validators/authValidator.js";

// Create a new router instance
const router = express.Router();

// Register route with input validation followed by the registration controller
router.post("/register", validateUserRegister, registerUser);

// Login route with input validation followed by the login controller
router.post("/login", validateUserLogin, loginUser);

// Export the router for use in the main application file
export default router;