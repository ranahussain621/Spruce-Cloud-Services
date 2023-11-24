import React from "react";
import "./contactUs.css";
import FormData from "./FormData/FormData";
import ContactInfo from "./ContactInfo/ContactInfo";
import Footer from "../../Footer";

const ContactUs = () => {
  return (
    <>
      <div className="container mx-auto contact__page__wrapper">
        <div className="row">
          <div className="col-md-6">
            <ContactInfo />
          </div>
          <div className="col-md-6">
            <div className="contact__form__wrapper">
              <FormData />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
