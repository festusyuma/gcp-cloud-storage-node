import { ServiceResponse } from "../dto/response";
import UploadService from "./UploadService";
import { response } from "../util";

export const handleError = (e: any) => {
  console.error('Service error')
  console.error(e)
}

export const service = async (func: () => Promise<ServiceResponse>) => {
  try {
    return await func()
  } catch (e) {
    return response.serverError(e)
  }
}

export {
  UploadService,
}
