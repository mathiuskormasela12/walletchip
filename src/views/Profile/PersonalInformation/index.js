import React from 'react'

function PersonalInformation() {
  return (
    <>
      <div className="card shadow-sm border-rad px-3 py-2">
        <div className="card-header bg-transparent border-0">
          <p className="fw-bold text-dark">
            Personal Information
          </p>
          <small className="text-muted">
            We got your personal information from the sign <br/> up proccess. If you want to make changes on <br/> your information, contact our support.
          </small>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">First Name</small> <br />
                <input className="form-control py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0 fw-bold" type="text" placeholder="" aria-label="default input example"/>
              </div>
            </div>
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Last Name</small> <br />
                <input className="form-control py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0 fw-bold" type="text" placeholder="" aria-label="default input example"/>
              </div>
            </div>
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Verified E-mail</small> <br />
                <input className="form-control py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0 fw-bold" type="email" placeholder="" aria-label="default input example"/>
              </div>
            </div>
            <div className="card shadow-sm my-3" id="1">
              <div className="card-body">
                <small className="text-muted">Phone Number</small> <br />
                <div className="d-flex align-items-center position-relative justify-content-end">
                  <input className="form-control bg-transparent py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0 fw-bold" type="text" placeholder="" aria-label="default input example"/>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid my-3">
            <button className="btn btn-blue py-3 fw-bold text-white">Update Profile</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInformation
