const initialState = {
  peekPassword: false,
  pinValid: false
}

const mainReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'PEEK_PASSWORD': {
      return {
        ...state,
        peekPassword: !state.peekPassword
      }
    }
    case 'VALIDATE_PIN': {
      return {
        ...state,
        pinValid: action.pinValid
      }
    }
    case 'SET_PIN_NO_VALID': {
      return {
        ...state,
        pinValid: false
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}

export default mainReducer