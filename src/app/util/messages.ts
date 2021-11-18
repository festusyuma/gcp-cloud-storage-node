const messages = {
  SUCCESSFUL: 'successful',
  PARAM_REQUIRED: (param: string) => `${param} is required`,
  CREATION_ERROR: (data: string) => `an error occurred while saving ${data}`,
  FETCHING_ERROR: (data: string) => `an error occurred while fetching ${data}`,
  INVALID_ID: (data: string) => `invalid ${data} id`,
  INVALID_PARAM: (data: string) => `invalid ${data}`,
}

export default messages
