import React from 'react'
import IMG3 from '../../../assets/img/AboutUs/211.png';

export default function About2() {
  return (
    <>
     <div className='container'>
        <div className="card bg-white" style={{ boxShadow: "none" }}>
          <img src={IMG3} className="card-img" alt="..." style={{ height: 300 }} />
          <div className="container">
            <div className="card-img-overlay" style={{ marginTop: "90px" }}>
              <h1 className="card-title text-primary ">We build bridge</h1>
              <h1 className="card-text text-white">
                <span className="card-title text-primary ">between</span> companies <br /> and customers
              </h1>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
