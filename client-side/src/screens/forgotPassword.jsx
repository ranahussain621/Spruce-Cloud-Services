
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,


}
  from 'mdb-react-ui-kit';

import resetPass from '../assets/img/resetPass.png'
import {instance} from "../axios/axios";



export default function NewPassword(props) {

  const param = useParams();
  var user_id = param.id

  const [data, setdata] = useState({
    password: '',
    id: user_id
  })
  const Navigate = useNavigate()
  const submit = async () => {
    let result = await instance.post('auth/update-password',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      result = await result.json()
      .then(Result => {
          if (Result.message === "Link sended on your email") {
              setemail(Result);
              toast.success(Result.message, {
                  position: "top-center",
                  autoClose: 1000,
              });
              props.hideModal(); // call the function here after toast success
          } else {
              toast.error(Result.message, {
                  position: "top-center",
                  autoClose: 1000,
              });
          }
      })
      .catch(error => {
          console.error(error);
          toast.error("An error occurred", {
              position: "top-center",
              autoClose: 1000,
          });
      });
  }


  return (




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
                        <h2 className='fw-bold' >New Password</h2>

                      </div>
                      <p className=" mb-3  ms-0 mx-1 mt-1 text-muted">Please enter the new password for your account.</p>



                      <div className="d-flex flex-row align-items-center mb-2 ">
                        <div className="mb-3">
                          <label htmlFor="exampleFormControlInput1" className="form-label fw-bold m-0">New Password</label>
                          <input type="Password" className="form-control border" id="exampleFormControlInput1"
                            value={data.password}
                            onChange={(e) => setdata({ ...data, password: e.target.value })} />
                        </div>
                      </div>



                      <button className=' btn btn-info mb-4 w-100 btn-sm fw-bold' size='lg' onClick={submit} >Save</button>
                      <div className='text-center'>
                        <p className='w-100'> <a href="/">Sign in?</a></p>

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


  )
}



//                 </MDBCol>



//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>

//         </MDBContainer>
//       </div >
//     </Fragment>


//   );

// }

// export default ForgotPassword