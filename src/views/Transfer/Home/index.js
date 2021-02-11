import React from 'react'

// import file css
import './Transfer.css'

//import example photo profile
import photoProfile from '../../../assets/images/1.png'

function Transfer() {
  return (
    <>
      <div className="card px-4 pt-3 border-rad shadow-sm">
        <div className="card-header bg-transparent border-0">
          <div className="row">
            <p className="fw-bold text-dark">
              Search Receiver
            </p>
          </div>
          <div className="row">
            <div className="position-relative d-flex align-items-center">
              <i className="far fa-search text-muted position-absolute ms-3"></i>
              <input type="text" className="form-control py-2 ps-5 border-0 border-rad_input" placeholder="Search receiver here" aria-label="Username" aria-describedby="addon-wrapping" style={{ backgroundColor: "rgba(58, 61, 66, 0.1)" }} />
            </div>
          </div>
        </div>
        <div className="card-body overflow-auto card-list-user">
          {
            [1, 2, 3, 4].map(user => {
              return (
                <>

                  <div className="card shadow-sm my-2" id={user}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-1">
                          <img src={photoProfile} alt="avatar" className="img-profile" />
                        </div>
                        <div className="col-11 ps-3">
                          <span className="fw-bold">
                            Samuel Suhi
                            </span>
                          <br />
                          <small className="text-muted">
                            +62 812-4343-6731
                            </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="card-footer border-0 bg-transparent d-flex justify-content-center align-items-center mt-3 p-0">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link btn bg-transparent" href="#" tabIndex="-1">
                <i className="far fa-arrow-left me-3"></i>
                Prev
              </button>
            </li>
            <li className="page-item"><span className="page-link" href="#">2</span></li>
            <li className="page-item">
              <button className="page-link btn bg-transparent" href="#" tabIndex="-1">
                Next
                <i className="far fa-arrow-right ms-3"></i>
              </button>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </>
  )
}

export default Transfer
