// Import All Modules
import React from 'react'

// Import Assets
import Logo from '../../assets/images/walletchip-logo-a.png'
import MobileApp from '../../assets/images/png-phone.png'
import GreatFeatures from '../../assets/images/great-features-img.png'
import Airbnb from '../../assets/images/airbnb.png'
import Canon from '../../assets/images/canon.png'
import Dell from '../../assets/images/dell.png'
import Dropbox from '../../assets/images/dropbox.png'
import Hm from '../../assets/images/h&m.png'
import Microsoft from '../../assets/images/microsoft.png'
import './landingPage.css'

function LandingPage() {
  const Company = [
    Microsoft,
    Dropbox,
    Hm,
    Airbnb,
    Canon,
    Dell,
  ]
  React.useEffect(() => {
    document.title = 'Wallet Chip - Awesome App for Saving Time!'
  })
  return (
    <React.Fragment>
      <div className="main-hero" id="main-hero">
        <div className="container">
          <div className="row">
            <div style={{ marginTop: '6rem' }} className="col-md-6">
              <h1 style={{ fontSize: '3rem', lineHeight: '4rem' }} className="text-white fw-bold mb-4">Awesome App<br/>For Saving Time.</h1>
              <p className="text-white mb-4">We bring you a mobile app for banking problems that<br/>oftenly wasting much of your times.</p>
              <button style={{ color: '#6379F4', borderRadius: '10px' }} className="btn btn-light px-4 py-2 fw-bold">Try it Free</button>
            </div>
            <div className="col-md-6 mobile-app">
              <div>
                <img src={MobileApp} alt="mobile-app" className="img-fluid" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="company-partners" id="company-partners">
        <div className="d-flex justify-content-center align-items-center h-100">
          {
            Company.map((picture, index) => {
              return (
                <React.Fragment key={String(index)}>
                  <img width="100" src={picture} alt={picture} className="me-5" />
                </React.Fragment>
              )
            })
          }
        </div>
      </div>

      <div className="about-app py-5" id="about-app">
        <div className="container">
          <div className="row mb-4">
            <div className="col text-center">
              <h1 style={{ fontSize: '3rem', color: '#3A3D42' }} className="fw-bold my-4"><span style={{ color: '#6379F4' }}>About</span> the Application.</h1>
              <p style={{ color: '#3A3D42' }}>We have some great features from the application and it’s totally free<br/>to use by all users around the world.</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4 features-card">
              <div className="card">
                <div className="card-body text-center py-5">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                      <circle cx="50" cy="46" r="30" fill="#473AD1" fillOpacity="0.1"/>
                    </g>
                    <path d="M62.5 52.1501V55.9001C62.5015 56.2482 62.4301 56.5928 62.2907 56.9118C62.1512 57.2308 61.9467 57.5171 61.6901 57.7525C61.4336 57.9878 61.1308 58.167 60.801 58.2785C60.4712 58.39 60.1218 58.4315 59.775 58.4001C55.9286 57.9822 52.2338 56.6678 48.9875 54.5626C45.9673 52.6435 43.4067 50.0828 41.4875 47.0626C39.375 43.8016 38.0603 40.0889 37.65 36.2251C37.6188 35.8795 37.6599 35.5311 37.7707 35.2022C37.8814 34.8732 38.0595 34.571 38.2935 34.3146C38.5275 34.0583 38.8123 33.8535 39.1298 33.7133C39.4473 33.573 39.7905 33.5004 40.1375 33.5001H43.8875C44.4942 33.4942 45.0823 33.709 45.5422 34.1045C46.0022 34.5001 46.3026 35.0494 46.3875 35.6501C46.5458 36.8502 46.8394 38.0285 47.2625 39.1626C47.4307 39.61 47.4671 40.0963 47.3674 40.5637C47.2677 41.0312 47.0361 41.4603 46.7 41.8001L45.1125 43.3876C46.892 46.5171 49.4831 49.1082 52.6125 50.8876L54.2 49.3001C54.5399 48.964 54.969 48.7324 55.4364 48.6327C55.9039 48.533 56.3901 48.5694 56.8375 48.7376C57.9716 49.1608 59.15 49.4543 60.35 49.6126C60.9572 49.6983 61.5118 50.0041 61.9082 50.472C62.3046 50.9399 62.5152 51.5371 62.5 52.1501Z" stroke="#6379F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <filter id="filter0_d" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                  <h5 style={{ fontWeight: '700' }} className="mb-4">24/7 Support</h5>
                  <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 features-card">
              <div className="card">
                <div className="card-body text-center py-5">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                      <circle cx="50" cy="46" r="30" fill="#473AD1" fillOpacity="0.1"/>
                    </g>
                    <path d="M58.75 44.75H41.25C39.8693 44.75 38.75 45.8693 38.75 47.25V56C38.75 57.3807 39.8693 58.5 41.25 58.5H58.75C60.1307 58.5 61.25 57.3807 61.25 56V47.25C61.25 45.8693 60.1307 44.75 58.75 44.75Z" stroke="#6379F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M43.75 44.75V39.75C43.75 38.0924 44.4085 36.5027 45.5806 35.3306C46.7527 34.1585 48.3424 33.5 50 33.5C51.6576 33.5 53.2473 34.1585 54.4194 35.3306C55.5915 36.5027 56.25 38.0924 56.25 39.75V44.75" stroke="#6379F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <filter id="filter0_d" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                  <h5 style={{ fontWeight: '700' }} className="mb-4">Data Privacy</h5>
                  <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 features-card">
              <div className="card">
                <div className="card-body text-center py-5">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                      <circle cx="50" cy="46" r="30" fill="#473AD1" fillOpacity="0.1"/>
                    </g>
                    <path d="M61.25 49.75V54.75C61.25 55.413 60.9866 56.0489 60.5178 56.5178C60.0489 56.9866 59.413 57.25 58.75 57.25H41.25C40.587 57.25 39.9511 56.9866 39.4822 56.5178C39.0134 56.0489 38.75 55.413 38.75 54.75V49.75" stroke="#6379F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M43.75 43.5L50 49.75L56.25 43.5" stroke="#6379F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M50 49.75V34.75" stroke="#6379F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <filter id="filter0_d" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                  <h5 style={{ fontWeight: '700' }} className="mb-4">Easy Download</h5>
                  <p>WalletChip is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="great-features" id="great-features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-none d-md-block text-center">
              <img width="400" src={GreatFeatures} alt={GreatFeatures} className="img-fluid"/>
            </div>
            <div className="col-md-6 d-flex justify-content-center flex-column">
              <h1 style={{ fontSize: '3rem', color: '#3A3D42', lineHeight: '4rem' }} className="fw-bold my-4">All The <span style={{ color: '#6379F4' }}>Great</span><br/>Walletchip Features.</h1>
              <div className="row">
                <div className="col-12 features-card mb-4">
                  <div className="card">
                    <div className="card-body p-4">
                      <p style={{ fontWeight: '700', color: '#3A3D42' }} className=""><span style={{ color: '#6379F4' }} className="me-3">1. </span>Small Fee</p>
                      <span>We only charge 5% of every success transaction done in Zwallet app.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 features-card mb-4">
                  <div className="card">
                    <div className="card-body p-4">
                      <p style={{ fontWeight: '700', color: '#3A3D42' }} className=""><span style={{ color: '#6379F4' }} className="me-3">2. </span>Data Secured</p>
                      <span>All your data is secured properly in our system and it’s encrypted.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 features-card mb-4">
                  <div className="card">
                    <div className="card-body p-4">
                      <p style={{ fontWeight: '700', color: '#3A3D42' }} className=""><span style={{ color: '#6379F4' }} className="me-3">3. </span>User Friendly</p>
                      <span>Walletchip come up with modern and sleek design and not complicated.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimoni py-5" id="testimoni">
        <div className="container">
          <div className="row mb-4">
            <div className="col text-center">
              <h1 style={{ fontSize: '3rem', color: '#3A3D42' }} className="fw-bold my-4">What Users are <span style={{ color: '#6379F4' }}>Saying.</span></h1>
              <p style={{ color: '#3A3D42' }}>We have some great features from the application and it’s totally free to use by all users around the world.</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <a href="#usersExperience" role="button" data-bs-slide="prev" className="rounded-circle">
              <svg width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="visually-hidden">Previous</span>
            </a>
            <div id="usersExperience" className="carousel slide mx-5" data-bs-ride="carousel">
              <div className="carousel-item active">
                <div className="card users-experience">
                  <div className="card-body text-center p-5">
                    <div className="container">
                      <img style={{ width: '65px', height: '65px' }} src="https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg" alt="testimoni" className="img-fluid rounded mb-3" />
                      <h4 className="fw-bold">Alex Hansinburg</h4>
                      <p>Designer</p>
                      <p>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card users-experience">
                  <div className="card-body text-center p-5">
                    <div className="container">
                      <img style={{ width: '65px', height: '65px' }} src="https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg" alt="testimoni" className="img-fluid rounded mb-3" />
                      <h4 className="fw-bold">Rizki Ramadhan</h4>
                      <p>Designer</p>
                      <p>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card users-experience">
                  <div className="card-body text-center p-5">
                    <div className="container">
                      <img style={{ width: '65px', height: '65px' }} src="https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg" alt="testimoni" className="img-fluid rounded mb-3" />
                      <h4 className="fw-bold">Donald Trump</h4>
                      <p>Designer</p>
                      <p>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#usersExperience" role="button" data-bs-slide="next" className="rounded-circle">
              <svg width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-landing py-5" id="footer-landing">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img width="170" src={Logo} alt={Logo} />
              <p className="text-white mt-4">
                Simplify financial needs and saving much time in banking needs with one single app.
              </p>
            </div>
          </div>
          <hr/>
          <div className="text-white d-flex justify-content-between">
            <p>2020 Walletchip. All right reserved.</p>
            <div className="contact">
              <a href="#" className="me-3 text-white">+62 5637 8882 9901</a>
              <a href="#" className="text-white">contact@wallertchip.com</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LandingPage
