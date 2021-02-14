import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import http from '../../helpers/Http'

export function ResetPass() {
  const { token } = useParams()
  const history = useHistory()
  const [idUser, setIdUser] = useState('')
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [msgResponse, setMsgResponse] = useState('')
  const [responseStat, setResponseStat] = useState('')


  const compareToken = async (token) => {
    try {
      const compareId = jwt_decode(token)
      await setIdUser(compareId.id)
      await setEmail(compareId.email)
      console.log(idUser);
      console.log(compareId.id, 'ini id');
    } catch (err) {
      history.push('/auth/register')
    }
  }

  useEffect(() => {
    compareToken(token)
  }, [])

  const handleChange = (event) => {
    if (event.target.id === 'new-pass') {
      setNewPassword(event.target.value)
    } else if (event.target.id === 'confirm-pass') {
      setConfirmPass(event.target.value)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const params = new URLSearchParams()
    params.append('password', confirmPass)
    params.append('email', email)
    try {
      const response = await http().patch(`auth/password/${idUser}`, params)
      setMsgResponse(response.data.message)
      setResponseStat(response.data.status)
    } catch (err) {
      setMsgResponse(err.response.data.message)
      setResponseStat(err.response.data.status)
    }

  }
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
            {
              msgResponse !== '' && responseStat === 200 ?
                <>
                  <div className="alert alert-warning mt-4" role="alert">
                    {msgResponse}
                  </div>
                  <div className="row d-grid">
                    <Link to='/auth/login' className="fw-bold text-center btn btn-blue text-white py-3 mt-4">Login</Link>
                  </div>
                </>
                :
                <>
                  {
                    msgResponse !== '' ?
                      <div className="alert alert-warning" role="alert">
                        {msgResponse}
                      </div>
                      :
                      ''
                  }
                  <div className="row">
                    <form onSubmit={handleSubmit}>
                      <div className="my-5 position-relative d-flex align-items-center">
                        <i className="far fa-key position-absolute text-muted ms-2"></i>
                        <input type="password" className="form-control border-top-0 border-start-0 border-end-0 border-2 rounded-0 outline-none ps-5" id="new-pass" onChange={event => handleChange(event)} aria-describedby="emailHelp" placeholder="Enter New Password" />
                      </div>
                      <div className="my-5 position-relative d-flex align-items-center">
                        <i className="far fa-key position-absolute text-muted ms-2"></i>
                        <input type="password" className={`form-control border-top-0 border-start-0 border-end-0 border-2 rounded-0 outline-none ps-5  ${newPassword !== confirmPass ? 'border-danger' : ''}`} id="confirm-pass" onChange={event => handleChange(event)} aria-describedby="emailHelp" placeholder="Confirm New Password" />
                      </div>
                      <div className="d-grid mt-5">
                        <button type="submit" className={`btn btn-gray py-2 fw-bold text-secondary ${newPassword !== confirmPass ? 'disabled' : ''}`}>Change Password</button>
                      </div>
                    </form>
                  </div>
                </>
            }
          </div>
        </div>
      </div>
    </>
  )
}


