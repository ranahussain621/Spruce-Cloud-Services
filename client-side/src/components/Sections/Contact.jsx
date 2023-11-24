import React from 'react'
import styled from "styled-components";
// Assets
//import Footer from '../Sections/Footer.jsx'
import ContactImg3 from '../../assets/img/contact-3.jpg';
import ChatBot from '../../screens/ChatBot';
export default function Contact() {
  return (
  <>
  <div >
   
    <Wrapper id="contact mt-4" style={{position:'absolute',top:'10%'}}>
      <div className="lightBg">
        <div className="container">
        
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">  
            <HeaderInfo>
            <h1 className="font40 extraBold">Contact Us</h1>
            <p className="fs-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
              <Form>
                <label className="fs-6">First name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="fs-6">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="fs-6">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <label className="fs-6">Description:</label>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              </Form>
              <SumbitWrapper className="flex">
               
                <button type='submit' className='btn btn-primary fs-4'>Send Message</button>
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex ">
             
              <div >
                <div >
                  <img className='img-fluid radius6' src={ContactImg3} alt="office" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
    
  </div>
  <ChatBot/>
  </>
  )
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
   
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;