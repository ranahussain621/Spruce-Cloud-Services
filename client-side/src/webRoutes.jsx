import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import { Helmet } from "react-helmet";

import TopNavbar from "./components/Nav/TopNavbar.jsx";
import Contact from "./components/Sections/Contact";

// Screens
  
import Landing from "./screens/Landing.jsx";




import Pkg from './components/Elements/Package details/Pkg.jsx';
import About from './components/Sections/AboutUs/About.jsx';
import ContactUs from './components/Sections/AboutUs/ContactUs/ContactUs.jsx';
import VerifiedEmail from './screens/VerifiedEmail.jsx';
import { ServicesPage } from './screens/ServicesPage.jsx';


export function WebRoutes ()  {
  return (
    <>
    <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>

      <TopNavbar />
      <Routes>
        <Route path='/Home' element={<Landing />} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/pkgdetail/:id' element={<Pkg/>} />
        <Route path='/verifiedEmail' element={<VerifiedEmail/>} />
        <Route path='/services' element={<ServicesPage/>} />

       
      </Routes>
    </>
    
  )
}

export default WebRoutes