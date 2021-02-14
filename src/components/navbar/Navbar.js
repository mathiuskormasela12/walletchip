// Import All Modules
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// Import Actions
import { logout } from '../../redux/actions/auth'

// Import Assets
import LogoB from '../../assets/images/walletchip-logo-b.png'
import './navbar.css'

export function Navbar({ children }) {
  const location = useLocation()
  const dispatch = useDispatch()
  const route = location.pathname.split('/')[1]
  const user = useSelector(state => state.user.userDetail)

  const logoutHandler = (e) => {
    e.preventDefault()
    if (window.confirm("Do you really want to leave?")) {
      history.push('/')
    }
    dispatch(logout())
  }

  return (
    <React.Fragment>
      <nav className="navbar nav-main navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={LogoB} width="180" alt="walletchip-logo-b"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-target="#navbarCollapseContent" aria-controls="navbarCollapseContent" aria-label="Toggle navigation">
            <span className="navbar-toggle-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapseContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex">
                <img src={user.picture} alt="avatar" className="img-fluid img-avatar me-3"/>
                <Link to="/profile" className="text-center personal-info me-3">
                  <span className="fw-bold">{user.first_name === null ?  `${user.username}` : `${user.first_name} ${user.last_name}`}</span>
                  <br/>
                  <small>{user.phone === null ? `Update you phone` : `${user.phone}`}</small>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link">
                  <svg className="bell-icon" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.7305 21C13.5547 21.3031 13.3024 21.5547 12.9987 21.7295C12.6951 21.9044 12.3509 21.9965 12.0005 21.9965C11.6501 21.9965 11.3059 21.9044 11.0023 21.7295C10.6987 21.5547 10.4463 21.3031 10.2705 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <div className="dropdown-menu p-4 shadow border-0 dropdown-menu-end" aria-labelledby="dropdownMenuOffset">
                  <small>Today</small>
                  <div className="card mt-3 shadow-sm p-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2">
                          <svg width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4CEDB3">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                        <div className="col">
                          <small>Transfered from Joshua Lee</small>
                          <br/>
                          <span className="fw-bold fs-5">Rp300.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3 shadow-sm p-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2">
                          <svg width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FF5B37">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        </div>
                        <div className="col">
                          <small>Netflix subscription</small>
                          <br/>
                          <span className="fw-bold fs-5">Rp149.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main-body py-4" id="main-body">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div style={{ height: '75vh' }} className="card shadow-sm">
                <div className="card-body ps-0 p-1">

                  <nav className="navbar h-100">
                    <ul className="navbar-nav left-nav">
                      <li className={`nav-item ${(route === 'dashboard') ? 'active' : ''}`}>
                        <Link to="/dashboard" className="nav-link d-flex">
                          <svg width="30" className="me-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                          Dashboard
                        </Link>
                      </li>
                      <li className={`nav-item ${(route === 'transfer') ? 'active' : ''}`}>
                        <Link to="/transfer" className="nav-link d-flex">
                          <svg width="30" className="me-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          Transfer
                        </Link>
                      </li>
                      <li className={`nav-item ${(route === 'topup') ? 'active' : ''}`}>
                        <Link to="/topup" className="nav-link d-flex">
                          <svg width="30" className="me-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Top Up
                        </Link>
                      </li>
                      <li className={`nav-item ${(route === 'profile') ? 'active' : ''}`}>
                        <Link to="/profile" className="nav-link d-flex">
                          <svg width="30" className="me-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Profile
                        </Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav left-nav mt-auto">
                      <li onClick={logoutHandler} style={{ cursor: 'pointer' }} className="nav-item">
                        <div className="nav-link d-flex">
                          <svg width="30" className="me-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Logout
                        </div>
                      </li>
                    </ul>
                  </nav>

                </div>
              </div>
            </div>
            <div className="col-md-9">
              { children }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
