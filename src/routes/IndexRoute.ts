import express from 'express'
import { IndexController } from '../app/controller'
const IndexRouter = express.Router()

IndexRouter.get('/', IndexController.index)
IndexRouter.get('/health', IndexController.health)

export default IndexRouter
