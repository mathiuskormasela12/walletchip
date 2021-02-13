import http from "../../helpers/Http"

export const register = (username, email, password) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('username', username)
    params.append('email', email)
    params.append('password', password)
    try {
      const response = await http().post('auth/register', params)
      console.log(response.data, '<<<<< ini response');
      dispatch({
        type: 'STATUS_REGISTER',
        payload: response.data.status
      })
      dispatch({
        type: 'MESSAGE_REGISTER',
        payload: response.data.message
      })
    } catch (err) {
      dispatch({
        type: 'STATUS_REGISTER',
        payload: err.response.data.status
      })
      dispatch({
        type: 'MESSAGE_REGISTER',
        payload: err.response.data.message
      })
    }
  }
}

export const resetStateRegister = () => {
  return async dispatch => {
    dispatch({
      type: 'STATUS_REGISTER',
      payload: ''
    })
    dispatch({
      type: 'MESSAGE_REGISTER',
      payload: ''
    })
  }
}