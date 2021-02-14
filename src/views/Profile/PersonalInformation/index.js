import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../../redux/actions/auth'

// Import Helpers
import http from '../../../helpers/Http'

function PersonalInformation() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.userDetail)
  const token = useSelector(state => state.auth.token)
  const [firstName, setFirstName] = useState(user.first_name)
  const [lastName, setLastName] = useState(user.last_name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const decodedToken = jwt_decode(token)

  const submitHandler = (event) => {
    event.preventDefault()
    const { id } = decodedToken

    const params = new URLSearchParams()
    params.append('firstName', firstName)
    params.append('lastName', lastName)
    params.append('email', email)
    params.append('phone', phone)
    
    http(token).patch(`/user/${id}`, params)
      .then(response => {
        setMessage(response.data.message)
      })
      .catch(error => {
        setError(error.data.message)
      })
  }

  React.useEffect(() => {
    dispatch(getUser(token))
  }, [])

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
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="card shadow-sm my-3" id="1">
                <div className="card-body">
                  <small className="text-muted">First Name</small> <br />
                  <input onChange={e => setFirstName(e.target.value)} value={firstName} className="form-control py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0 fw-bold" type="text" placeholder="" aria-label="default input example"/>
                </div>
              </div>
              <div className="card shadow-sm my-3" id="1">
                <div className="card-body">
                  <small className="text-muted">Last Name</small> <br />
                  <input onChange={e => setLastName(e.target.value)} value={lastName} className="form-control py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0 fw-bold" type="text" placeholder="" aria-label="default input example"/>
                </div>
              </div>
              <div className="card shadow-sm my-3" id="1">
                <div className="card-body">
                  <small className="text-muted">Verified E-mail</small> <br />
                  <input onChange={e => setEmail(e.target.value)} value={email} className="form-control py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0 fw-bold" type="email" placeholder="" aria-label="default input example"/>
                </div>
              </div>
              <div className="card shadow-sm my-3" id="1">
                <div className="card-body">
                  <small className="text-muted">Phone Number</small> <br />
                  <div className="d-flex align-items-center position-relative justify-content-end">
                    <input onChange={e => setPhone(e.target.value)} value={phone} className="form-control bg-transparent py-2 border-top-0 border-start-0 border-end-0 border-2 outline-none rounded-0 fw-bold" type="text" placeholder="" aria-label="default input example"/>
                  </div>
                </div>
              </div>
            </div>
            {
              message ? <small className="text-success">{message}</small> : ''
            }
            {
              error ? <small className="text-danger">{error}</small> : ''
            }
            <div className="d-grid my-3">
              <button type="submit" className="btn btn-blue py-3 fw-bold text-white">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PersonalInformation
