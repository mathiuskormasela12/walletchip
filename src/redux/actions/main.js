import http from '../../helpers/Http'
import jwt_decode from 'jwt-decode'

export const showPassword = () => {
  return async dispatch => {
    dispatch({
      type: 'PEEK_PASSWORD'
    })
  }
}

export const validatePin = (token, pin) => {
  return async dispatch => {
    const { id } = jwt_decode(token)
    const params = new URLSearchParams()
    params.append('id', id)
    params.append('pin', pin)
    try {
      const response = await http(token).post('auth/currentPin', params)
      dispatch({
        type: 'VALIDATE_PIN',
        pinValid: response.data.results.isTrue
      })
    } catch (error) {
      dispatch({
        type: 'VALIDATE_PIN',
        pinValid: error.response.data.results.isTrue
      })
    }
  }
}

export const setPinNoValid = () => {
  return async dispatch => {
    dispatch({
      type: 'SET_PIN_NO_VALID'
    })
  }
}