import React, { useState, useEffect,useRef } from 'react';
import { editProfileCSP } from '../../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'
import '../../style/profile.css'
import { toast } from 'react-toastify';
import { currentUserDetail, } from '../../redux/features/auth/authSlice';

export default function UserProfile() {


  const USER = useSelector((state)=>state.auth.user)
  const [userImage, setuserImage] = useState()

  let localStorageData = JSON.parse(localStorage.getItem('user')) || [];
  const userID = localStorageData?.user?.id

  const [cspEditValue, setcspEditValue] = useState({
    firstname: USER?.user?.firstname || '',
    lastname: USER?.user?.lastname || '',
    businessname: USER?.user?.businessname || '',
    id: userID ,
    phone: USER?.user?.phone || '',
    location: USER?.user?.location || '',
    bio: USER?.user?.bio || '',
    image: null,
  });
  console.log("🚀 ~ file: UserProfile.jsx:31 ~ UserProfile ~ cspEditValue:", cspEditValue)


  const dispatch = useDispatch();

  const getData = async()=>{
 const data = await dispatch(currentUserDetail({id:userID}))
 const val = data.payload?.user
 setcspEditValue((prev)=>({
  ...prev,
  firstname: val?.firstname || '',
  lastname: val?.lastname || '',
  businessname: val?.businessname || '',
  phone: val?.phone || '',
  location: val?.location || '',
  bio: val?.bio || '',
  id: userID ,
  image: val?.image || null,
 }))
  }

useEffect(()=>{
 getData()
},[])





  const onChange = (e) => {
    setcspEditValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };


  const handlePhoneChange = (value) => {
    setcspEditValue((prevState) => ({
      ...prevState,
      phone: value,
    }));
  };


  const fileInputRef = useRef(null);

  // Function to handle avatar click and trigger file input
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setuserImage(file)
    setcspEditValue((prevState) => ({
      ...prevState,
      image: file,
    }));
  };




  const save = async (e) => {
    e.preventDefault();
    const formData = new FormData();  
    for (const key in cspEditValue) {
        formData.append(key, cspEditValue[key]);
    }
    await dispatch(editProfileCSP(formData));
    await dispatch(currentUserDetail({id:userID}))
    
  };

 

  return (
    <>
      <form action=""  autoComplete='none'>
        <div className="container bootstrap snippets bootdey">
          <div className="col-md-12">
            <div className="row">
              <div className="col-10">
                <h1 className="text-primary">Personal info</h1>
                <hr />
                <div className="row">
                  <div className="col-md-3 border-end p-0">


                    <div className="profile-image-container">
                      <input
                        className=''
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        accept="image/*"
                      />

                      <div className="avatar" onClick={handleAvatarClick}>


                        <img 
                        
                        // src={cspEditValue?.image ||'https://bootdey.com/img/Content/avatar/avatar7.png'}
                          src={
                            cspEditValue?.image && !userImage ? cspEditValue?.image :
                              userImage ? URL.createObjectURL(userImage) :
                                !userImage && !cspEditValue?.image ? 'https://bootdey.com/img/Content/avatar/avatar7.png' : ''
                          }






                          className="img-circle img-fluid img-thumbnail rounded-circle"
                          style={{ width: '250px', height: '250px', position: 'relative' }}
                          alt="Avatar"
                        />





                      </div>
                    </div>


                  </div>

                  <div className="col-md-8 personal-info ms-3">

                    <h3 className='fw-bold Montserrat mb-4'>Account Setting</h3>

                    <div className="d-flex flex-row align-items-center mb-3 ">
                      <div className="mb-1 me-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold m-0 " >First Name</label>
                        <input type="text" className="form-control border " id="exampleFormControlInput1"
                          value={cspEditValue.firstname}
                          name="firstname"
                          onChange={onChange}
                        />

                      </div>
                      <div className="mb-1  me-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold m-0">Last Name</label>
                        <input type="text" className="form-control border" id="exampleFormControlInput1"
                          value={cspEditValue.lastname}
                          name="lastname"
                          onChange={onChange}
                        />

                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-3 ">
                      <div className="mb-1 me-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold m-0">Email</label>

                        <div className='text-muted border p-1 rounded-1'><p>{localStorageData?.user?.email}</p></div>
                      </div>
                   

                      <div className="d-flex flex-row align-items-center mb-3 mt-3">
                      <div className="mb-1 me-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold m-0 " >Phone</label>
                        <input type='text' className="form-control border " id="exampleFormControlInput1"
                          value={cspEditValue.phone}
                          name="phone"
                          onChange={onChange}
                        />
                      </div>
                    
                    </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-3 ">
                      <div className="mb-1 me-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold m-0 " >Company</label>
                        <input type='text' className="form-control border " id="exampleFormControlInput1"
                          value={cspEditValue.businessname}
                          name="businessname"
                          onChange={onChange}
                        />
                      </div>
                      <div className="mb-1  me-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold m-0">Location</label>
                        <input type="text" className="form-control border" id="exampleFormControlInput1"
                          value={cspEditValue.location}
                          name="location"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 ">

                      <div className="mb-1  me-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold m-0">Bio</label>
                        <textarea className="form-control border" id="exampleFormControlInput1"
                          value={cspEditValue.bio}
                          name="bio"
                          onChange={onChange}
                        ></textarea>
                      </div>

                    </div>



                    <div className="row mt-3">

                      <div className="col-lg-8  pe-4">
                        <button className='btn btn-primary me-3 btn-color' type='button' onClick={save}>save</button>

                      </div>



                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </form>
    </>
  )
}