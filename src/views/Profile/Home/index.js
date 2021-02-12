import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../redux/actions/auth'

// Import Assets
import './profileHome.css'

function Profile() {
  const IMAGE_SIZE = 2000 * 1024
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
  ]

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      avatar: undefined
    },
    validationSchema: Yup.object({
      avatar: Yup.mixed()
                .required('You must upload an image!')
                .test('imageSize', 'The maximum image size is only 2MB', value => value && value.size <= IMAGE_SIZE)
                .test('fileFormat', 'You must upload an image!', value => value && SUPPORTED_FORMATS.includes(value.type))
    }),
    onSubmit: values => {
      console.log(values)
    }
  })

  const handleImageInput = (event) => {
    event.preventDefault()
    formik.setFieldValue('avatar', event.currentTarget.files[0])
    formik.submitForm()
  }

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
    if (window.confirm("Do you really want to leave?")) {
      history.push('/')
    }
  }

  return (
    <div className="card shadow-sm">
      <div style={{ height: 'inherit' }} className="card-body overflow-auto p-5">
        <div className="container text-center">
          <div className="profile-img">
            <img src={user.avatar} alt="profile"/>
            <form id="form-image" className="mt-2 d-flex flex-column">
              {
                (formik.errors.avatar && formik.touched.avatar) ? (
                  <small className="text-danger">{formik.errors.avatar}</small>
                ) : ''
              }
              <label style={{ cursor: 'pointer', color: '#7A7886' }} htmlFor="avatar">
                <svg width="13" className="me-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                
                <small>Edit</small>
              </label>
              <input type="file" onChange={handleImageInput} name="avatar" id="avatar"/>
            </form>
          </div>

          <h5 style={{ color: '#4D4B57' }} className="fw-bold fs-5 mt-3">{`${user.firstName} ${user.lastName}`}</h5>
          <p style={{ fontSize: '13px' }}>{user.phone}</p>

          <div style={{ paddingLeft: '7rem', paddingRight: '7rem' }}>
            <Link to={`/profile/${user.username}`} className="btn btn-profile-navigation p-3 w-100 my-2">
              <div className="d-flex align-items-center justify-content-between">
                <span className="fw-bold">Personal Information</span>
                <svg width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
            <Link to={`/profile/${user.username}/change-password`} className="btn btn-profile-navigation p-3 w-100 my-2">
              <div className="d-flex align-items-center justify-content-between">
                <span className="fw-bold">Change Password</span>
                <svg width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
            <Link to={`/profile/${user.username}/change-pin`} className="btn btn-profile-navigation p-3 w-100 my-2">
              <div className="d-flex align-items-center justify-content-between">
                <span className="fw-bold">Change PIN</span>
                <svg width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
            <button onClick={logoutHandler} className="btn btn-profile-navigation p-3 w-100 my-2">
              <div className="d-flex align-items-center justify-content-between">
                <span className="fw-bold">Logout</span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
