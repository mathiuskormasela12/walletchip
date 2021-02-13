const initialState = {
 userDetail : []
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_USER_LOGGED_IN': {
      return {
        ...state,
        userDetail: action.payload
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}

export default userReducer