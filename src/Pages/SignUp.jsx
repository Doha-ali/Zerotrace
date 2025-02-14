// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './SignUp.css';

// const Signup = () => {
//   const [user, setUser] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("user", JSON.stringify(user)); // Store user data
//     localStorage.setItem("isAuthenticated", "true"); // Mark user as authenticated
  
//     // Check if user came from a tool page
//     const redirectTo = localStorage.getItem("redirectAfterLogin") || "/Home";
//     localStorage.removeItem("redirectAfterLogin"); // Clear saved URL
//     navigate(redirectTo); // Redirect to the saved tool page or dashboard
//   };

//   return (
//     <div className="AuthBig">
//     <div className="auth-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>Already have an account? <a href="/login">Login</a></p>
//     </div>
//     </div>
//   );
// };

// export default Signup;




        // Local storage //

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF,faGoogle } from '@fortawesome/free-brands-svg-icons';
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./SignUp.css"; // Import styles

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const user = { name, email, password };
//     localStorage.setItem("user", JSON.stringify(user));
//     localStorage.setItem("isAuthenticated", "true");

//     navigate("/Login");


//     //  Check if user came from a tool 
//     const redirectTo = localStorage.getItem("redirectAfterLogin") || "/Home";
//     localStorage.removeItem("redirectAfterLogin"); // Clear saved URL
//     navigate(redirectTo); // Redirect to the saved tool page or dashboard
//   };

//   return (
//     <div className="signBig">
//     <div className="auth-container">
//       <h2>Sign Up</h2>
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} required />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Sign Up</button>

//       <div class="social-login">
//         <div class="separator">
//             <span>OR</span>
//         </div>
//         <div class="socialIcons">
//                 <FontAwesomeIcon icon={faFacebookF} size="2x" className="social-btn"/>
//                 <FontAwesomeIcon icon={faGoogle} size="2x" className="social-btn"/>
//         </div>
//     </div>

//       </form>
//       <p className="auth-footer">
//         Already have an account? <a onClick={() => navigate("/login")} className="already">Log in</a>
//       </p>
//     </div>
//     </div>
//   );
// };

// export default Signup;




// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./SignUp.css"; // Import styles

// const Signup = () => {
//   const [full_name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm_password, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // ✅ التحقق من تطابق كلمتي المرور
//     if (password !== confirm_password) {
//       setError("Passwords do not match!");
//       return;
//     }

//     try {
//       // تحويل البيانات إلى Form URL Encoded
//       const formData = new URLSearchParams();
//       formData.append("full_name", full_name);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("confirm_password", confirm_password);

//       const response = await axios.post(
//         "https://4ae0-102-184-153-22.ngrok-free.app/broject%20login&register/signup-api.php",
//         formData, 
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.data.success) {
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("isAuthenticated", "true");

//         const redirectTo = localStorage.getItem("redirectAfterLogin") || "/Home";
//         localStorage.removeItem("redirectAfterLogin");
//         navigate(redirectTo);
//       } else {
//         setError(response.data.message || "Signup failed!");
//       }
//     } catch (err) {
//       setError("Error signing up. Please try again.");
//     }
//   };

//   return (
//     <div className="signBig">
//       <div className="auth-container">
//         <h2>Sign Up</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form className="auth-form" onSubmit={handleSubmit}>
//           <input type="text" placeholder="Username" value={full_name} onChange={(e) => setName(e.target.value)} required />
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           <input type="password" placeholder="Confirm Password" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} required />
//           <button type="submit">Sign Up</button>

//           <div className="social-login">
//             <div className="separator"><span>OR</span></div>
//             <div className="socialIcons">
//               <FontAwesomeIcon icon={faFacebookF} size="2x" className="social-btn" />
//               <FontAwesomeIcon icon={faGoogle} size="2x" className="social-btn" />
//             </div>
//           </div>
//         </form>
//         <p className="auth-footer">
//           Already have an account? <a onClick={() => navigate("/login")} className="already">Log in</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// src/Signup.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css"; // Import styles
// استيراد دوال تسجيل الدخول الاجتماعي
import { handleGoogleAuth} from "../SocialAuth";

const Signup = () => {
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState(""); // تأكيد كلمة المرور
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // التحقق من تطابق كلمة المرور
    if (password !== confirm_password) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "https://d41d-102-186-81-78.ngrok-free.app//broject%20login&register/signup-api.php",
        { full_name, email, password, confirm_password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isAuthenticated", "true");
        console.log("/////////")
        console.log("API Response:", response.data);
        console.log(response.data.token)

        const redirectTo = localStorage.getItem("redirectAfterLogin") || "/Home";
        localStorage.removeItem("redirectAfterLogin");
        navigate(redirectTo);
        // navigate('/Login')
      } else {
        setError(response.data.message || "Signup failed!");
      }
    } catch (err) {
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <div className="signBig">
      <div className="auth-container">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={full_name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>

          <div className="social-login">
            <div className="separator">
              <span>OR</span>
            </div>
            <div className="socialIcons">
              <FontAwesomeIcon
                icon={faFacebookF}
                size="2x"
                className="social-btn"
                style={{ cursor: "pointer" }}
              />
              <FontAwesomeIcon
                icon={faGoogle}
                size="2x"
                className="social-btn"
                onClick={() => handleGoogleAuth(navigate)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </form>
        <p className="auth-footer">
          Already have an account?{" "}
          <a onClick={() => navigate("/login")} className="already">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;







