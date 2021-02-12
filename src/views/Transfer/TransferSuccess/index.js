import React from 'react'

import photoProfile from '../../../assets/images/1.png'
import success from '../../../assets/images/success.png'

import './Success.css'
import moment from 'moment'


function TransferSuccess() {
  return (
    <>
      <div className="card px-4 pt-3 shadow-sm border-rad">
        <div className="card-header border-0 bg-transparent">
          <div className="row d-flex justify-content-center align-items-center">
            <img src={success} alt="succes notif" className="success-icon"/>
          </div>
          <div className="row text-center mt-3">
            <span className="fw-bold">
              Transfer Success
            </span>
          </div>
        </div>
        <div className="card-body overflow-auto card-transfer-success">
          <div className="row">
            <div className="card shadow-sm mb-3" id="1">
              <div className="card-body">
                <small className="text-muted">Amount</small> <br />
                <span className="fw-bold text-muted">Rp.{`100.000`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Balance Left</small> <br />
                <span className="fw-bold text-muted">Rp.{`20.000`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Date & Time</small> <br />
                <span className="fw-bold text-muted">{`${moment().format('LL LT')}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Notes</small> <br />
                <span className="fw-bold text-muted">For Buying Course Video Programming</span>
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
          <div className="d-flex justify-content-end mt-4 mb-5">
            <button className="btn fw-bold text-dark border-0 text-end py-3 px-4 mx-2 btn-gray" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="far fa-share-alt"></i></button>
            <button className="btn fw-bold  border-0 text-end py-3 mx-2 btn-gray text-blue" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="far fa-download me-3"></i> Download PDF</button>
            <button className="btn btn-blue fw-bold text-white border-0 text-end py-3 mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Back To Home</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransferSuccess
