import {ServiceResponseParams, ServiceResponse} from "../dto/response";
import {handleError} from "../service";

const build = ({ status, success = false, message, data = null }: ServiceResponseParams): ServiceResponse => {
    return { status: status ? status : 500, success, message, data }
}

const success = (message: string, data: any = null) => {
    return build({
        status: 200, success: true, message, data
    })
}

const failed = (message: string, data: any = null) => {
    return build({
        status: 200, message, data
    })
}

const badRequest = (message: string) => {
    return build({
        status: 400, message
    })
}

const unauthorized = (message: string = 'Unauthorized') => {
    return build({
        status: 401, message
    })
}

const forbidden = (message: string = 'You do not have permission') => {
      return build({
          status: 403, message
      })
}

const serverError = (e: any = null) => {
    handleError(e)
    return build({
        status: 500,
        message: 'An internal server error occurred'
    })
}

const Response = { success, failed, badRequest, unauthorized, forbidden, serverError }
export default Response
