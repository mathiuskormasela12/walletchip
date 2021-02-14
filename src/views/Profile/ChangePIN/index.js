import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { validatePin } from '../../../redux/actions/main'

// Import Assets
import './changePin.css'

function ChangePIN() {
  const [inputOne, setInputOne] = useState('')
  const [inputTwo, setInputTwo] = useState('')
  const [inputThree, setInputThree] = useState('')
  const [inputFour, setInputFour] = useState('')
  const [inputFive, setInputFive] = useState('')
  const [inputSix, setInputSix] = useState('')
  const pin = `${inputOne}${inputTwo}${inputThree}${inputFour}${inputFive}${inputSix}`

  const dispatch = useDispatch()
  const pinValid = useSelector(state => state.main.pinValid)
  const token = useSelector(state => state.auth.token)

  const [message, setMessage] = React.useState('')
  const [error, setError] = React.useState('')
  const [disabled, setDisabled] = useState(true)

  const pinHandler = (event) => {
    if (event.target.id === "1") {
      setInputOne(event.target.value)
    } else if (event.target.id === "2") {
      setInputTwo(event.target.value)
    } else if (event.target.id === "3") {
      setInputThree(event.target.value)
    } else if (event.target.id === "4") {
      setInputFour(event.target.value)
    } else if (event.target.id === "5") {
      setInputFive(event.target.value)
    } else if (event.target.id === "6") {
      setInputSix(event.target.value)
    }
  }

  const submitHandler = event => {
    event.preventDefault()
    if (pinValid) {
      setMessage('Successfully create new PIN')
    } else {
      dispatch(validatePin(token, pin))
      setError('wrong PIN!')
    }
  }

  React.useEffect(() => {
    if (inputOne !== null && inputTwo !== null && inputThree !== null && inputFour !== null && inputFive !== null && inputSix !== null) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix])

  return (
    <div className="card shadow-sm p-4 h-100">
      <div className="card-header border-0 bg-transparent pt-4">
        <h5 className="fw-bold mb-4">Change PIN</h5>
        <p style={{ color: '#7A7886' }}>Enter your current 6 digits Walletchip PIN below to continue to the next steps.</p>
      </div>
      <div className="card-body text-center">
        <form onSubmit={submitHandler} style={{ paddingLeft: '9.5rem', paddingRight: '9.5rem' }}>
          <div className="gap-4 my-5 d-flex justify-content-center align-items-center">
            {
              [1,2,3,4,5,6].map((element, index) => {
                return (
                  <React.Fragment key={String(index)}>
                    <input onChange={pinHandler} type="text" maxLength="1" className="form-control pin-form-costum d-flex justify-content-center align-items-center" id={element} required />
                  </React.Fragment>
                )
              })
            }
          </div>
            {
              message ? <small className="text-success">{message}</small> : ''
            }
            {
              error ? <small className="text-danger">{error}</small> : ''
            }
          <div className="d-grid mt-5">
            <button style={{ borderRadius: '10px' }} className={`btn btn-primary py-2 fw-bold ${disabled ? 'disabled' : ''}`}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePIN
