const initialState = {
  token: null
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'LOGIN': {
      return {
        ...state,
        token: action.token
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