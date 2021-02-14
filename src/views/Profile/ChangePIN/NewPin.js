import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useSelector, useDispatch } from 'react-redux'
import { setPinNoValid } from '../../../redux/actions/main'

// import helpers
import http from '../../../helpers/Http'

// Import Assets
import './changePin.css'

function NewPin() {
  const [inputOne, setInputOne] = useState('')
  const [inputTwo, setInputTwo] = useState('')
  const [inputThree, setInputThree] = useState('')
  const [inputFour, setInputFour] = useState('')
  const [inputFive, setInputFive] = useState('')
  const [inputSix, setInputSix] = useState('')
  const pin = `${inputOne}${inputTwo}${inputThree}${inputFour}${inputFive}${inputSix}`

  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const decodedToken = jwt_decode(token)

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
    const { id } = decodedToken

    const params = new URLSearchParams()
    params.append('pin', pin)

    http(token).patch(`/auth/pin/${id}`, params)
      .then(() => {
        dispatch(setPinNoValid())
      })
      .catch(error => {
        setError(error.response.data.message)
      })
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
        <p style={{ color: '#7A7886' }}>Type your new 6 digits security PIN to use in Walletchip.</p>
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
              error ? <small className="text-danger">{error}</small> : ''
            }
          <div className="d-grid mt-5">
            <button style={{ borderRadius: '10px' }} type="submit" className={`btn btn-primary py-2 fw-bold ${disabled ? 'disabled' : ''}`}>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewPin
