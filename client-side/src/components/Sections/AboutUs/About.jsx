import React from 'react';
import IMG from '../../../assets/img/AboutUs/122.png';

import './About.css';
import About1 from './About1';
import About2 from './About2';
import About4 from './About4';
import Footer from '../Footer';

export default function About() {
  return (
    <>
      
      <div className='container' style={{marginTop:'60px'}}>
        <div className="card bg-white" style={{ boxShadow: "none" }}>
          <img src={IMG} className="card-img" alt="..." style={{ height: 500 }} />
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
    <About1/>
    <About2/>
    <About4/>
    <Footer/>

    </>
  )
}
