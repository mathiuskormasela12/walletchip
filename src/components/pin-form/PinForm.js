import React from 'react'
import './PinForm.css'

export function PinForm() {
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
            <div className="row">
              <form>
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


