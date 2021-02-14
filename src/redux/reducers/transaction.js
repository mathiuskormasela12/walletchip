const initialState = {
  id: '',
  transactionDate: '',
  note: '',
  amount: '',
  user: [],
  pin: '',
  results: []
}

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        id: action.id,
        transactionDate: action.transactionDate,
        note: action.note,
        amount: action.amount,
        user: action.user
      }
    case 'ADD_PIN':
      return {
        ...state,
        pin: action.payload
      }
    case 'RESULTS':
      return {
        ...state,
        results: action.results
      }
    default:
      return {
        ...state
      }
  }
}

export default transactionReducer