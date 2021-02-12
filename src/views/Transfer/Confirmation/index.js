import React from 'react'
//import example photo profile
import photoProfile from '../../../assets/images/1.png'

//import file css
import './Confirmation.css'

//import moment
import moment from 'moment'

function Confirmation() {
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
          <div className="d-flex justify-content-end mt-4 mb-5">
            <button className="btn btn-blue fw-bold text-white border-0 text-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Continue</button>
          </div>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-rad">
                <div className="modal-body">
                  <div className="row my-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="modal-title text-start fw-bold">Enter Pin To Transfer</p>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  </div>
                  <div className="row">
                    <small className="text-muted text-start">Enter your 6 digits PIN for confirmation to <br /> continue transferring money. </small>
                  </div>
                  <div className="gap-4 my-5 d-flex justify-content-center align-items-center">
                    {
                      [1, 2, 3, 4, 5, 6].map((element, index) => {
                        return (
                          <React.Fragment key={String(index)}>
                            <input type="text" maxLength="1" className="form-control pin-form-costum d-flex justify-content-center align-items-center" id={element} />
                          </React.Fragment>
                        )
                      })
                    }
                  </div>
                  <div className="d-flex justify-content-end mt-5">
                    <button type="submit" className="btn btn-blue py-2 fw-bold text-white">Confirm</button>
                  </div>
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


