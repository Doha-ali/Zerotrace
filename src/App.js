import React from "react";
import "./App.css"; 
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Tools from "./Pages/Tools";
import Footer from "./Components/Footer/footer";
import { Faq } from "./Pages/Faq";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";
import VulnerScan from "./Pages/vulnerScan";
import CodeReviews from "./Pages/codeReviews";
import { Emailbreach } from "./Pages/emailBreach";
import Emailspam from "./Pages/emailSpam";
import PasswordManager from "./Pages/passwordManager";
import Chatbot from "./Pages/Chatbot";
import Useracount from "./Pages/Useracount/useracount";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />  
    <Route path="/Faq" element={<Faq />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/ContactUs" element={<ContactUs />} />
    <Route path="/Tools" element={<Tools />} />
    <Route path="/Chatbot" element={<Chatbot />} />
    <Route path="/Useracount" element={<Useracount />} />
     <Route path="/VulnerScan" element={<ProtectedRoute><VulnerScan/></ProtectedRoute>} />
    {/* <Route path="/VulnerScan" element={<VulnerScan />} /> */}
    <Route path="/CodeReviews" element={<ProtectedRoute><CodeReviews/></ProtectedRoute>} />
    <Route path="/Emailbreach" element={<ProtectedRoute><Emailbreach/></ProtectedRoute>} />
    <Route path="/Emailspam" element={<ProtectedRoute><Emailspam/></ProtectedRoute>} />
    <Route path="/PasswordManager" element={<ProtectedRoute><PasswordManager/></ProtectedRoute>} />
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Login" element={<Login/>}/>
  </Routes>
  <Footer />
</BrowserRouter>
    </div>
  );
}

export default App;

