import React from 'react'
import { useNavigate } from "react-router-dom";
import './codeReviews.css'
import CodeReview from '../Components/Code/code';
 const CodeReviews = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
      };
  return (
    <div className='Tool2sec'>
      <section className='Tool2head'>
        <h1>Code Reviews</h1>
      </section>
      <CodeReview/>
    </div>
  )
}
export default CodeReviews