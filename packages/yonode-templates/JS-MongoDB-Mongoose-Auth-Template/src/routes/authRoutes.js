import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { validateUserLogin, validateUserRegister } from "../middlewares/validators/authValidator.js";

const router = express.Router();

// Register route
router.post("/register", validateUserRegister, registerUser);

// Login route
router.post("/login", validateUserLogin, loginUser);

export default router;
