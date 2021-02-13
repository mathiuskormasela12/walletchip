const initialState = {
  token: null,
  message : ''
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'LOGIN': {
      return {
        ...state,
        token: action.payload
      }
    }
    case 'SET_MSG_LOGIN': {
      return {
        ...state,
        message: action.payload
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        token: null
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}

export default authReducer