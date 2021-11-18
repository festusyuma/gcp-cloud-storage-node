export interface ServiceResponse<T = any> {
  status: number,
  success: boolean,
  message: string,
  data?: T,
}

export interface ServiceResponseParams<T = any> {
  status?: number,
  success?: boolean,
  message: string,
  data?: T,
}

export interface ServiceParamsRepo<T = any> {
  success: boolean,
  message: string,
  data?: T,
}
