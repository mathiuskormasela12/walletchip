import React from 'react'
import { AuthLayout } from '../../../components'
import success from '../../../assets/images/success.png'
import { Link } from 'react-router-dom'
//import jwt decode


function Activated() {
  return (
    <>
      <div className="row vw-100">
        <AuthLayout />
        <div className="col-lg-6">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-8 col-8 py-5">
              <div className="row d-flex justify-content-center align-items-center">
                <img src={success} alt="succes notif" className="success-icon" />
              </div>
              <div className="row mt-4">
                <h4 className="fw-bold text-break">
                  Congratulations, your account has been verified, enjoy our services with a myriad of features and conveniences. Please login to enter the dashboard page
                </h4>
              </div>
              <div className="row d-grid mt-5">
                <Link to="/auth/login"  className="btn btn-blue fw-bold text-white py-3"><i className="far fa-sign-in-alt me-3"></i>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Activated
