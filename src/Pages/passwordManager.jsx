// import React , { useState } from 'react'
// import { useNavigate  } from "react-router-dom";
// import axios from 'axios'
// import './passwordManager.css'
//  const PasswordManager = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("isAuthenticated");
//         navigate("/login");
//       };
//       const [step, setStep] = useState(1);
//       const [password, setPassword] = useState('');
//       const [code, setCode] = useState('');
//       const [platform, setPlatform] = useState(null);
//       const [email, setEmail] = useState('');
//       const [userPassword, setUserPassword] = useState('');
  
//       const handleLogin = async () => {
//           try {
//               const response = await axios.post('https://79bb-102-186-81-78.ngrok-free.app/password%20manager/verify_user.php', { password });
//               if (response.data.success) {
//                   setStep(2);
//               } else {
//                   alert('Incorrect password');
//               }
//           } catch (error) {
//               alert('Error logging in');
//           }
//       };
  
//       const handle2FA = async () => {
//           try {
//               await axios.post('https://your-backend.com/fake-2fa', { code });
//               setStep(3);
//           } catch (error) {
//               alert('Error verifying 2FA');
//           }
//       };
  
//       const handlePlatformSelect = (platform) => {
//           setPlatform(platform);
//           setStep(4);
//       };
  
//       return (
//         <div className='Tool5sec'>

//           <section className='Tool5head'>
//             <h1>
//               Password Manager
//             </h1>
//           </section>

//           <div className="passwordManagerContainer">
//               {step === 1 && (
                
//                   <div className="loginBox">
//                       <h2>Enter Password</h2>
//                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="inputFieldPass" />
//                       <button onClick={handleLogin} className="lgn">Join</button>
//                   </div>
                
//               )}
//               {step === 2 && (
//                   <div className="twofa-box">
//                       <h2>Enter 2FA Code</h2>
//                       <input type="text" value={code} onChange={(e) => setCode(e.target.value)} maxLength={6} placeholder="6-digit code" className="input-field" />
//                       <button onClick={handle2FA} className="verify">Verify</button>
//                   </div>
//               )}
//               {step === 3 && (
//                   <div className="platform-selection">
//                       <h2>Select a Platform</h2>
//                       <div className="platform-icons">
//                           <button onClick={() => handlePlatformSelect('facebook')} className="platform-btn">Facebook</button>
//                           <button onClick={() => handlePlatformSelect('instagram')} className="platform-btn">Instagram</button>
//                       </div>
//                   </div>
//               )}
//               {step === 4 && platform && (
//                   <div className="account-form">
//                       <h2>{platform} Account</h2>
//                       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input-field" />
//                       <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} placeholder="Password" className="input-field" />
//                       <div className="button-group">
//                           <button className="delete btn">Delete</button>
//                           <button className="edit btn">Edit</button>
//                           <button className="show btn">Show</button>
//                       </div>
//                   </div>
//               )}
//           </div>
//         </div>
//       );
// }
// export default PasswordManager

import React, { useState, useEffect } from 'react';
import './passwordManager.css';
import axios from 'axios';
import twoFA from '../Components/images/2FA icon.png';

const PasswordManager = () => {
  // Steps: 1 = Login, 2 = 2FA, 3 = Dashboard
  const [step, setStep] = useState(1);

  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2FA state
  const [code, setCode] = useState('');

  // Dashboard state
  const [websites, setWebsites] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newWebsite, setNewWebsite] = useState({ name: '', email: '', password: '' });
  const [openWebsiteId, setOpenWebsiteId] = useState(null);

  const [token, setToken] = useState("");

  // Login handler
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://d1bd-102-186-81-78.ngrok-free.app/broject%20login&register/login-api.php',
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );
      if (response.data.success) {
        setToken(response.data.token);
        setStep(2);
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('Error logging in');
    }
  };

  // 2FA handler
  const handle2FA = () => {
    const forbiddenCodes = [
      "123456", "000000", "111111", "222222", "333333",
      "444444", "555555", "666666", "777777", "888888", "999999"
    ];

    if (!/^\d{6}$/.test(code)) {
      alert("Please enter a valid 6-digit code.");
      return;
    }
    if (forbiddenCodes.includes(code)) {
      alert("This code is not allowed. Please enter a different 6-digit code.");
      return;
    }
    setStep(3);
  };

  // Toggle Add New Credential form
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  // Simulate password generation via Gemini API
  const handleGeneratePassword = async () => {
    const generatedPassword = 'GenPass' + Math.floor(Math.random() * 10000);
    setNewWebsite({ ...newWebsite, password: generatedPassword });
  };

  // Save website credential: Send data to backend for encryption and storage
  const handleSaveWebsite = async () => {
    try {
      const response = await axios.post(
        'https://421d-102-186-81-78.ngrok-free.app/password%20manager/save_password.php',
        {
          website_name: newWebsite.name,
          account: newWebsite.email,
          password: newWebsite.password
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );
      const encryptedPassword = response.data.encryptedPassword;
      // When saving a new website, we don’t have the decrypted password yet,
      // so we use the encrypted version (or simply mask it)
      const websiteEntry = {
        ...newWebsite,
        id: response.data.id || Date.now(),
        encryptedPassword,
        // For consistency, mark as not revealed (even if API would decrypt it)
        isDecrypted: false,
        decryptedPassword: '' // will be populated if you re-fetch or via a specific API call
      };
      setWebsites([...websites, websiteEntry]);
      setNewWebsite({ name: '', email: '', password: '' });
      setShowAddForm(false);
    } catch (error) {
      alert('Error saving website: ' + error.message);
    }
  };

  // Toggle showing website details (expand/collapse)
  const toggleWebsiteDetails = (id) => {
    setOpenWebsiteId(openWebsiteId === id ? null : id);
  };

  // Delete a website entry
  const handleDeleteWebsite = (id) => {
    setWebsites(websites.filter(site => site.id !== id));
  };

  // "Show" button handler to reveal the decrypted password
  // In this version, we simply update the state to mark the password as revealed.
  const handleShowPassword = (id) => {
    const updatedWebsites = websites.map(site =>
      site.id === id ? { ...site, isDecrypted: true } : site
    );
    setWebsites(updatedWebsites);
  };

  // Fetch saved websites from backend on component mount (when step 3 starts)
  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const response = await axios.get(
          'https://421d-102-186-81-78.ngrok-free.app/password%20manager/show.php',
          { withCredentials: true }
        );
        console.log("API Response:", response.data)
        // The API returns an object with "accounts" as an array.
        // We map these accounts to our website objects and mark them as "hidden" (isDecrypted: false)
        const websitesData = response.data.accounts.map(account => ({
          id: account.id,
          name: account.website_name, // assuming the API uses "platform" for the website name
          email: account.account,
          decryptedPassword: account.password, // the actual (decrypted) password from the API
          isDecrypted: false  // initially, do not reveal the password
        }));
        setWebsites(websitesData);
      } catch (error) {
        console.log('Error fetching websites:', error.message);
      }
    };

    // Only fetch if user is already logged in (step 3)
    if (step === 3) {
      fetchWebsites();
    }
  }, [step]);

  return (
    <div className="passwordManagerContainer">
      <section className="Tool5head">
        <h1>Password Manager</h1>
      </section>

      {step === 1 && (
        <div className="loginPage">
          <h2>Enter password & email</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Join</button>
        </div>
      )}

      {step === 2 && (
        <div className="twofaPage">
          <img src={twoFA} alt="Two-factor authentication" />
          <h2>Two-Factor Authentication</h2>
          <p>
            Open the two-factor authentication app on your <br /> device to view your authentication code
          </p>
          <input
            type="text"
            placeholder="6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
          />
          <button onClick={handle2FA} className="conf">Confirm</button>
          <button onClick={() => setStep(1)} className="back">Back</button>
        </div>
      )}

      {step === 3 && (
        <div className="dashboard">
          <div className="dashboardHeader">
            <button className="addButton" onClick={toggleAddForm}>+</button>
            <span>Add New Credential</span>
          </div>
          {showAddForm && (
            <div className="add-credential-form">
              <input
                type="text"
                placeholder="Website"
                value={newWebsite.name}
                onChange={(e) => setNewWebsite({ ...newWebsite, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                value={newWebsite.email}
                onChange={(e) => setNewWebsite({ ...newWebsite, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                value={newWebsite.password}
                onChange={(e) => setNewWebsite({ ...newWebsite, password: e.target.value })}
              />
              <div className="form-buttons">
                <button onClick={handleGeneratePassword}>Generate Password</button>
                <button onClick={handleSaveWebsite}>Save</button>
              </div>
            </div>
          )}

          <div className="credentials-list">
            {websites.map((site) => (
              <div key={site.id} className="credential-item">
                <div className="credential-header" onClick={() => toggleWebsiteDetails(site.id)}>
                  {site.name}
                </div>
                {openWebsiteId === site.id && (
                  <div className="credential-details">
                    <div>
                      <strong>Email:</strong> {site.email}
                    </div>
                    <div>
                      <strong>Password:</strong>{" "}
                      {site.isDecrypted ? site.decryptedPassword : '********'}
                    </div>
                    <div className="detail-buttons">
                      <button onClick={() => handleDeleteWebsite(site.id)} className='detailsButtonsBtn'>Delete</button>
                      {/* <button>Edit</button> */}
                      {/* The Show button will reveal the decrypted password */}
                      {!site.isDecrypted && (
                        <button onClick={() => handleShowPassword(site.id)} className='detailsButtonsBtn'>Show</button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordManager;

