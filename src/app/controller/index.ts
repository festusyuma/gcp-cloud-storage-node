import {ServiceResponse} from "../dto/response";
import {Response} from "express";

import IndexController from './IndexController'

export const build = async (res: Response, service: (params?: any) => Promise<ServiceResponse>, params?: any) => {
  const { status, success, message, data } = await service(params)
  return res.status(status).send({ success, message, data })
}

export { IndexController }
