export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}