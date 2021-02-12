import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showPassword } from '../../../redux/actions/main'

// Import Assets
import './changePassword.css'

function ChangePassword() {
  const peekPassword = useSelector(state => state.main.peekPassword)
  const dispatch = useDispatch()

  const eyeOnClick = event => {
    event.preventDefault()
    dispatch(showPassword())
  }

  return (
    <div className="card shadow-sm p-4">
      <div className="card-header border-0 bg-transparent pt-4">
        <h5 className="fw-bold mb-4">Change Password</h5>
        <p style={{ color: '#7A7886' }}>You must enter your current password and then<br/>type your new password twice.</p>
      </div>
      <div className="card-body text-center">
        <div style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
          <form className="form-change-password">
            <div className="mb-5">
              <input className="w-100 py-2" type="text" name="currentPassword" id="currentPassword" placeholder="Current password" />
            </div>
            <div className="mb-5">
              <input className="w-100 py-2" type="text" name="newPassword" id="newPassword" placeholder="New password" />
            </div>
            <div className="mb-5">
              <input className="w-100 py-2" type="text" name="repeatNewPassword" id="repeatNewPassword" placeholder="Repeat new password" />
              <button onClick={eyeOnClick} className="border-0 bg-transparent position-absolute eye">
                {
                  peekPassword ? (
                    <svg width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6379F4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#A9A9A9">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )
                }
              </button>
            </div>
            <button type="submit" className="btn fw-bold btn-profile-navigation p-3 w-100 my-2 d-flex align-items-center justify-content-center">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
