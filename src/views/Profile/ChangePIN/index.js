import React from 'react'

// Import Assets
import './changePin.css'

function ChangePIN() {
  return (
    <div className="card shadow-sm p-4 h-100">
      <div className="card-header border-0 bg-transparent pt-4">
        <h5 className="fw-bold mb-4">Change PIN</h5>
        <p style={{ color: '#7A7886' }}>Enter your current 6 digits Walletchip PIN below to continue to the next steps.</p>
      </div>
      <div className="card-body text-center">
        <form style={{ paddingLeft: '9.5rem', paddingRight: '9.5rem' }}>
          <div className="gap-4 my-5 d-flex justify-content-center align-items-center">
            {
              [1,2,3,4,5,6].map((element, index) => {
                return (
                  <React.Fragment key={String(index)}>
                    <input type="text" maxLength="1" className="form-control pin-form-costum d-flex justify-content-center align-items-center" id={element} />
                  </React.Fragment>
                )
              })
            }
          </div>
          <div className="d-grid mt-5">
            <button style={{ borderRadius: '10px' }} type="submit" className="btn btn-primary py-2 fw-bold">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePIN
