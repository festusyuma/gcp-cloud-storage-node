import { Request, Response } from "express";
import response from "../util/response";

const index = (req: Request, res: Response) => {
  const { status, success, message, data } = response.success('Welcome')
  return res.status(status).send({ success, message, data })
}

const health = (req: Request, res: Response) => {
  const { status, success, message, data } = response.success('Connected')
  return res.status(status).send({ success, message, data })
}

const indexController = { index, health }
export default indexController
