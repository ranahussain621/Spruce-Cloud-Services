import React from 'react';
import AppLogo from '../assets/img/AppLogo.png';
import twitterIcon from '../assets/Icons/twitterIcon.png';
import facebookIcon from '../assets/Icons/facebookIcon.png';
import instagramIcon from '../assets/Icons/instagramIcon.png';
import youtubeIcon from '../assets/Icons/youtubeIcon.png';
import pinterestIcon from '../assets/Icons/pinterestIcon.png';


export default function ResetPasswordEmail() {
  return (
    <>
      <div className="container-md-fluid ">
        <div className="col-md-12" style={{ marginTop: '100px' }}>
          <div className="row justify-content-center">
            <div className="col-md-2 col-sm-2 col-2">
              <img className='img-fluid' src={AppLogo} />
            </div>


            <div className="col-md-12  col-sm-12 col-12 text-center text-center mt-3">
              <p className='h2' style={{ fontFamily: 'Axiforma', fontWeight: 900, fontStyle: 'normal' }}>
                Spruce Cloud Inc.</p>
            </div>


            <div className="col-md-12 col-sm-12 col-12 text-center mt-5">
              <p className='h2' style={{ fontFamily: 'Axiforma', fontWeight: 500, fontStyle: 'normal' }}>
                Hi John, lets reset your password.</p>
            </div>


            <div className="col-md-12 text-center mt-2">
              <div className="row justify-content-center">
                <div className="col-md-3 col-12 text-center">
                  <button className='btn btn-primary w-100'>Reset Your Password</button>
                </div>
              </div>

            </div>


            <div className="col-md-12 text-center mt-4">
              <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12 col-12 text-center">
                  <p style={{ fontFamily: 'Axiforma', fontWeight: 300, fontStyle: 'normal' }}>
                    If the above button does not work for you, copy and paste into
                    your browser’s address bar:</p>
                </div>
              </div>

            </div>



            <div className="col-md-12 text-center mt-4">
              <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12 col-12 text-center">
                  <p href="/" style={{ fontFamily: 'Axiforma', fontWeight: 300, fontStyle: 'normal', color: 'blue' }}>
                       https://mail.google.com</p>
               
                </div>
              </div>

            </div>



            <div className="col-md-12 text-center mt-4">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <p className='text-muted' style={{ fontFamily: 'Axiforma', fontWeight: 300, fontStyle: 'normal' }}>
                    if you didn’t ask to reset you password, you can disregard this email.</p>
                </div>
              </div>

            </div>


           

          </div>
        </div>
      </div> 


      <div className="col-md-12 text-center mt-4  w-100" style={{backgroundColor:'rgba(9, 171, 244, 0.3)'}}>
              <div className="row justify-content-center align-items-center p-3">
                <div className="col-md-4">
                  <p className='h2 mt-3' style={{ fontFamily: 'Axiforma', fontWeight: 900, fontStyle: 'normal' }}>Spruce Cloud Inc.</p>

                </div>
               
              </div>
              <div className="row justify-content-center">
              <div className="col-md-6 col-sm-8 col-12">
                  <div className="row mt-3 p-0 justify-content-center p-3 pt-0">
                    <div className="col-md-1 col-sm-2 col-2"> <img src={facebookIcon} alt="" /></div>
                    <div className="col-md-1 col-sm-2 col-2"><img src={instagramIcon} alt="" /></div>
                    <div className="col-md-1 col-sm-2 col-2"><img src={twitterIcon} alt="" /></div>
                    <div className="col-md-1 col-sm-2 col-2"><img src={youtubeIcon} alt="" /></div>
                    <div className="col-md-1 col-sm-2 col-2"><img src={pinterestIcon} alt="" /></div>

                  </div>
                </div>
              </div>

            </div>

            <div className="container-fluid">
              <div className="col-md-12">
                 <div className="row justify-content-center mt-4">
                 <div className="col-md-3 text-center">
                  <p style={{ fontFamily: 'Axiforma', fontWeight: 300, fontStyle: 'normal' }}>Mississauga, Canada
View in Browser | Privacy Policy</p>
                </div>

              </div>
              <div className="row text-center mt-2">
              <p style={{ fontFamily: 'Axiforma', fontWeight: 300, fontStyle: 'normal' }}>© Copyright - Spruce Cloud Inc.</p>
              </div>
              </div>
             
            </div>

    </>
  )
}
