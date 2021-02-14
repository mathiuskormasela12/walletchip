import React, { useEffect, useState } from 'react'

// import file css
import './InputAmount.css'

import { Link, useParams } from 'react-router-dom'
import http from '../../../helpers/Http'
import { useDispatch, useSelector } from 'react-redux'
import {transactionData} from '../../../redux/actions/transaction'
import moment from 'moment'

function InputAmount() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [amount, setAmount] = useState(null)
  const [notes, setNotes] = useState(null)
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const date = `${moment(new Date).format('YYYY-MM-DD ')} ${new Date().toLocaleTimeString('it-IT')}`
  const getUserDetail = async () => {
    try {
      const response = await http(token).get(`receiver/${id}`)
      console.log();
      setUser(response.data.results)
    } catch (err) {
      console.log(err);
    }

  }

  const handleChange = (event) => {
    if (event.target.name === 'amount') {
      setAmount(event.target.value)
    } else if (event.target.name === 'notes') {
      setNotes(event.target.value)
    }
  }

  useEffect(() => {
    dispatch(transactionData(id, date, notes, amount, user))

  }, [notes])

  useEffect(() => {
    getUserDetail()
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
          <div className="row">
            <div className="card shadow-sm my-2" id="1">
              <div className="card-body">
                <div className="row">
                  <div className="col-1">
                    <img src={user === null ? '' : user.picture} alt="avatar" className="img-profile" />
                  </div>
                  <div className="col-11 ps-3">
                    <span className="fw-bold">
                      {user === null ? '' : `${user.first_name === null ? `${user.username}` : `${user.first_name} ${user.last_name}`}`}
                      </span>
                    <br />
                    <small className="text-muted">
                      {user === null ? '' : `${user.phone === null ? `User has not yet updated the phone number` : `${user.phone}`}`}
                      </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <span className="fw-bold">
                Input Amount
              </span>
            </div>
            <div className="row">
              <div className="card shadow-sm my-2" id="1">
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label text-muted">Amount</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-transparent border-0 border-rad_input fw-bold" id="basic-addon1">Rp.</span>
                      <input type="number" className="form-control py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon1" name="amount" onChange={event => handleChange(event)} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-muted">Notes</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0" placeholder="Enter notes transfer" aria-label="notes" aria-describedby="basic-addon1" name="notes" onChange={event => handleChange(event)} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-4 mb-2">
                    
                      <button className="btn btn-blue fw-bold text-white border border-2 rounded-2 text-end"><Link to={`/transfer/input-amount/${id}/confirm`}>Continue</Link></button>
                    
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default InputAmount
