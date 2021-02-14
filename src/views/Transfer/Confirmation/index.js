import React, { useEffect, useState } from 'react'

//import file css
import './Confirmation.css'


// import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import http from '../../../helpers/Http'
import { useHistory } from 'react-router-dom'
import {results} from '../../../redux/actions/transaction'



function Confirmation() {
  const [inputOne, setInputOne] = useState('')
  const history = useHistory()
  const [msgResponse, setMsgRespomse] = useState('')
  const [inputTwo, setInputTwo] = useState('')
  const [inputThree, setInputThree] = useState('')
  const [inputFour, setInputFour] = useState('')
  const [inputFive, setInputFive] = useState('')
  const [inputSix, setInputSix] = useState('')
  const dispatch = useDispatch()
  const pin = `${inputOne}${inputTwo}${inputThree}${inputFour}${inputFive}${inputSix}`
  const transaction = useSelector(state => state.transaction)
  // const user = useSelector(state => state.user)
  const token = useSelector(state => state.auth)
  const [balance, setBalance] = useState(null)

  const getBalance = async (token) => {
    try {
      const user = await http(token).get(`dashboard/profile`)
      setBalance(user.data.results.balance)
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (event) => {
    if (event.target.id === "1") {
      setInputOne(event.target.value)
    } else if (event.target.id === "2") {
      setInputTwo(event.target.value)
    } else if (event.target.id === "3") {
      setInputThree(event.target.value)
    } else if (event.target.id === "4") {
      setInputFour(event.target.value)
    } else if (event.target.id === "5") {
      setInputFive(event.target.value)
    } else if (event.target.id === "6") {
      setInputSix(event.target.value)
    }
  }

  const handleClick = async (event) => {
    event.preventDefault()
    const params = new URLSearchParams()
    params.append('receiverId', transaction.id)
    params.append('transactionDate', transaction.transactionDate)
    params.append('note', transaction.note)
    params.append('amount', transaction.amount)
    params.append('pin', pin)
    try {
      const response = await http(token.token).post('transfer', params)
      if (response.data.status === 200) {
        dispatch(results(response.data.results))
        history.push(`/transfer/input-amount/${transaction.id}/confirm/success`)
      } else {
        setMsgRespomse(response.data.message)
      }
    } catch (err) {
      setMsgRespomse(err.response.data.message)
    }
  }

  useEffect(() => {
    getBalance(token.token)
  }, [])

  return (
    <>
      <div className="card px-4 pt-3 shadow-sm border-rad">
        <div className="card-header border-0 bg-transparent">
          <div className="row">
            <span className="fw-bold">
              Transfer To
            </span>
          </div>
          {
            msgResponse === '' ? '' :
              <div className="alert alert-danger mt-4" role="alert">
                {msgResponse}
              </div>
          }
          <div className="row">
            <div className="card shadow-sm my-2" id="1">
              <div className="card-body">
                <div className="row">
                  <div className="col-1">
                    <img src={transaction.user.picture} alt="avatar" className="img-profile" />
                  </div>
                  <div className="col-11 ps-3">
                    <span className="fw-bold">
                      {`${transaction.user.first_name === null ? `${transaction.user.username}` : `${transaction.user.first_name} ${transaction.user.last_name}`}`}
                    </span>
                    <br />
                    <small className="text-muted">
                      {`${transaction.user.phone === null ? 'phone number has not been updated' : `${transaction.user.phone}`}`}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <span className="fw-bold">
              Details
            </span>
          </div>
        </div>
        <div className="card-body overflow-auto card-confirmation">
          <div className="row">
            <div className="card shadow-sm mb-3" id="1">
              <div className="card-body">
                <small className="text-muted">Amount</small> <br />
                <span className="fw-bold text-muted">Rp.{`${transaction.amount}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Balance Left</small> <br />
                <span className="fw-bold text-muted">{`${Number(balance) - Number(transaction.amount) < 0 ? 'not enough money' : `Rp. ${Number(balance) - Number(transaction.amount)}`}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Date & Time</small> <br />
                <span className="fw-bold text-muted">{`${transaction.transactionDate}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Notes</small> <br />
                <span className="fw-bold text-muted">{`${transaction.note}`}</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4 mb-5">
            <button className="btn btn-blue fw-bold text-white border-0 text-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Continue</button>
          </div>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-rad">
                <div className="modal-body">
                  <form>
                    <div className="row my-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="modal-title text-start fw-bold">Enter Pin To Transfer</p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                    </div>
                    <div className="row">
                      <small className="text-muted text-start">Enter your 6 digits PIN for confirmation to <br /> continue transferring money. </small>
                    </div>
                    {
                      msgResponse === '' ? '' :
                        <div className="alert alert-warning" role="alert">
                          {msgResponse}
                        </div>
                    }
                    <div className="gap-4 my-5 d-flex justify-content-center align-items-center">
                      {
                        [1, 2, 3, 4, 5, 6].map((element, index) => {
                          return (
                            <React.Fragment key={String(index)}>
                              <input type="text" maxLength="1" className="form-control pin-form-costum d-flex justify-content-center align-items-center" id={element} onChange={event => handleChange(event)} />
                            </React.Fragment>
                          )
                        })
                      }
                    </div>
                    <div className="d-flex justify-content-end mt-5">
                      <button type="submit" className="btn btn-blue py-2 fw-bold text-white" data-bs-dismiss="modal" onClick={handleClick}>Confirm</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Confirmation


