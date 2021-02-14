import React from 'react'
import { useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'

// import helpers
import http from '../../../helpers/Http'

// Import Assets
import './changePassword.css'

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = React.useState(false)
  const [newPassword, setNewPassword] = React.useState(false)
  const [repeatPassword, setRepeatPassword] = React.useState(false)
  const [currentClass, setCurrentClass] = React.useState(null)
  const [newClass, setNewClass] = React.useState(null)
  const [repeatClass, setRepeatClass] = React.useState(null)
  const [currentPasswordInput, setCurrentPasswordInput] = React.useState('')
  const [newPasswordInput, setNewPasswordInput] = React.useState('')
  const [repeatPasswordInput, setRepeatPasswordInput] = React.useState('')

  const token = useSelector(state => state.auth.token)
  const decodedToken = jwt_decode(token)

  const [message, setMessage] = React.useState('')
  const [error, setError] = React.useState('')
  const [disabled, setDisabled] = React.useState(true)

  const currentEye = event => {
    event.preventDefault()
    setCurrentPassword(initialState => !initialState)
  }

  const newEye = event => {
    event.preventDefault()
    setNewPassword(initialState => !initialState)
  }

  const repeatEye = event => {
    event.preventDefault()
    setRepeatPassword(initialState => !initialState)
  }

  const currentInput = event => {
    if (event.target.value.length > 0) {
      setCurrentClass('focused-input')
    } else {
      setCurrentClass(null)
    }
    setCurrentPasswordInput(event.target.value)
  }
  const newInput = event => {
    if (event.target.value.length > 0) {
      setNewClass('focused-input')
    } else {
      setNewClass(null)
    }
    setNewPasswordInput(event.target.value)
  }
  const repeatInput = event => {
    if (event.target.value.length > 0) {
      setRepeatClass('focused-input')
    } else {
      setRepeatClass(null)
    }
    setRepeatPasswordInput(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setMessage('')
    setError('')

    const { id } = decodedToken

    if (newPasswordInput !== repeatPasswordInput) {
      return setError("Password doesn't match !")
    }

    const params = new URLSearchParams()
    params.append('currentPassword', currentPasswordInput)
    params.append('newPassword', newPasswordInput)
    
    http(token).patch(`/user/password/${id}`, params)
      .then(response => {
        setMessage(response.data.message)
      })
      .catch(error => {
        setError(error.response.data.message)
      })
  }

  React.useEffect(() => {
    if (currentClass !== null && newClass !== null && repeatClass !== null) {
      setDisabled(initialState => !initialState)
    } else {
      setDisabled(true)
    }
  }, [currentClass, newClass, repeatClass])

  return (
    <div className="card shadow-sm p-4">
      <div className="card-header border-0 bg-transparent pt-4">
        <h5 className="fw-bold mb-4">Change Password</h5>
        <p style={{ color: '#7A7886' }}>You must enter your current password and then<br/>type your new password twice.</p>
      </div>
      <div className="card-body text-center">
        <div style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
          {
            message ? <small className="text-success">{message}</small> : ''
          }
          {
            error ? <small className="text-danger">{error}</small> : ''
          }
          <form onSubmit={submitHandler} className="form-change-password">
            <div className="mb-5 position-relative">
              <svg style={{ bottom: '10px' }} className="position-absolute left-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5V21H19V11Z" stroke={currentClass ? '#6379F4' : '#A9A9A9'} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9" stroke={currentClass ? '#6379F4' : '#A9A9A9'} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
              </svg>
              <input value={currentPasswordInput} className={`w-100 py-2 ${currentClass}`} onChange={currentInput} type={currentPassword ? 'text' : 'password'} name="currentPassword" id="currentPassword" placeholder="Current password" />
              {
                currentPassword ? (
                  <svg style={{ cursor: 'pointer', position: 'absolute', right: '0', bottom: '10px' }} onClick={currentEye} width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6379F4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg style={{ cursor: 'pointer', position: 'absolute', right: '0', bottom: '10px' }} onClick={currentEye} width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#A9A9A9">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              }
            </div>
            <div className="mb-5 position-relative">
              <svg style={{ bottom: '10px' }} className="position-absolute left-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5V21H19V11Z" stroke={newClass ? '#6379F4' : '#A9A9A9'} 
                strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9" stroke={newClass ? '#6379F4' : '#A9A9A9'} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
              </svg>
              <input value={newPasswordInput} className={`w-100 py-2 ${newClass}`} onChange={newInput} type={newPassword ? 'text' : 'password'} name="newPassword" id="newPassword" placeholder="New password" />
              {
                newPassword ? (
                  <svg style={{ cursor: 'pointer', position: 'absolute', right: '0', bottom: '10px' }} onClick={newEye}width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6379F4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg style={{ cursor: 'pointer', position: 'absolute', right: '0', bottom: '10px' }} onClick={newEye} width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#A9A9A9">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              }
            </div>
            <div className="mb-5 position-relative">
              <svg style={{ bottom: '10px' }} className="position-absolute left-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5V21H19V11Z" stroke={repeatClass ? '#6379F4' : '#A9A9A9'} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9" stroke={repeatClass ? '#6379F4' : '#A9A9A9'} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
              </svg>
              <input value={repeatPasswordInput} className={`w-100 py-2 ${repeatClass}`} onChange={repeatInput} type={repeatPassword ? 'text' : 'password'} name="repeatPassword" id="repeatPassword" placeholder="Repeat new password" />
              {
                repeatPassword ? (
                  <svg style={{ cursor: 'pointer', position: 'absolute', right: '0', bottom: '10px' }} onClick={repeatEye} width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6379F4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg style={{ cursor: 'pointer', position: 'absolute', right: '0', bottom: '10px' }} onClick={repeatEye} width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#A9A9A9">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              }
            </div>
            <button style={{ borderRadius: '10px' }} type="submit" className={`btn fw-bold btn-primary p-3 w-100 my-2 d-flex align-items-center justify-content-center ${disabled ? 'disabled' : ''}`}>
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
