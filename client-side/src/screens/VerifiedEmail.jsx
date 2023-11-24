import React from 'react'
import AppLogo from '../assets/img/AppLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Button from "@mui/material/Button"
import Footer from "../components/Sections/Footer"
import {  useNavigate } from "react-router-dom";
export default function VerifiedEmail() {

  const Navigate = useNavigate();
  const login = () => {
    Navigate("/auth/signIn");
  };

  return (
    <>
      <div className="container-md-fluid ">
        <div className="col-md-12" style={{ marginTop: '100px' }}>
          <div className="row justify-content-center">
            <div className="col-md-2 col-sm-4 col-6">
              <img className='img-fluid' src={AppLogo} />
            </div>
            <div className="col-md-12  col-sm-12 col-12 text-center text-center mt-4">
              <div className="row justify-content-center align-items-center text-middle">
                 <div className="col-md-3 col-sm-6 col-10 d-flex p-0 m-0 ">
                  <div className="col-md-3 col-sm-3 col-3 p-md-3 p-sm-2 p-0"></div>
  <div className='  d-flex '>
                  <FontAwesomeIcon
                 style={{
                  width:'50px',
                  height:'50px',
                  color:'green'
                }}
                  icon={faCircleCheck} />

                   <p style={{ fontFamily: 'Axiforma', 
                   fontWeight: 800, 
                   fontStyle: 'normal',
                   color:'green'
                   }}
               className='h3 ps-2 d-flex m-0 d-flex align-items-center'
               >Email verified</p> 
                  </div> 
                
              
              
                 </div>
              
               
                
               
                  
              
            </div>
           
                </div>
             
         


            

            <div className="col-md-12 text-center mt-5">
              <div className="row justify-content-center">
                <div className="col-md-3 col-12 text-center">
                <Button
                        variant="outlined"
                        // startIcon={<FilterListIcon />}
                        className="btn text-white  w-100"
                        style={{ backgroundColor: "#09ABF4", border: "none" }}
                        onClick={login}
                      >
                    Login to your Account 
                      </Button>
                </div>
              </div>

            </div>

            




            <div className="col-md-12 text-center mt-5">
              <div className="row justify-content-center">
                <div className="col-md-2">
                  <p className='text-muted' style={{ fontFamily: 'Axiforma', fontWeight: 500, fontStyle: 'normal' }}>
                  Thank you,<br/>Spruce Cloud Inc.</p>
                </div>
              </div>

            </div>


           



          </div>
        </div>
      </div> 
<Footer/>

    </>
  )
}
