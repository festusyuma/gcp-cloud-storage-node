import express from 'express'
import Multer from "multer";
import { IndexController } from '../app/controller'
const IndexRouter = express.Router()

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 1024,
  },
});

IndexRouter.post('/', multer.single('file'), IndexController.index)

IndexRouter.get('/health', IndexController.health)

export default IndexRouter
