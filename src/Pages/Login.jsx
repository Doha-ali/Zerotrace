// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SignUp.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("user"));
  
//     if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
//       localStorage.setItem("isAuthenticated", "true");
  
//       // Check if user came from a tool page
//       const redirectTo = localStorage.getItem("redirectAfterLogin") || "/Home";
//       localStorage.removeItem("redirectAfterLogin"); // Clear saved URL
//       navigate(redirectTo);
//     } else {
//       alert("Invalid email or password!");
//     }
//   };

//   return (
//     <div className="AuthBig">
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default Login;


   // Local Storage //



// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF,faGoogle } from '@fortawesome/free-brands-svg-icons';
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./SignUp.css"; // Import styles

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       localStorage.setItem("isAuthenticated", "true");
//      // Check if user came from a tool page
//      const redirectTo = localStorage.getItem("redirectAfterLogin") || "/Home";
//      localStorage.removeItem("redirectAfterLogin"); // Clear saved URL
//      navigate(redirectTo);
//    } else {
//      alert("Invalid email or password!");

//       }
//   };

//   return (
//     <div className="signBig">
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Log In</button>
//       </form>
//       <p className="auth-footer">
//         Don't have an account? <a onClick={() => navigate("/signup")} className="already">Sign up</a>
//       </p>
//     </div>
//     </div>
//   );
// };

// export default Login;




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css"; // Import styles
// استيراد دوال تسجيل الدخول الاجتماعي
import { handleGoogleAuth } from "../SocialAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // لحفظ الأخطاء
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // تصفير الأخطاء قبل الإرسال

    try {
      const response = await axios.post(
        "https://1838-102-184-171-122.ngrok-free.app/broject%20login&register/login-api.php",
        { email, password },
        { headers: { "Content-Type": "application/json" },
        withCredentials: true
      }
      );

      if (response.data.success) {
        console.log("Login success" , response.data)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isAuthenticated", "true");

        const redirectTo = localStorage.getItem("redirectAfterLogin") || "/";
        localStorage.removeItem("redirectAfterLogin");
        navigate(redirectTo);

      } else {
        setError(response.data.message || "Invalid email or password!");
        console.log("Login fail " , response.data.message)
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="signBig">
      <div className="auth-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="auth-form" onSubmit={handleSubmit}>
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
          <button type="submit">Log In</button>

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
          Don't have an account?{" "}
          <a onClick={() => navigate("/signup")} className="already">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;





