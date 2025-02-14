import React, { useState , useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Account from '../Account/account';

export const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("Home")

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/"); // Redirect to homepage after logout
  };

// export const Navbar = () => {
//   const navigate = useNavigate();
//   const [menu, setMenu] = useState("Home");
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
//   const [user, setUser] = useState(null); // Track user data

//   // Check authentication on component mount
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       // If token exists, verify with API
//       axios
//         .get("https://d9b3-102-184-153-22.ngrok-free.app/broject%20login&register/verify-token-api.php", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           if (response.data.success) {
//             setIsAuthenticated(true);
//             setUser(response.data.user); // Set user data from the API response
//           } else {
//             setIsAuthenticated(false);
//           }
//         })
//         .catch(() => {
//           setIsAuthenticated(false);
//         });
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, []);

//   const handleLogout = () => {
//     // Remove token from localStorage on logout
//     localStorage.removeItem("token");
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("user");

//     // Redirect to homepage after logout
//     navigate("/");
//   };



    return (
      <div className='fdiv'>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent"  >
          <div className="container">
            <span className="navbar-brand">Zero Trace</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" onClick={()=>{setMenu("Home")}}>
                  <Link to='/' className="nav-link active" aria-current="page" style={{color : 'white'}} >Home</Link>
                  {menu==="Home"?<hr/>:<></>}
                </li>
                <li className="nav-item" onClick={()=>{setMenu("AboutUs")}}>
                  <Link to ='/AboutUs' className="nav-link active" aria-current="page" style={{color : 'white'}}>About Us</Link>
                  {menu==="AboutUs"?<hr/>:<></>}
                </li>
                <li className="nav-item" onClick={()=>{setMenu("Tools")}}>
                  <Link to ='/Tools' className="nav-link active" aria-current="page" style={{color : 'white'}}> Tools</Link>
                  {menu==="Tools"?<hr/>:<></>}
                </li>
                <li className="nav-item" onClick={()=>{setMenu("ContactUs")}}>
                  <Link to ='/ContactUs' className="nav-link active" aria-current="page" style={{color : 'white'}}>Contact Us</Link>
                  {menu==="ContactUs"?<hr/>:<></>}
                </li>
            </ul>


            {/* <form className="d-flex">
                <button className="btn btn-outline-primary" onClick={() => navigate("/Login")}>Log In</button>
                <button className="btn btn-outline-primary" onClick={() => navigate("/SignUp")}> Sign Up</button>
            </form> */}

<div className="d-flex">
        {isAuthenticated ? (
          <>
          {/* Welcome, {user?.full_name}! */}
            <span className="user-name"> <Account/> </span>
            <button className="btn btn-outline-primary" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-primary" onClick={() => navigate("/Login")}>
              Log In
            </button>
            <button className="btn btn-outline-primary" onClick={() => navigate("/SignUp")}>
              Sign Up
            </button>
          </>
        )}
      </div>

            </div>
          </div>
        </nav>
      </div>
    );
  };
  export default Navbar
