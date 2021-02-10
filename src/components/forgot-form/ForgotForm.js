import React from 'react'

export function ForgotForm() {
  return (
    <>
      <div className="col-lg-6">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-8 col-8 py-5">
            <div className="row my-2">
              <h4 className="fw-bold">
                  Did You Forgot Your Password?
                  Don’t Worry, You Can Reset Your
                  Password In a Minutes.
                </h4>
            </div>
            <div className="row my-2">
              <small className="text-muted">
              To reset your password, you must type your e-mail and we will send a 
              link to your email and you will be directed to the reset password screens.
                </small>
            </div>
            <div className="row">
              <form>
                <div className="my-5 position-relative d-flex align-items-center">
                  <i className="far fa-envelope position-absolute text-muted ms-2"></i>
                  <input type="email" className="form-control border-top-0 border-start-0 border-end-0 border-bottom-2 ps-5" id="email" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                </div>
                <div className="d-grid mt-5">
                  <button type="submit" className="btn btn-gray py-2 fw-bold text-secondary">Confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


