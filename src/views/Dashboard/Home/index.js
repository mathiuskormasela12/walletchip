import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//import example photo profile
import { Footer, Navbar } from '../../../components'

// import css
import './home.css'
import http from '../../../helpers/Http'

function Home() {
  const [listHistory, setListHistory] = useState(null)
  const [msgResponse, setMsgResponse] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  // const [isLoading, isLoading] = useState(false)
  const user = useSelector(state => state.user.userDetail)
  const [balance, setBalance] = useState('')
  const token = useSelector(state => state.auth.token)

  const getTransactionHistory = async (token) => {
    try {
      const response = await http(token).get('transaction-history')
      if (response.data.results) {
        setIsLoading(!isLoading)
        setListHistory(response.data.results)
      } else {
        setIsLoading(!isLoading)
        setListHistory(null)
        setMsgResponse(response.data.message)
      }
    } catch (err) {
      setMsgResponse(err.response.data.message);
    }
  }

  const getBalance = async (token) => {
    try {
      const user = await http(token).get(`dashboard/profile`)
      setBalance(user.data.results.balance)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTransactionHistory(token)
    getBalance(token)
    // setTimeout(() => {
    //   setIsLoading(!isLoading)
    // }, 1500)
  }, [])
  console.log(msgResponse);
  React.useEffect(() => {
    document.title = `${user.first_name}'s Dashboard - Walletchip`
  }, [])

  return (
    <>
      <Navbar>
        <div className="row">
          <div className="card card-balance">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="row">
                    <p style={{ color: "#E0E0E0" }}>Balance</p>
                  </div>
                  <div className="row">
                    <h2 className="fw-bold text-white">Rp.{`${balance}`}</h2>
                  </div>
                  <div className="row mt-2">
                    <small style={{ color: "#E0E0E0" }}>{`${user.phone === null ? 'Update Your Phone' : user.phone}`}</small>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row my-3">
                    <div className="d-grid">
                      <button className="btn border border-2 py-2 btn-balance-control fw-bold">
                        <i className="far fa-arrow-up me-3" style={{ color: "#E0E0E0" }}></i>
                        <Link to="/transfer" className="text-decoration-none text-white"> Transfer </Link>
                      </button>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="d-grid">
                      <button className="btn border border-2 py-2 btn-balance-control fw-bold text-white">
                        <i className="far fa-plus me-3" style={{ color: "#E0E0E0" }}></i>
                        <Link to="/topup" className="text-decoration-none text-white"> Topup </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="card shadow-sm ">
            <div className="card-head">
              <div className="row my-4 px-3">
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">
                    Transaction History
                </span>
                  <Link to="/dashboard/history" style={{ color: "#6379F4" }} className="text-decoration-none">
                    See all
                </Link>
                </div>
              </div>
            </div>
            <div className="card-body overflow-auto card-transaction-history">
              {listHistory === null ?
                <>
                  {
                    isLoading === true ?
                      <>
                        <div className="d-flex justify-content-center align-items-center width-100">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </>
                      :
                      'User has no transactional history'
                  }
                </>
                :
                <>
                  {
                    isLoading === true ?
                      <>
                        <div className="d-flex justify-content-center align-items-center width-100">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </>
                      :
                      listHistory.map((transaction, index) => {
                        return (
                          <>
                            <div className="row my-1" key={String(index)}>
                              <div className="card">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                      <div className="row">
                                        <img src={transaction.picture} alt="avatar" className="img-profile-avatar" />
                                      </div>
                                    </div>
                                    <div className="col-9">
                                      <div className="row">
                                        <span className="fw-bold">{transaction.another_user}</span>
                                        <small className="text-muted">
                                          {transaction.did_user_transfer === 1 ? 'Subscription' : 'Transfer'}
                                        </small>
                                      </div>
                                    </div>
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                      <div>
                                        <span className={`fw-bold ${transaction.did_user_transfer === 1 ? 'subsription-color' : 'transfer-color'}`}>
                                          {transaction.did_user_transfer === 1 ? `-${transaction.amount}` : `+${transaction.amount}`}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      })
                  }
                </>
              }
            </div>
          </div>
        </div>
      </Navbar>
      <Footer />
    </>
  )
}

export default Home
