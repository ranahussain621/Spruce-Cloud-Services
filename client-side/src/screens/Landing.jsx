import React, { useState } from "react";





// Sections
import Slider from "../components/Sections/Slider";


import FeaturePackages from "../components/Sections/FeaturePackages";


import Footer from "../components/Sections/Footer"
import ChatBot from "./ChatBot"; 

export default function Landing() {

 

  return (
    <>
    

      <Slider />
      
     
      <FeaturePackages />
     

      <Footer />

      <ChatBot/>




    </>
  );
}


