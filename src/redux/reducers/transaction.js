const initialState = {
  results: [],
  pageInfo: {}
}

const transactionReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'TRANSACTIONS': {
      return {
        ...state,
        results: action.results,
        pageInfo: action.pageInfo
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}

export default transactionReducer