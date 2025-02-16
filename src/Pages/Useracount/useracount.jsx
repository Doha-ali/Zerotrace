// import React from 'react'

// const Useracount = () => {

//   return (
//     <div>
//         {/* <span> Welcome, {user?.full_name}!</span> */}
//     </div>
//   )
// }
// export default Useracount
import React, { useState } from 'react';
import './useracount.css'; // optional CSS file

function Useracount() {
  // State to hold form data
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('');
  const [biography, setBiography] = useState('');
  const [avatar, setAvatar] = useState(null);

  // Handlers
  const handleEmailUpdate = () => {
    // logic to update email
    console.log('Email updated:', email);
  };

  const handleMobileUpdate = () => {
    // logic to update mobile
    console.log('Mobile updated:', mobile);
  };

  const handleSaveBasicDetails = (e) => {
    e.preventDefault();
    // logic to save basic details
    console.log('Basic details saved:', {
      firstName,
      familyName,
      jobTitle,
      country,
      biography,
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
    }
  };

  const handleAvatarSave = () => {
    // logic to save avatar
    console.log('Avatar saved:', avatar);
  };

  const handleUpdateClick = () => {
    const fileInput = document.getElementById('avatarFileInput');
    if (fileInput) {
      // Clear the value so the same file can be chosen again
      fileInput.value = '';
      fileInput.click();
    }
  };

  return (
    <div className="userAccountContainer">


      {/* Avatar Section */}
      <div className="avatarSection">
      <div className="avatar-preview">
        {avatar ? (
          <img
            src={URL.createObjectURL(avatar)}
            alt="Avatar Preview"
            className="avatar-image"
          />
        ) : (
          <div className="avatar-placeholder">
            Attach files by dragging &amp; dropping or click to upload
          </div>
        )}
      </div>

      {/* Hidden file input (no filename shown) */}
      <input
        id="avatarFileInput"
        type="file"
        accept="image/*"
        onChange={handleAvatarChange}
        style={{ display: 'none' }} 
      />

      {/* If no avatar yet, show "Choose File" label; otherwise show "Update" button */}
      {!avatar ? (
        <label htmlFor="avatarFileInput" className="avatar-uploadBtn">
          Choose File
        </label>
      ) : (
        <button onClick={handleUpdateClick} className="update-avatarBtn">
          Update
        </button>
      )}

      <button onClick={handleAvatarSave} className="save-avatarBtn">
        Save
      </button>
    </div>


      {/* Contact Information */}
      <div className="contact-info-section">
        <h2 className='contactInfoHead'>Contact Information</h2>
        <div className="contact-info-item">
          <label className='contactInfoLabel'>Email</label>
          <input
            type="email"
            placeholder="example@mail.com"
            value={email}
            className='contactInfoInput'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleEmailUpdate} className='contactInfoButton'>Update</button>
        </div>
        <div className="contact-info-item">
          <label className='contactInfoLabel'>Mobile Number</label>
          <input
            type="tel"
            placeholder="+123456789"
            value={mobile}
            className='contactInfoInput'
            onChange={(e) => setMobile(e.target.value)}
          />
          <button onClick={handleMobileUpdate} className='contactInfoButton'>Update</button>
        </div>
      </div>


      {/* Basic Details */}
      <div className="basic-details-section">
        <h2 className='basicDetailsHead'>Basic Details</h2>
        <form onSubmit={handleSaveBasicDetails} className='basicDetailsForm'>
          <div className="form-group2">
            <label>First Name</label>
            <input
              type="text"
              placeholder="John"
              value={firstName}
              className='formGroupInput2'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group2">
            <label>Family Name</label>
            <input
              type="text"
              placeholder="Doe"
              value={familyName}
              className='formGroupInput2'
              onChange={(e) => setFamilyName(e.target.value)}
            />
          </div>
          <div className="form-group2">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Software Engineer"
              value={jobTitle}
              className='formGroupInput2'
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="form-group2">
            <label>Country</label>
            <input
              type="text"
              placeholder="USA"
              value={country}
              className='formGroupInput2'
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="form-group2">
            <label>Biography</label>
            <textarea
              rows="3"
              placeholder="Tell us about yourself..."
              value={biography}
              className='formGroupTextarea2'
              onChange={(e) => setBiography(e.target.value)}
            />
          </div>
          <button type="submit" className="save-detailsBtn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Useracount;

