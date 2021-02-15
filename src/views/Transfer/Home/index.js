import React, { useEffect, useState } from 'react'

// import file css
import './Transfer.css'


import http from '../../../helpers/Http'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Transfer() {
  const [listUser, setListUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [link, setLink] = useState(null)
  const user = useSelector(state => state.auth)

  const getListUser = async (token) => {
    try {
      const listAllUser = await http(token).get('user')
      setListUser(listAllUser.data.results)
      setLink(listAllUser.data.pageInfo)
      setIsLoading(!isLoading)
    } catch (err) {
      console.log(err)
      setIsLoading(!isLoading)
    }
  }

  const handleClickList = async (event) => {
    if (event.target.name === 'next') {
      try {
        const listAllUser = await http(user.token).get(link.nextLink)
        setListUser(listAllUser.data.results)
        setLink(listAllUser.data.pageInfo)
        setIsLoading(!isLoading)
      } catch (err) {
        console.log(err)
        setIsLoading(!isLoading)
      }
    } else if (event.target.name === 'prev') {
      try {
        const listAllUser = await http(user.token).get(link.prevLink)
        setListUser(listAllUser.data.results)
        setLink(listAllUser.data.pageInfo)
        setIsLoading(!isLoading)
      } catch (err) {
        console.log(err)
        setIsLoading(!isLoading)
      }
    }
  }

  const searchUser = async (event) => {
    try {
      const listAllUser = await http(user.token).get(`user?search=${event.target.value}`)
      setListUser(listAllUser.data.results)
      setLink(listAllUser.data.pageInfo)
    } catch (err) {
      console.log(err)
      setIsLoading(!isLoading)
    }

  }

  useEffect(() => {
    getListUser(user.token)
  }, [])
  console.log(link);

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
              <input type="text" className="form-control py-2 ps-5 border-0 border-rad_input" placeholder="Search receiver here" aria-label="Username" aria-describedby="addon-wrapping" style={{ backgroundColor: "rgba(58, 61, 66, 0.1)" }} name="search" onChange={event => searchUser(event)} />
            </div>
          </div>
        </div>
        <div className="card-body overflow-auto card-list-user">
          {listUser === null ?
            <>
              {
                isLoading === true ?
                  <div className="d-flex justify-content-center align-items-center width-100">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  :
                  'User Not Found'
              }
            </>
            :
            <>
              {
                isLoading === true ?
                  <div className="d-flex justify-content-center align-items-center width-100">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  :
                  listUser.map((user, index) => {
                    return (
                      <>
                        <Link to={`/transfer/input-amount/${user.id}`} className="text-decoration-none text-dark">
                          <div className="card shadow-sm my-2" id={user} key={String(index)}>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-1">
                                  <img src={user.picture} alt="avatar" className="img-profile" />
                                </div>
                                <div className="col-11 ps-3">
                                  <span className="fw-bold">
                                    {user.first_name === null ? `${user.username}` : `${user.first_name} ${user.last_name}`}
                                  </span>
                                  <br />
                                  <small className="text-muted">
                                    {user.phone === null ? 'Phone has not been updated' : `${user.phone}`}
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </>
                    )
                  })
              }
            </>
          }
        </div>
        <div className="card-footer border-0 bg-transparent d-flex justify-content-center align-items-center mt-3 p-0">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button className={`page-link btn bg-transparent ${isLoading === true ? '' : `${link.prevLink === null ? 'disabled' : ''}`}`} href="#" tabIndex="-1" name="prev" onClick={event => handleClickList(event)}>
                  <i className="far fa-arrow-left me-3"></i>
                  Prev
                </button>
              </li>
              <li className="page-item"><span className="page-link" href="#">{`${isLoading === true ? '' : `${link.currentPage}`}`}</span></li>
              <li className="page-item">
                <button className={`page-link btn bg-transparent ${isLoading === true ? '' : `${link.nextLink === null ? 'disabled' : ''}`}`} href="#" tabIndex="-1" name="next" onClick={event => handleClickList(event)}>
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
