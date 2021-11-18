import express from 'express'
const router = express.Router()

import IndexRouter from "./IndexRoute";

router.use('/', IndexRouter)

export default router
