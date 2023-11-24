import React, { useState } from "react";

import "../contactUs.css";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import {useSelector , useDispatch} from 'react-redux'
import { contactUs } from "../../../../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const FormData = () => {

  const [errors, setErrors] = useState({});


  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    phone: "",
    message: "",
});


const dispatch = useDispatch()

// useEffect(()=>{
// dispatch(contactUs(data))
// },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
}

const handlePhoneChange = (value) => {
  setData({ ...data, phone: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length === 0) {
    dispatch(contactUs(data));
    toast.success('Thanks For Contacting Us', {
      position: "top-center",
      autoClose: 1000,
      });
      setData({
        firstname: "",
        lastname: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });
  } else {
    setErrors(validationErrors);
  }
};


  const validateForm = () => {
    let errors = {};

    if (!data.firstname) {
        errors.firstname = "First Name is required";
    }

    if (!data.lastname) {
      errors.lastname = "Last Name is required";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }


    if (!data.company) {
        errors.company = "Company Name is required";
      }

    //   if (!data.phone) {
    //     errors.phone = "Contact is required";
    //   }

      if (!data.message) {
        errors.message = "message is required";
      }

    return errors;
};

const contact = () =>{
  dispatch(contactUs(data))
}


  return (
    <form onSubmit={handleSubmit} autoComplete='none'>
      <div>
        <h2 className="form__title">
          Got Ideas? We’ve got the skills. Lets team up.
        </h2>
        <p className="fs-5 fw-medium">
          Tell us more about yourself and what you’re got in mind.
        </p>
      </div>

      {/* Form input filed */}
      <div className="my-2 d-flex justify-content-between gap-5">
        <div className="">
          <label htmlFor="" className="fw-medium text-black mb-2 input__label">First Name</label>
          <input
            className="border w-100 input__filed"
            type="text"
            placeholder="First Name"
            name='firstname' 
            value={data.firstname}
            onChange={handleChange}
          />
           {errors.firstname && <div className="mt-2" style={{color:'red'}}>{errors.firstname}</div>}
        </div>
        <div>
          <label htmlFor="" className="fw-medium text-black mb-2 input__label"> Last Name</label>
          <input
          className="border w-100 input__filed"
            type="text"
            placeholder="Last Name"
            name='lastname' 
            value={data.lastname}
            onChange={(e)=>handleChange(e)}
          />
            {errors.lastname && <div className="mt-2" style={{color:'red'}}>{errors.lastname}</div>}
        </div>
      </div>
      {/* Email */}
      <div className="my-2">
      <label htmlFor="" className="fw-medium text-black mb-2 input__label">Email</label>

        <input
        className="border w-100 input__filed"
          type="email"
          placeholder="Email Address"
          name='email' 
          value={data.email} 
         onChange={(e)=>handleChange(e)}
        />
          {errors.email && <div className="mt-2" style={{color:'red'}}>{errors.email}</div>}
      </div>
      {/* company name */}
      <div className="my-2">
      <label htmlFor="" className="fw-medium text-black mb-2 input__label">Company Name</label>

        <input
         className="border w-100 input__filed"
          type="text"
          placeholder="Company Name"
          name='company'
           value={data.company}
           onChange={(e)=>handleChange(e)}
        />
          {errors.company && <div className="mt-2" style={{color:'red'}}>{errors.company}</div>}
      </div>
      {/* Phone Input */}
      {/* <div className="my-2">
        <label className="fw-medium text-black mb-2 input__label p-0">
          Phone Number
        </label>


<PhoneInput
  style={{ paddingRight: "5px", width:'auto' }}
  inputProps={{
    name: "phone",
    required: true,
    autoFocus: true,
  }}
  placeholder="Enter phone number"
  country={"us"}
  value={data.phone}
  onChange={handlePhoneChange}
/>

      </div> */}
      {/* Message box */}
      <div className="my-2">
        <label className="fw-medium text-black mb-2 input__label">
          Message
        </label>
        <textarea
          name="message"
          id=""
          // required
          className="input__filed w-100 text__area"
          placeholder="Message"
          value={data.message} 
         onChange={(e)=>handleChange(e)}
        ></textarea>
          {errors.message && <div className="mt-2" style={{color:'red'}}>{errors.message}</div>}
      </div>
      <div>
        <button
          type="submit"
          className="w-100 text-white fw-semibold submit__button"
          style={{ background: "#09ABF4" }}
          onClick={contact}
        >
          Let’s Get Started
        </button>
      </div>



     
    </form>




  );
};

export default FormData;
