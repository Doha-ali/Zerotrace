import React from 'react'
import { useNavigate } from "react-router-dom";
import './emailSpam.css'
import SpamCheckForm from '../Components/Spam/spam';
const Emailspam = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
      };
  return (
    <div className='Tool4sec'>
        <section className='Tool4head'>
          <h1>
              Email Spam
          </h1>
        </section>
        <SpamCheckForm/>
    </div>
  )
}
export default Emailspam