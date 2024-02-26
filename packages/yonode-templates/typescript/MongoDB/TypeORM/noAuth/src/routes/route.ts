import { register } from "controller/controller";
import express from "express";

const routerName = express.Router();

routerName.post("", register);

export default routerName;
