import express from 'express'
import { hellWorld } from '../controllers/helloWorldController.js'

const hellWorldRouter = express.Router()

hellWorldRouter.get("/", hellWorld)

export default hellWorldRouter;