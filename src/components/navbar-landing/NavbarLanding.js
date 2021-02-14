// Import All Modules
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Import Assets
import LogoA from '../../assets/images/walletchip-logo-a.png'
import LogoB from '../../assets/images/walletchip-logo-b.png'
import './navbarLanding.css'

export function NavbarLanding({ children }) {
  const token = useSelector(state => state.auth.token)
  const user = useSelector(state => state.user.userDetail)
  const [navOnShrink, setNavOnShrink] = useState(null)

  React.useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        setNavOnShrink('smaller-nav')
      } else {
        setNavOnShrink(null)
      }
    }
  }, [])

  return (
    <React.Fragment>
      <nav className={`navbar nav-landing navbar-expand-lg navbar-dark fixed-top bg-transparent ${navOnShrink}`}>
        <div className="container">
          <Link to={(token !== null) ? '/dashboard' : '/'} className="navbar-brand">
            {
              (navOnShrink !== null) ? (
                <img src={LogoB} width="180" alt="walletchip-logo-b"/>
              ) : (
                <img src={LogoA} width="180" alt="walletchip-logo-a"/>
              )
            }
          </Link>
          <button className="navbar-toggler" type="button" data-bs-target="#navbarCollapseContent" aria-controls="navbarCollapseContent" aria-label="Toggle navigation">
            <span className="navbar-toggle-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapseContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {(token !== null) ? (
                <>
                  <Link to="/profile" className="nav-item d-flex">
                    <img src={user.picture} alt="avatar" className="img-fluid img-avatar me-3"/>
                    <div className="text-white text-center personal-info me-3">
                      <h6 className="fw-bold">{(user.first_name) ? `${user.first_name} ${user.last_name}` : `${user.username}`}</h6>
                      <small>{(user.phone) ? user.phone : 'Update your phone'}</small>
                    </div>
                  </Link>
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke={navOnShrink ? '#000000' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.7305 21C13.5547 21.3031 13.3024 21.5547 12.9987 21.7295C12.6951 21.9044 12.3509 21.9965 12.0005 21.9965C11.6501 21.9965 11.3059 21.9044 11.0023 21.7295C10.6987 21.5547 10.4463 21.3031 10.2705 21" stroke={navOnShrink ? '#000000' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/auth/login" className={`btn me-3 ${navOnShrink !== null ? 'btn-outline-primary' : 'btn-outline-light'}`}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/auth/register" className={`btn ${navOnShrink !== null ? 'btn-primary' : 'btn-light'}`}>
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      { children }
    </React.Fragment>
  )
}