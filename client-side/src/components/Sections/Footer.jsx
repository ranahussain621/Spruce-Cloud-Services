import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import twitterIcon from '../../assets/Icons/twitterIcon.png';
import facebookIcon from '../../assets/Icons/facebookIcon.png';
import instagramIcon from '../../assets/Icons/instagramIcon.png';
import youtubeIcon from '../../assets/Icons/youtubeIcon.png';
import pinterestIcon from '../../assets/Icons/pinterestIcon.png';

export default function Footer() {


  return (
    <Wrapper>
   <div className="col-md-12 text-center  w-100" style={{backgroundColor:'rgba(9, 171, 244, 0.3)'}}>
              <div className="row justify-content-center align-items-center p-3 m-0">
                <div className="col-md-4">
                  <p className='h2 mt-3' style={{ fontFamily: 'Axiforma', fontWeight: 900, fontStyle: 'normal' }}>Spruce Cloud Inc.</p>

                </div>
               
              </div>
              <div className="row justify-content-center">
              <div className="col-md-6 col-sm-8 col-12">
                  <div className="row mt-3 p-0 justify-content-center p-3 pt-0 m-0">
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%; 
  bottom:0;
 
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;