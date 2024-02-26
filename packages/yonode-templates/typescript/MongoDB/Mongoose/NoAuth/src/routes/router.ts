import { controller } from "controllers/controller";
import express from "express";

const routerName = express.Router();

routerName.post("", controller);

export default routerName;
