


import React,{useState,useEffect} from 'react'
import FeaturePackages from '../../Sections/FeaturePackages';
import { useNavigate } from 'react-router-dom'
import AppLogo from '../../../assets/img/AppLogo.png';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faCircleUser, faGauge,faRightFromBracket,faBell} from '@fortawesome/free-solid-svg-icons'
import {toast } from 'react-toastify';
import {useSelector,useDispatch } from 'react-redux';
import UserProfile from '../../../screens/UserDashboard/UserProfile';
import { baseURL } from '../../../axios/axios';
import '../../../style/sidebar.css';
import Dashhboard from '../../../screens/UserDashboard/Dashboard/Dashhboard';
import { currentUserDetail } from '../../../redux/features/auth/authSlice';
export default function UserSidebar() {


  const [userName, setUserName] = useState();
  const [imageUrl, setimageUrl] = useState()
  let firstImage = null;


  //this state we because we want user image on first render when user login
  const user = useSelector((state)=>state.auth.userDetail)

  

  let User   = JSON.parse(localStorage.getItem("user")) || [];
      const dispatch = useDispatch()

    useEffect( ()=>{
      const getData = async () =>{
              await dispatch(currentUserDetail({id:User?.user?.id}) )
         }
      getData()
    },[])

      

  const Navigate = useNavigate()
  const logout = ()=>{
    localStorage.clear()
    toast.success('Successfully logged out!', {
      position: "top-center",
      autoClose: 1000,
      });
    Navigate('/auth/signIn')
  }
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 100);
  };





  return (
    <>


      <div >
        {/* <h2>User Dashboard</h2> */}
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className='m-0'>
            <Col sm={3} className='sidebar-area'  style={{paddingTop:'30px',minHeight:'760px'}}>
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src={AppLogo} className='img-fluid ms-3' style={{ height: '60px', width: '160px' }} alt="" />
              </a>
              <hr />
              <Nav variant="pills" className="flex-column">
                {/* side menu titles */}


                <Nav.Item className=''>
                  <Nav.Link className='fs-6 d-flex ' style={{ margin: '0.2rem' }} eventKey="first">

                  <FontAwesomeIcon  icon={faGauge}  style={{ height: '28px', width: '28px'}} />
                    <p className='text-middle mt-2 ps-3'>Dashboard</p> </Nav.Link>
                </Nav.Item>
              

                <Nav.Item className=''>
                  <Nav.Link className='fs-6 d-flex ' style={{ margin: '0.2rem' }} eventKey="third">
                  <FontAwesomeIcon icon={faCircleUser}  style={{ height: '25px', width: '25px' }} />
                    <p className='text-middle mt-2 ps-3'>Profile</p>
                  </Nav.Link>
                </Nav.Item>

               

<Nav.Item className="">
      <Nav.Link
        className="fs-6 d-flex" style={
          clicked
            ? { margin: "0.2rem", backgroundColor: "#09abf4" }
            : { margin: "0.2rem" }
        }
        data-toggle="modal"
        data-target="#userdashboardModalCenter"
        onClick={handleClick}
      >
       <FontAwesomeIcon icon={faRightFromBracket}  style={{ height: "25px", width: "25px" }}/>
        <p className="text-middle mt-2 ps-3">Logout</p>
      </Nav.Link>
    </Nav.Item>


    


<div className="modal fade" id="userdashboardModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered " role="document">
    <div className="modal-content rounded-0">
      <div className="modal-header text-center border-0">
      <h5 className="modal-title fw-bold " id="exampleModalLongTitle">Log Out</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body text-center">
        <h5> Are you sure to Logout?</h5>
      
      </div>
      <div className="modal-footer border-0">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn " data-dismiss="modal" style={{backgroundColor:'#09abf4', color:'white'}} onClick={logout}>Logout</button>
      </div>
    </div>
  </div>
</div>







              </Nav>
            </Col>
            <Col sm={9} className='sidebar-screens'  style={{backgroundColor:'#F8F8F8',paddingTop:'30px'}}>

            <div className="col-11 p-0">
                <div className="card mb-5">
                <div className="card-body p-1">
                  <div className="row p-0 m-0">
<div className="col-lg-9 col-md-8 col-sm-3 col-3"></div>
<div className="col-lg-3 col-md-4 col-sm-9 col-9 d-flex p-0 ">
  <div className="row p-0 m-0">
  {/* <div className='col-3 p-0 m-0 d-flex align-items-center'>
     <p style={{ fontFamily: "Axiforma", fontWeight: 500 }}
  >English</p></div>
<div className='col-1 p-0 m-0 d-flex align-items-center justify-content-center'> <FontAwesomeIcon icon={faBell} /></div> */}
<div className='col-3 p-0 m-0 text-end  d-flex align-items-center '>
   <p style={{ fontFamily: "Axiforma", fontWeight: 500, lineHeight:'22px'}}>
    {user?.user?.lastname}<br/>
    <small 
    className='text-muted'>User</small>
    </p>
  
   </div>
<div className='col-4 p-0 m-0 d-flex justify-content-center'>
 <img className='avatar img-circle img-fluid img-thumbnail rounded-circle' 
src={user?.user?.image ? user?.user?.image : "https://bootdey.com/img/Content/avatar/avatar7.png"} style={{width:'50px'}} />
 
  </div>
  </div>


 
 
 
 
</div>
                  </div>
                  
                </div>
              </div>
              </div>


              <Tab.Content  >


                <Tab.Pane style={{ color: "black" }} eventKey="first">
                  {/* <FeaturePackages /> */}
                  <Dashhboard/>
                </Tab.Pane>
          
                <Tab.Pane style={{ color: "black", border: "none" }} eventKey="third">
                  <UserProfile />
                  <div className='mb-5'>
                  </div>
                </Tab.Pane>

                <Tab.Pane style={{ color: "black", border: "none" }} eventKey="forth">
                  <p>this is summary</p>
                  <div className='mb-5'>
                  </div>
                </Tab.Pane>

                <Tab.Pane style={{ color: "black", border: "none" }} eventKey="fifth">
                  <p>this is chat</p>
                  <div className='mb-5'>
                  </div>
                </Tab.Pane>




              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>





    </>
  )
}

























