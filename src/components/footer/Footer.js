import React from 'react'

// Import Assets
import './footer.css'

export function Footer() {
  return (
    <div className="footer py-4" id="footer">
      <div className="container">
        <div className="d-flex justify-content-between">
          <span>2020 Zwallet. All right reserved.</span>
          <div className="contact">
            <a href="#" className="me-3 text-white">+62 5637 8882 9901</a>
            <a href="#" className="text-white">contact@wallertchip.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
