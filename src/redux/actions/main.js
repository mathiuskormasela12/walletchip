export const showPassword = () => {
  return async dispatch => {
    dispatch({
      type: 'PEEK_PASSWORD'
    })
  }
}