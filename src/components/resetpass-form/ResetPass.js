import React from 'react'

export  function ResetPass() {
  return (
    <>
      <div className="col-lg-6">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-8 col-8 py-5">
            <div className="row my-2">
              <h4 className="fw-bold">
                Reset and enter your new password
              </h4>
            </div>
            <div className="row my-2">
              <small className="text-muted">
                take it easy, here you can change your old password
              </small>
            </div>
            <div className="row">
              <form>
                <div className="my-5 position-relative d-flex align-items-center">
                  <i className="far fa-key position-absolute text-muted ms-2"></i>
                  <input type="password" className="form-control border-top-0 border-start-0 border-end-0 border-2 rounded-0 outline-none ps-5" id="email" aria-describedby="emailHelp" placeholder="Enter New Password" />
                </div>
                <div className="my-5 position-relative d-flex align-items-center">
                  <i className="far fa-key position-absolute text-muted ms-2"></i>
                  <input type="password" className="form-control border-top-0 border-start-0 border-end-0 border-2 rounded-0 outline-none ps-5" id="email" aria-describedby="emailHelp" placeholder="Confirm New Password" />
                </div>
                <div className="d-grid mt-5">
                  <button type="submit" className="btn btn-gray py-2 fw-bold text-secondary">Change Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


