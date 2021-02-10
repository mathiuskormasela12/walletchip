import React from 'react'
import { AuthLayout, RegisterForm } from '../../../components'

function Register() {
  return (
    <>
      <div className="row vw-100">
        <AuthLayout/>
        <RegisterForm/>
      </div>
    </>
  )
}

export default Register
