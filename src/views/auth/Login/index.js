import React from 'react'
import { AuthLayout, LoginForm } from '../../../components'

function Login() {
  return (
    <>
      <div className="row vw-100">
        <AuthLayout/>
        <LoginForm/>
      </div>
    </>
  )
}

export default Login
