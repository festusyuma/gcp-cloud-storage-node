import { Request, Response } from "express";
import {build} from "./index";
import {UploadService} from "../service";
import {response} from "../util";

const index = (req: Request, res: Response) => build(res, UploadService.uploadFile, {
  file: req.file,
  filters: req.query
})

const health = (req: Request, res: Response) => {
  const { status, success, message, data } = response.success('Connected')
  return res.status(status).send({ success, message, data })
}

const indexController = { index, health }
export default indexController
