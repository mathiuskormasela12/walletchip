import React from 'react'

// import file css
import './InputAmount.css'

//import example photo profile
import photoProfile from '../../../assets/images/1.png'
import { Link } from 'react-router-dom'

function InputAmount() {
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
                    <img src={photoProfile} alt="avatar" className="img-profile" />
                  </div>
                  <div className="col-11 ps-3">
                    <span className="fw-bold">
                      Samuel Suhi
                      </span>
                    <br />
                    <small className="text-muted">
                      +62 812-4343-6731
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
                      <span className="input-group-text bg-transparent border-0 border-rad_input" id="basic-addon1">Rp.</span>
                      <input type="number" className="form-control py-2 rounded-3" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-muted">Notes</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control py-2 rounded-3" placeholder="Enter notes transfer" aria-label="notes" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-4 mb-2">
                    <Link to="/transfer/input-amount/confirm">
                      <button className="btn btn-blue fw-bold text-white border border-2 rounded-2 text-end">Continue</button>
                    </Link>
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
