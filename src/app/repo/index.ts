export const handleError = (e: any) => {
  console.error('Repo error')
  console.error(e)
}

export const repo = async (func: () => any) => {
  try {
    return await func()
  } catch (e) {
    handleError(e)
  }

  return null
}

export {

}
