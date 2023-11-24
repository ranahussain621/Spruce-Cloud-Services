import React from "react";
import './App.css'
import { Helmet } from "react-helmet";
import  {BrowserRouter ,Routes, Route, Navigate } from 'react-router-dom'
import AuthRoutes from "./authRoutes.jsx";
import IsLogedIn from "./authService/isLogedIn.jsx";
import Protected from "./authService/protected.jsx";
import DashboardRoutes from "./dashboardRoutes.jsx";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import WebRoutes from "./webRoutes.jsx";
import ForgotPassword from "./screens/forgotPassword.jsx";
import ChatBot from "./screens/ChatBot";


export function App() {
  return (
    // <BrowserRouter>
    <>
    <ToastContainer/>
     <Routes>
     
     <Route path="/web/*" element={<WebRoutes/>} />
     <Route path="/auth/*" element={<IsLogedIn Component = {AuthRoutes} />} />
     <Route path="/dashboard/*" element={<Protected Component = {DashboardRoutes} />} />
     <Route path="/forgotpassword/:id/*" element={<ForgotPassword />} />
     <Route path="*" element={<Navigate to="/web/Home" replace />} />
     <Route path="/chat/*" element={<ChatBot />} />
     
   </Routes>
    </>
    
   
    // </BrowserRouter>
    
  );
}

export default App;
