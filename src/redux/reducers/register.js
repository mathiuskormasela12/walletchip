const initialState = {
  type: 'REGISTER',
  status: '',
  message: ''
}

const registerReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'STATUS_REGISTER': {
      return {
        ...state,
        status: action.payload
      }
    }
    case 'MESSAGE_REGISTER': {
      return {
        ...state,
        message: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default registerReducers