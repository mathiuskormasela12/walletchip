import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { login, resetMsg } from '../../redux/actions/auth'
import './LoginForm.css'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch('')
  const msgResponse = useSelector(state => state.auth.message)
  const state = useSelector(state => state.auth.token)
  const history = useHistory()

  const handleChange = (event) => {
    if (event.target.id === 'email') {
      setEmail(event.target.value)
      dispatch(resetMsg())
    } else if (event.target.id === 'password') {
      setPassword(event.target.value)
      dispatch(resetMsg())
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(login(email, password))

  }

  useEffect(() => {
    if (state && history.location.state) {
       return history.push({
          pathname:  `${history.location.state.from.pathname}` || '/'
       });
    } else if (state) {
       return history.push({
          pathname: '/dashboard'
       });
    }
 })
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
            {
              msgResponse !== '' ?
                <div className="row mt-4">
                  <div className="alert alert-warning" role="alert">
                    {msgResponse}
                  </div>
                </div>
              :
              ''
            }

            <div className="row">
              <form onSubmit={handleSubmit}>
                <div className="my-5 position-relative d-flex align-items-center">
                  <i className="far fa-envelope position-absolute text-muted ms-2"></i>
                  <input type="email" className="form-control border-top-0 border-start-0 border-2 rounded-0 outline-none border-end-0 ps-5 form-change-password" id="email" onChange={event => handleChange(event)} aria-describedby="emailHelp" placeholder="Enter Your Email" />
                </div>
                <div className="mt-5 position-relative d-flex align-items-center">
                  <i className="far fa-unlock-alt position-absolute text-muted ms-2"></i>
                  <i className="far fa-eye-slash position-absolute text-muted eye-icon"></i>
                  <input type="password" className="form-control border-top-0 border-start-0 border-2 rounded-0 outline-none border-end-0 ps-5 form-change-password" id="password" onChange={event => handleChange(event)} placeholder="Enter Your Password" />
                </div>
                <div className="row mt-3">
                  <Link to="/auth/forgot/" className="text-end fw-bold text-decoration-none"><small>Forgot Password?</small></Link>
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


