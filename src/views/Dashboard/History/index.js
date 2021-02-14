import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTransactions } from '../../../redux/actions/transaction'

// Import Assets
import { Footer, Navbar } from '../../../components'
import './history.css'

function History() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const transactions = useSelector(state => state.transaction.results)
  const pageInfo = useSelector(state => state.transaction.pageInfo)

  const clickHandler = async (event) => {
    if (event.target.name === 'next') {
      dispatch(getTransactions(token, pageInfo.nextLink))
    } else if (event.target.name === 'prev') {
      dispatch(getTransactions(token, pageInfo.prevLink))
    }
  }

  React.useEffect(() => {
    dispatch(getTransactions(token))
  }, [])

  return (
    <>
      <Navbar>
      <div className="card shadow-sm">
      <div className="card-header border-0 bg-transparent pt-4">
        <h5 className="fw-bold">Transaction History</h5>
      </div>
      <div className="card-body pt-0 p-4">
        {
          transactions.map((transaction, index) => {
            return (
              <div key={index} className="d-flex justify-content-between align-items-center ps-0 p-4">
                <div className="d-flex">
                  <img src={transaction.picture} alt={transaction.picture} className="img-fluid img-avatar me-3"/>
                  <div className="text-left">
                    <span style={{ fontWeight: '700', color: 'black' }}>{transaction.another_user}</span>
                    <br/>
                    <small>Transfer</small>
                  </div>
                </div>
                {
                  transaction.did_user_transfer === true ? (
                    <span style={{ color: '#1EC15F' }} className="fw-bold">+Rp{transaction.amount}</span>
                  ) : (
                    <span style={{ color: '#FF5B37' }} className="fw-bold">-Rp{transaction.amount}</span>
                  )
                }
              </div>
            )
          })
        }
        <div className="w-100 d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={`page-item ${pageInfo.prevLink === null ? 'disabled' : ''}`}>
                <button className="page-link" name="prev" onClick={clickHandler} aria-label="Previous">
                  &laquo;
                </button>
              </li>
              <li className="page-item active"><a className="page-link" href="#">{pageInfo.currentPage}</a></li>
              <li className={`page-item ${pageInfo.nextLink === null ? 'disabled' : ''}`}>
                <button className="page-link" name="next" onClick={clickHandler} aria-label="Next">
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
      </Navbar>
      <Footer />
    </>
  )
}

export default History
