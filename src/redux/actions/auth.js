import http from "../../helpers/Http"

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export const login = (email, password) => {
  return async dispatch => {
      const params = new URLSearchParams()
      params.append('email', email)
      params.append('password', password)
      try {
        const data = await http().post('auth/login', params)
        console.log(data.data);
        dispatch({
          type: 'LOGIN',
          payload: data.data.results.token
        })
        const user = await http(data.data.results.token).get(`dashboard/profile`)
        dispatch({
          type: 'GET_USER_LOGGED_IN',
          payload: user.data.results
        })
      } catch (err) {
        dispatch({
          type: 'SET_MSG_LOGIN',
          payload: err.response.data.message
        })
      }
  }
}

export const getUser = (token) => {
  return async dispatch => {
    try {
      const user = await http(token).get(`dashboard/profile`)
      dispatch({
        type: 'GET_USER_LOGGED_IN',
        payload: user.data.results
      })
    } catch (error) {
      throw error.message
    }
  }
}

export const resetMsg = () => {
  return async dispatch => {
    dispatch({
      type: 'SET_MSG_LOGIN',
      payload: ''
    })
  }
}