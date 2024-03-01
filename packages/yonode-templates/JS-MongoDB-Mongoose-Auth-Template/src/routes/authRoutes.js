import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { validateUserLogin, validateUserRegister } from "../middlewares/validators/authValidators.js";

const router = express.Router();

// Validate registration input
router.post("/register", validateUserRegister, registerUser);

// Validate login input
router.post("/login", validateUserLogin, loginUser);

export default router;
