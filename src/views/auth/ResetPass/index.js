import React from 'react'
import { AuthLayout, ResetPass } from '../../../components'

function ResetPassword() {
  return (
    <>
      <div className="row vw-100">
        <AuthLayout/>
        <ResetPass/>
      </div>
    </>
  )
}

export default ResetPassword