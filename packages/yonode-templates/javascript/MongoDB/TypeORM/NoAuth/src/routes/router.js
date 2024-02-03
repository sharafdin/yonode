import express from "express";
import { controlerName } from "../controllers/controller.js";

const routerName = express.Router();

routerName.get("/", controlerName);

export default routerName;
