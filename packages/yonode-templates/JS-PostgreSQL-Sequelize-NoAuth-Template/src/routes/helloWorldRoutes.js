import express from  "express"
import { helloWorld } from "../controllers/helloWorldController.js"

const hellWorldRouter = express.Router()

hellWorldRouter.get("/" , helloWorld)

export default hellWorldRouter;
