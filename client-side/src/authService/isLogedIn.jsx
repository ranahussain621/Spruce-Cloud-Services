import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const IsLogedIn = (props) => {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(() => {
      let login = JSON.parse(localStorage.getItem('user'));
      if(login){
        if(login.Role[0].title === 'admin'){
          navigate('/dashboard/cspDashboard')
        }else if(login.Role[0].title === 'user'){
          navigate('/dashboard/userdashboard')
        } else if (login.Role[0].title ==='superAdmin'){
          navigate('/dashboard/super-admin')
        }
      }
    }, [])

  return (
    <div>
        <Component/>
    </div>
  )
}

export default IsLogedIn