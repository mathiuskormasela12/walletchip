import React, { useEffect, useState } from 'react'
import './PinForm.css'
import { useHistory, useParams } from 'react-router-dom'
//import jwt decode
import jwt_decode from 'jwt-decode'
import http from '../../helpers/Http'

export function PinForm() {
  const { token } = useParams()
  const history = useHistory()
  const [idUser, setIdUser] = useState('')
  const [inputOne, setInputOne] = useState('')
  const [inputTwo, setInputTwo] = useState('')
  const [inputThree, setInputThree] = useState('')
  const [inputFour, setInputFour] = useState('')
  const [inputFive, setInputFive] = useState('')
  const [inputSix, setInputSix] = useState('')
  const pin = `${inputOne}${inputTwo}${inputThree}${inputFour}${inputFive}${inputSix}`
  const [msgResponse, setMsgResponse] = useState('')
  // console.log(idUser);
  const compareToken = async (token) => {
    try {
      const compareId = jwt_decode(token)
      await setIdUser(compareId.insertId)
      console.log(idUser);
    } catch (err) {
      history.push('/auth/register')
    }
  }

  useEffect(() => {
    compareToken(token)
  }, [])

  const handleChange = (event) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const params = new URLSearchParams()
    params.append('pin', pin)
    try {
      const createPin = await http().post(`auth/pin?id=${idUser}`, params)
      if (createPin.data.status === 200) {
        await http().patch(`auth/verified/${idUser}`)
        history.push('/auth/activated')
      }
    } catch (err) {
      setMsgResponse(err.response.data.message);
    }
  }


  // const [autoFocus, setAutoFocus] = useState('')
  // const handleInput = (event) => {
  //   if (event.target.id === '1') {
  //     setAutoFocus(`autoFocus="true"`)
  //   }
  // }
  return (
    <>
      <div className="col-lg-6">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-8 col-8 py-5">
            <div className="row my-2">
              <h4 className="fw-bold">
                Secure Your Account, Your Wallet,
                and Your Data With 6 Digits PIN
                That You Created Yourself.
              </h4>
            </div>
            <div className="row my-2">
              <small className="text-muted">
                Create 6 digits pin to secure all your money and your data in walletchip app.
                Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
              </small>
            </div>
            {
              msgResponse !== '' ?
                <div className="alert alert-warning mt-3" role="alert">
                  {msgResponse}
                </div>
              :
              ''
            }
            <div className="row">
              <form onSubmit={handleSubmit}>
                <div className="gap-4 my-5 d-flex justify-content-center align-items-center">
                  {
                    [1, 2, 3, 4, 5, 6].map((element, index) => {
                      return (
                        <React.Fragment key={String(index)}>
                          <input type="text" maxLength="1" className="form-control pin-form-costum d-flex justify-content-center align-items-center" id={element} onChange={event => handleChange(event)} />
                        </React.Fragment>
                      )
                    })
                  }
                </div>
                <div className="d-grid mt-5">
                  <button type="submit" className="btn btn-gray py-2 fw-bold text-secondary">Confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


