import React from 'react'

// import css
import './Topup.css'

function Topup() {
  return (
    <>
      <div className="card px-4 pt-3 shadow-sm border-rad">
        <div className="card-header border-0 bg-transparent">
          <span className="fw-bold">
            How To Top Up
       </span>
        </div>
        <div className="card-body overflow-auto card-topup">
          <div className="row my-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p style={{ fontWeight: '700' }} className="text-muted"><span style={{ color: '#6379F4' }} className="me-3">1. </span>Go to the nearest ATM or you can use E-Banking.</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p style={{ fontWeight: '700' }} className="text-muted"><span style={{ color: '#6379F4' }} className="me-3">2. </span>Type your security number on the ATM or E-Banking.</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p style={{ fontWeight: '700' }} className="text-muted"><span style={{ color: '#6379F4' }} className="me-3">3. </span>Select “Transfer” in the menu</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p style={{ fontWeight: '700' }} className="text-muted"><span style={{ color: '#6379F4' }} className="me-3">4. </span>Type the virtual account number that we provide you at the top.</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p style={{ fontWeight: '700' }} className="text-muted"><span style={{ color: '#6379F4' }} className="me-3">5. </span>Type the amount of the money you want to top up.</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p style={{ fontWeight: '700' }} className="text-muted"><span style={{ color: '#6379F4' }} className="me-3">6. </span>Read the summary details</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p style={{ fontWeight: '700' }} className="text-muted"><span style={{ color: '#6379F4' }} className="me-3">7. </span>Press transfer / top up</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p style={{ fontWeight: '700' }} className="text-muted"><span style={{ color: '#6379F4' }} className="me-3">8. </span>You can see your money in Zwallet within 3 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topup
