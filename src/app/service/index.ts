import response from "../util/response";
import { ServiceResponse } from "../dto/response";

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

}
