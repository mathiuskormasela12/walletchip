import React, { useEffect, useState } from 'react'

// import photoProfile from '../../../assets/images/1.png'
import success from '../../../assets/images/success.png'
// import failed from '../../../assets/images/failed.png'

import './Success.css'
// import moment from 'moment'
import { useSelector } from 'react-redux'
import http from '../../../helpers/Http'
import { Link } from 'react-router-dom'


function TransferSuccess() {
  const results = useSelector(state => state.transaction.results)
  const transaction = useSelector(state => state.transaction)
  const [balance, setBalance] = useState(null)
  const token = useSelector(state => state.auth.token)
  
  const getBalance = async (token) => {
    try {
      const user = await http(token).get(`dashboard/profile`)
      setBalance(user.data.results.balance)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBalance(token)
  }, [])
  
  return (
    <>
      <div className="card px-4 pt-3 shadow-sm border-rad">
        <div className="card-header border-0 bg-transparent">
          <div className="row d-flex justify-content-center align-items-center">
            <img src={success} alt="succes notif" className="success-icon" />
          </div>
          <div className="row text-center mt-3">
            <span className="fw-bold">
              Transfer Success
              </span>
          </div>
          {/* </>
          :
          <>
            <div className="row d-flex justify-content-center align-items-center">
              <img src={failed} alt="succes notif" className="success-icon"/>
            </div>
            <div className="row text-center mt-3">
              <span className="fw-bold">
                Transfer Failed
              </span>
            </div>
            <div className="row text-center mt-3">
              <small className="text-muted">
                We can’t transfer your money at the moment, we recommend you to check your <br/> internet connection and try again.
              </small>
            </div>
            </>
          } */}
        </div>
        <div className='card-body overflow-auto card-transfer-success'>
          <div className="row">
            <div className="card shadow-sm mb-3" id="1">
              <div className="card-body">
                <small className="text-muted">Amount</small> <br />
                <span className="fw-bold text-muted">Rp.{`${results.amount}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Balance Left</small> <br />
                <span className="fw-bold text-muted">Rp.{`${balance}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Date & Time</small> <br />
                <span className="fw-bold text-muted">{`${results.transactionDate}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Notes</small> <br />
                <span className="fw-bold text-muted">{`${results.note}`}</span>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <span className="fw-bold">
              Transfer To
            </span>
          </div>
          <div className="row">
            <div className="card shadow-sm my-2" id="1">
              <div className="card-body">
                <div className="row">
                  <div className="col-1">
                    <img src={transaction.user.picture} alt="avatar" className="img-profile" />
                  </div>
                  <div className="col-11 ps-3">
                    <span className="fw-bold">
                      {`${transaction.user.username}`}
                    </span>
                    <br />
                    <small className="text-muted">
                      {`${transaction.user.phone === null ? 'Phone Number has been not updated' : `${transaction.user.phone}`}`}
                      </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4 mb-5">
            <button className="btn fw-bold text-dark border-0 text-end py-3 px-4 mx-2 btn-gray"><i className="far fa-share-alt"></i></button>
            <button className="btn fw-bold  border-0 text-end py-3 mx-2 btn-gray text-blue"><i className="far fa-download me-3"></i> Download PDF</button>
            <button className="btn btn-blue fw-bold text-white border-0 text-end py-3 mx-2"><Link to="/dashboard">Back To Home </Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransferSuccess
