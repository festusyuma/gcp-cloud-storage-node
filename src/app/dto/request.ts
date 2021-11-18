export interface CustomRequest {
  // user?: User,
  token?: string,
}

export interface Pagination {
  page: number
  size: number,
  totalPages?: number,
}

export interface ReqParams<T = any> {
  id: number,
  // user: User,
  data: T,
  pagination: Pagination,
  filters: {[key: string]: any},
  reference: string,
  file: Express.Multer.File
}
