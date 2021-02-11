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
    default : {
      return {
        ...state
      }
    }
  }
}

export default authReducer