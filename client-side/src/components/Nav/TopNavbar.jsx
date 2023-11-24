import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import '../../style/Topnav.css'
// Assets
import BurgerIcon from "../../assets/svg/BurgerIcon";
import img from "../../assets/img/AppLogo.png";
import Button from "@mui/material/Button"



export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const [user, setUser] = useState(null);  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
      setOpacity(y > 100 ? 100 : 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  const Navigate = useNavigate();
  const login = () => {
    Navigate("/auth/signIn");
  };

  const move = () => {
    Navigate("/");
  };


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={{
          height: y > 100 ? "60px" : "65px",
          opacity: opacity,
        }}
      >
      
      {/* flexSpaceCenter */}
        <NavInner className="  d-flex align-items-center w-100" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
        <div className="row m-0 " >
  <div className="col-md-1 p-0 d-flex align-items-center justify-content-end"> 
  <div className="row pt-2 p-0 m-0"> 
  <div className="col-md-3 p-0 m-0">

  </div>
  <div className="col p-0 m-0" >
 <img src={img} className="img-fluid" alt="" style={{width:'120px',cursor:'pointer'}} onClick={move} />
 </div>
  </div>
  
  </div>
  <div className=" col-md-2 col-sm-3 col-6 d-flex align-items-center justify-content-start p-0">
    <Link to = "/">
     <h4 style={{
      fontFamily: 'Axiforma',
      fontWeight: 800,
      fontStyle: 'normal',
      color:'rgb(10 158 230)',
      marginLeft: '10px'
    }}>
      {/* Spruce Cloud Inc. */}
    </h4>
    </Link>
   
    </div>

    <div className="col-lg-7 col-md-7 col-sm-6 col-1 d-flex align-items-center justify-content-center">  

   
          <div className="col-lg-6 col-md-12 p-0">
              <div className="row m-0">
             <UlWrapper className="flexNullCenter ">
           
                            <li className="semiBold  pointer">
              <Link activeclassName="active navTitle text-center" style={{ 
                padding: "10px 15px" ,
                fontWeight: "bold",
                fontSize:'16px',
                fontFamily: 'Axiforma', 
                fontWeight: 800,
                color:'rgb(10 158 230)'
                }} to="/web/Home" spy={true} smooth={true} offset={-65}>
                Home
              </Link>
            </li>
            <li className="semiBold  pointer">
              <Link activeclassName="active navTitle" style={{padding: "10px 15px" 
              ,fontWeight: "bold",
              fontSize:'16px',
              fontFamily: 'Axiforma', 
              fontWeight: 800,
              color:'rgb(10 158 230)'
              }} to="/web/services" spy={true} smooth={true} offset={-65}>
                Services
              </Link>
            </li>
            <li className="semiBold  pointer">
              <Link activeclassName="active navTitle" style={{padding: "10px 15px"
               ,fontWeight: "bold",
               fontSize:'16px',
               fontFamily: 'Axiforma', 
               fontWeight: 800,
               color:'rgb(10 158 230)'
               }} to="/web/about-us" spy={true} smooth={true} offset={-65}>
                About
              </Link>
            </li>
      
   
            <li className="semiBold pointer">
              <Link activeclassName="active navTitle" style={{padding: "10px 15px" ,
              fontWeight: "bold",
              fontSize:'16px',
              fontFamily: 'Axiforma', 
              fontWeight: 800,
              color:'rgb(10 158 230)'
              }} to="/web/contact-us" spy={true} smooth={true} offset={-65}>
                Contact
              </Link>
            </li>

             
          </UlWrapper>
          </div>
          </div>
        
   
   
           
            
              </div>
    <div className="col-md-2 col-sm-2 col-4 d-flex align-items-center justify-content-md-start justify-content-end">
    <BurderWrapper className="pointer " onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
    
          <UlWrapper className="flexNullCenter">
          {/* Conditionally render login or dashboard button based on user role */}
          {user ? (
            <>
              {user.Role[0].title === 'admin' && (
                <Button
                  variant="outlined"
                  className="btn text-white"
                  style={{ backgroundColor: "#09ABF4", border: "none" }}
                  onClick={() => Navigate('/dashboard/cspDashboard')}
                >
                  Dashboard
                </Button>
              )}
              {user.Role[0].title === 'user' && (
                <Button
                  variant="outlined"
                  className="btn text-white"
                  style={{ backgroundColor: "#09ABF4", border: "none" }}
                  onClick={() => Navigate('/dashboard/userdashboard')}
                >
                 Dashboard
                </Button>
              )}
              {user.Role[0].title === 'superAdmin' && (
                <Button
                  variant="outlined"
                  className="btn text-white"
                  style={{ backgroundColor: "#09ABF4", border: "none" }}
                  onClick={() => Navigate('/dashboard/super-admin')}
                >
                  Dashboard
                </Button>
              )}
            </>
          ) : (
            // Render login button if user is not logged in
            <Button
              variant="outlined"
              className="btn text-white"
              style={{ backgroundColor: "#09ABF4", border: "none" }}
              onClick={login}
            >
              Log in
            </Button>
          )}
        </UlWrapper>
   </div>
   
    
  
</div>

          
         
        
          
         




        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;




