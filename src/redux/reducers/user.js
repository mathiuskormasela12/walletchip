const initialState = {
  firstName: 'Rizki',
  lastName: 'Ramadhan',
  username: '',
  email: '',
  phone: '+62 8139 3877 7946',
  avatar: 'https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg'
}

const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'GET_USER_LOGGED_IN': {
      return {
        ...state,
        firstName: action.results.firstName,
        lastName: action.results.lastName,
        username: action.results.username,
        email: action.results.email,
        avatar: `${process.env.REACT_APP_API_URL}profile/${action.results.picture}`
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