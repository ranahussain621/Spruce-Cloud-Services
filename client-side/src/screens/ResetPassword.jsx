
import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import resetPass from '../assets/img/resetPass.png';
import {instance} from '../axios/axios';
import { useDispatch } from 'react-redux';
import { ForgotPasswordLink } from '../redux/features/auth/authSlice';
import { Link } from 'react-router-dom';

export default function ResetPassword ({hideModal}) {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const sendEmail = async () => { 
    await dispatch(ForgotPasswordLink(email))
      .then((res)=>{
        toast.info(res?.payload?.message,{autoClose:1000})
      })
      hideModal()
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      await sendEmail();
     
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  
    return (


        <form action="" onSubmit={handleSubmit} autoComplete='none'>


        <div className="row align-itme-center justify-content-center">
            <MDBContainer className='mt-5'>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody >
                        <div className="row justify-content-center">



                            <div className="col-10">
                                <MDBRow className=''>
                                    <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex align-items-center'>
                                        <MDBCardImage src={resetPass} />
                                    </MDBCol>

                                    <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex flex-column align-items-center text-start'>



                                        <div className='mt-5'>
                                            <div className=" m-0 text-start ">
                                                <h2 className='fw-bold' >Reset Password?</h2>

                                            </div>
                                            <p className=" mb-3  ms-0 mx-1 mt-1 text-muted">Please enter the email associated with your account.</p>



                                            <div className="d-flex flex-row align-items-center mb-4 ">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label fw-bold m-0">E-mail</label>
                                                    <input type="email" className="form-control border" id="exampleFormControlInput1" value={email}
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                                                                                {errors.email && <div className='text-danger'>{errors.email}</div>}

                                                </div>
                                            </div>



                                            <button className=' btn btn-info mb-4 w-100 btn-sm btn-color' size='lg'>Send Reset Link</button>
                                            <div className='text-center'>
                                                <p className='w-100'>Already have an account <Link href="/" onClick={()=>hideModal()}>Sign in</Link></p>

                                            </div>


                                        </div>



                                    </MDBCol>



                                </MDBRow>
                            </div>

                        </div>


                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
</form>

    )
}