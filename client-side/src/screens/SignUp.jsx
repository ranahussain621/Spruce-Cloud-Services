'use strict'
import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
//import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCheckbox

}
    from 'mdb-react-ui-kit';
import SignUPImg from '../assets/img/SignUPImg.png';
import GoogleIcon from '../assets/img/GoogleIcon.png';
import {instance} from '../axios/axios';

export function SignUp() {
    const options = [{ id: 1, title: 'admin' }, { id: 2, title: 'user' }];


    // ===================================
    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState("");
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        businessname: "",
        role_id: options[0].id
    });

    const Navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
           try {
            const response = await instance.post('auth/signup', data);
        setData(response.data);
  
        if (response.data.success === false) {
          toast.error(response.data.message, {
            position: "top-center",
            autoClose: 1000,
          });
        } else {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 1000,
          });
          Navigate('/auth/signIn');
        }
            
           } catch (error) {
            toast.error(error.response.data.message, {
              position: "top-center",
              autoClose: 1000,
            });

           }
        } else {
            setErrors(validationErrors);
        }
    };

    const checkPasswordStrength = (password) => {
        const result = zxcvbn(password);
        const { score } = result;
        let strength = "";
    
        switch (score) {
          case 0:
            strength = "Very weak";
            break;
          case 1:
            strength = "Weak";
            break;
          case 2:
            strength = "Fair";
            break;
          case 3:
            strength = "Strong";
            break;
          case 4:
            strength = "Very strong";
            break;
          default:
            strength = "";
        }
    
        setPasswordStrength(strength);
      };

      const handlePasswordChange = (e) => {
        const password = e.target.value;
        setData({ ...data, password });
        checkPasswordStrength(password);
      };

    
    
    const validateForm = () => {
      let errors = {};
    
      if (!data.firstname) {
        errors.firstName = "First name is required";
      }
    
      if (!data.lastname) {
        errors.lastName = "Last name is required";
      }
    
      if (!data.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Invalid email address";
      }
    
      if (!data.password) {
        errors.password = "Password is required";
      } else {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(data.password)) {
          errors.password =
            "Password must contain uppercase, lowercase, digit, and special character";
        }else if(passwordRegex){
          passwordStrength ==='Very strong'
        }
         else if (passwordStrength !== "Strong" && passwordStrength !== "Very strong") {
          errors.password = "Password must be strong";
        }else{
         return;
        }
      }
    
    
      if (!data.businessname) {
        errors.businessname = "Business name is required";
      }
    
      return errors;
    };
    
   
      
    return (
        <>
            <form action="" onSubmit={handleSubmit} autoComplete='none'>
                <div className="row align-itme-center justify-content-center">
                    <MDBContainer className='mt-5'>

                        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                            <MDBCardBody >
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <MDBRow className=''>
                                            <MDBCol md='10' lg='4' className='order-2 order-lg-1 d-flex align-items-center'>
                                                <MDBCardImage src={SignUPImg} />
                                            </MDBCol>

                                            <MDBCol md='10' lg='8' className='order-1 order-lg-2 d-flex flex-column align-items-center text-start'>
                                                <div className=" m-0 text-start ">
                                                    <h2 className='fw-bold' >Registration</h2>

                                                </div>
                                                <p className=" mb-1 mx-1 mx-md-4 mt-1 text-muted">Enter the information to access all features</p>



                                                <div className="d-flex flex-row align-items-center mb-4 ">
                                                    <div className="mb-2 me-5">
                                                        <label htmlFor="" className="form-label fw-bold m-0 ">First Name</label>
                                                        <input className="form-control border " id="" name='firstname' value={data.firstname} onChange={handleChange} />
                                                        {errors.firstName && <div className='text-danger mt-2'>{errors.firstName}</div>}
                                                    </div>
                                                    <div className="mb-2  me-5">
                                                        <label htmlFor="" className="form-label fw-bold m-0" >Last Name</label>
                                                        <input className="form-control border" id="" name='lastname' value={data.lastname} onChange={handleChange} />
                                                        {errors.lastName && <div className='text-danger mt-2'>{errors.lastName}</div>}
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center  ">
                                                    <div className="  me-5">
                                                        <label htmlFor="" className="form-label fw-bold m-0"
                                                        >E-mail</label>
                                                        <input type="email" className="form-control border" id="" name='email' value={data.email} onChange={handleChange} autoComplete='none' />
                                                        {errors.email && <div className='text-danger mt-2'>{errors.email}</div>}
                                                    </div>
                                                    <div className="  me-5">
                                                        <label htmlFor="" className="form-label fw-bold m-0"
                                                        >Password</label>
                                                        <input type="Password" className="form-control border" id="" name='password' value={data.password}onChange={handlePasswordChange} autoComplete='none'/>
                                                    
                                                    </div>

                                                </div>
                                                <div className="row p-0 m-0 d-flex flex-row align-items-center mb-4 ">   
                                                <div className="col p-0"></div>
                                                <div className="col p-0"> {errors.password && <div className='text-danger mt-1'>{errors.password}</div>}
                                                        {passwordStrength && <div className="text-info mt-1">{passwordStrength}</div>}</div> 
                                               

                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4 ">
                                                    <div className="mb-2  me-5">
                                                        <label htmlFor="" className="form-label fw-bold m-0"
                                                        >Business name</label>
                                                        <input className="form-control border" id="" name='businessname' value={data.businessname} onChange={handleChange} />
                                                        {errors.businessname && <div className='text-danger mt-2'>{errors.businessname}</div>}
                                                    </div>
                                                    <div className="mb-2  me-5">
                                                        <label htmlFor="" className="form-label fw-bold m-0">Role</label>
                                                        <select type="email" className="form-control border" id=""
                                                            name='role_id' value={data.role_id} onChange={handleChange}>
                                                            {options.map((value,i) => (
                                                                // 
                                                                <option value={value.id} key={i}>
                                                                    {value.title}
                                                                     {/* {value.id} */}
                                                                </option>

                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>


                                                < div className="d-flex flex-row align-items-center mb-4 ">


                                                    <div className="col-md-10 ps-0">

                                                        

                                                        <div className="form-check p-0">
                                                          
                                                            <MDBCheckbox className="form-check-input" value='' id="same-address" label='I agree to Terms & Conditions, Privacy Policy, and Fees'
                                                                 />
                                                        </div>


                                                    </div> 





                                                </div>




                                                <button className=' btn btn-info mb-2 w-100 btn-sm' size='lg' type='submit'>Sign UP</button>
                                                <div className='text-center'>
                                                    <p className='w-100'>_____________________or______________________</p>

                                                </div>
                                                <button className=' btn border mb-2 w-100 text-center mt-3' size='lg' >  <img style={{ width: '12px' }} src={GoogleIcon} alt="G" /> Sign Up With Google</button>



                                            </MDBCol>



                                        </MDBRow>
                                    </div>
                                </div>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBContainer>
                </div>
            </form>


        </>
    )
}
