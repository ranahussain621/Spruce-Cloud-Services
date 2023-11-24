import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import TopNavbar from "./components/Nav/TopNavbar.jsx"

import {Login} from "./screens/Login.jsx";
import {SignUp} from "./screens/SignUp.jsx";

export function AuthRoutes(){

 

  return (
    <>
    <TopNavbar />
      <Routes>
      <Route path='/signIn' element={<Login  />} />
        <Route path='/signUp' element={<SignUp />} />

      </Routes>
    </>
  )
}

export default AuthRoutes