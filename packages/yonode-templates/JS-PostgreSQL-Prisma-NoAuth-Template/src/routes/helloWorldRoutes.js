import express from "express";
import { helloWorld } from "../controllers/helloWorldController.js";

const helloWorldRouter = express.Router();

helloWorldRouter.get("/", helloWorld);

export default helloWorldRouter;