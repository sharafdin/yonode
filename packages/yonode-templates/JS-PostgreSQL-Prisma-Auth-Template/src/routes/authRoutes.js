import express from 'express';
import { validateUserLogin, validateUserRegister } from '../middlewares/validators/authValidator.js';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Validate registration input
router.post('/register',validateUserRegister, registerUser);

// Validate login input
router.post('/login', validateUserLogin,loginUser);

export default router;
