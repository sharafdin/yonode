import express from "express";
import { loginUser, logoutUser, registerUser, verifyUser } from "../controllers/userController.js";


const userRouter = express.Router();


userRouter.post('/register-user', registerUser);
// userRouter.get('/verify-user', verifyUser);
// userRouter.post('/login-user', loginUser);
// userRouter.post('/logout-user', logoutUser);


export default userRouter;