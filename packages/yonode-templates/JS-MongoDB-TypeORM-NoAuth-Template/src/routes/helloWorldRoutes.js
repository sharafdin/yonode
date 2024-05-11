import express from 'express'
import { helloWorld } from '../controllers/helloWorldController';

const helloWorldRouter = express.Router()

helloWorldRouter.get("/" , helloWorld)

export default helloWorldRouter;