export const transactionData = (id, date, note, amount, user) => {
    return async dispacth => {
        dispacth({
            type: 'ADD_DATA',
            id: id,
            transactionDate: date,
            note: note,
            amount: amount,
            user: user
        })
    }
}

export const results = (data) => {
    return async dispacth => {
        dispacth({
            type: 'RESULTS',
            results: data
        })
    }
}

import http from '../../helpers/Http'
export const getTransactions = (token, link='/transaction-history') => {
  return async dispatch => {
    try {
      const response = await http(token).get(link)
      dispatch({
        type: 'TRANSACTIONS',
        results: response.data.results,
        pageInfo: response.data.pageInfo
      })
    } catch (err) {
      console.error(err.response.data.message)
    }
  }
}