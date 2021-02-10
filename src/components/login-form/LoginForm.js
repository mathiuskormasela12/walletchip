import React from 'react'
import './LoginForm.css'

export function LoginForm() {
  return (
    <>
      <div className="col-lg-6">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-8 col-8 py-5">
            <div className="row my-2">
              <h4 className="fw-bold">
                Start Accessing Banking Needs
                With All Devices and All Platforms
                With 30.000+ Users
              </h4>
            </div>
            <div className="row my-2">
              <small className="text-muted">
                Transfering money is eassier than ever, 
                you can access walletchip wherever you are. Desktop, laptop, mobile phone? 
                we cover all of that for you!
              </small>
            </div>
            <div className="row">
              <form>
                <div className="my-5 position-relative d-flex align-items-center">
                  <i className="far fa-envelope position-absolute text-muted ms-2"></i>
                  <input type="email" className="form-control border-top-0 border-start-0 border-end-0 border-bottom-2 ps-5" id="email" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                </div>
                <div className="mt-5 position-relative d-flex align-items-center">
                  <i className="far fa-unlock-alt position-absolute text-muted ms-2"></i>
                  <i className="far fa-eye-slash position-absolute text-muted eye-icon"></i>
                  <input type="password" className="form-control border-top-0 border-start-0 border-end-0 border-bottom-2 ps-5" id="password" placeholder="Enter Your Password" />
                </div>
                <div className="row mt-2">
                  <small className="text-end fw-bold">Forgot Password?</small>
                </div>
                <div className="d-grid mt-5">
                  <button type="submit" className="btn btn-gray py-2 fw-bold text-secondary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


