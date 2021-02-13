const initialState = {
  peekPassword: false
}

const mainReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'PEEK_PASSWORD': {
      return {
        ...state,
        peekPassword: !state.peekPassword
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