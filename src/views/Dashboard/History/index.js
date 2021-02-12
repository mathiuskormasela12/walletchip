import React from 'react'

// Import Assets
import People from '../../../assets/images/1.png'
import './history.css'

function History() {
  return (
    <div className="card shadow-sm">
      <div className="card-header border-0 bg-transparent pt-4">
        <h5 className="fw-bold">Transaction History</h5>
      </div>
      <div className="card-body card-history overflow-auto pt-0 p-4">
        <small style={{ color: '#7A7886' }}>This Week</small>
        {
          [1, 2].map((e, index) => {
            return (
              <div key={index} className="d-flex justify-content-between align-items-center ps-0 p-4">
                <div className="d-flex">
                  <img src={People} alt={People} className="img-fluid img-avatar me-3"/>
                  <div className="text-left">
                    <span style={{ fontWeight: '700', color: 'black' }}>Samuel Suhi</span>
                    <br/>
                    <small>Transfer</small>
                  </div>
                </div>
                <span style={{ color: '#1EC15F' }} className="fw-bold">+Rp50.000</span>
              </div>
            )
          })
        }
        <small style={{ color: '#7A7886' }}>This Month</small>
        {
          [1, 2].map((e, index) => {
            return (
              <div key={index} className="d-flex justify-content-between align-items-center ps-0 p-4">
                <div className="d-flex">
                  <img src={People} alt={People} className="img-fluid img-avatar me-3"/>
                  <div className="text-left">
                    <span style={{ fontWeight: '700', color: 'black' }}>Samuel Suhi</span>
                    <br/>
                    <small>Transfer</small>
                  </div>
                </div>
                <span style={{ color: '#1EC15F' }} className="fw-bold">+Rp50.000</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default History
