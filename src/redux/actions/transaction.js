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