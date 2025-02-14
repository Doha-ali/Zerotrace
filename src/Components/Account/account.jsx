import React from 'react' 
import './account.css'
import Myuser from '../images/user.jpg'
import { useNavigate } from "react-router-dom";

 const Account = () => {
  const navigate = useNavigate()
  return (
    <div>
        <img src={Myuser} alt='...' className='accountimg' onClick = {() => navigate("/Useracount")}/>
    </div>
  )
}
export default Account
