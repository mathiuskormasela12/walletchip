import React from 'react'
import './AuthLayout.css'
import logo from '../../assets/images/walletchip-v2.png'
import reviewApp from '../../assets/images/walletchip-review.png'
import { Link } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <div className="col-lg-6 vh-100 bg-layout-auth bg-theme px-5 py-4">
        <div className="row">
          <Link to='/'>
            <img src={logo} alt="logo" className="walletchip-logo ms-5 mt-2"/>
          </Link>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <img src={reviewApp} alt="review wallet chip" className="review-app-photo"/>
        </div>
        <div className="row">
          <div className="ms-5 mt-4">
            <h5 className="fw-bold text-white">App that Covering Banking Needs.</h5>
            <small className="text-white">
              Wallet Chip is an application that focussing in banking needs for all users <br/>
              in the world. Always updated and always following world trends. <br/>
              5000+ users registered in wallet chip everyday with worldwide <br/>
              users coverage.
            </small>
          </div>
        </div>
      </div>
    </>
  )
}
