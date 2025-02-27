// import React, { useState } from 'react';
// import axios from 'axios';
// import './scan.css';
// import lightScan from '../images/light scan.png'
// import deepScan from '../images/deep scan.png'
// import portScan from '../images/port scan.png'

// const ScanComponent = () => {
//   const [selectedScan, setSelectedScan] = useState('');
//   const [url, setUrl] = useState('');
//   const [result, setResult] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
  

//   const handleScanTypeClick = (type) => {
//     setSelectedScan(type);
//     // Reset any previous result when changing scan type
//     setResult('');
//     setError('');
//   };

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedScan) return; // Should not happen if button is disabled
//     setLoading(true);
//     setError('');
//     setResult('');

//     try {
//       // Replace the URL below with your actual backend endpoint
//       const response = await axios.post('https://your-backend-api.com/scan', {
//         scanType: selectedScan,
//         url,
//       });
//       // Assuming your backend returns the result in response.data.result
//       setResult(response.data.result);
//     } catch (err) {
//       setError('Error performing scan. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="scanContainer">
//       <h2>Scanning Module</h2>
     
//       <form onSubmit={handleSubmit} className='scanForm'>
//         <input
//           type="url"
//           placeholder="Enter URL to scan"
//           value={url}
//           className='scanInput'
//           onChange={(e) => setUrl(e.target.value)}
//           disabled={!selectedScan}
//           required
//         />
//         <button type="submit" disabled={!selectedScan || !url || loading}>
//           {loading ? 'Scanning...' : 'Start Scan'}
//         </button>
//       </form>

//       {error && <p className="error-message">{error}</p>}
//       {result && <p className="result-message">{result}</p>}

//       <div className="scan-types">
//         <div
//           className={`scantype ${selectedScan === 'light' ? 'selected' : ''}`}
//           onClick={() => handleScanTypeClick('light')}
//         >
//           <img src={lightScan} alt='..' className='scan-icon'/>
//           Light Scan
//           <hr/>
//           <p>Detect XSS, SQL Injection, and exposed API keys.</p>
//         </div>
//         <div
//           className={`scantype ${selectedScan === 'deep' ? 'selected' : ''}`}
//           onClick={() => handleScanTypeClick('deep')}
//         >
//           <img src={deepScan} alt='..' className='scan-icon'/>
//           Deep Scan
//           <hr/>
//           <p>Identify all vulnerabilities and CVEs.</p>
//         </div>
//         <div
//           className={`scantype ${selectedScan === 'port' ? 'selected' : ''}`}
//           onClick={() => handleScanTypeClick('port')}
//         >
//           <img src={portScan} alt='..' className='scan-icon'/>
//           Port Scan
//           <hr/>
//           <p>Find open ports and secure malicious ones.</p>
//         </div>
//       </div>
//       {

//       }
//     </div>
//   );
// };

// export default ScanComponent;


import React, { useState } from 'react';
import axios from 'axios';
import './scan.css';
import lightScan from '../images/light scan.png';
import deepScan from '../images/deep scan.png';
import portScan from '../images/port scan.png';

const ScanComponent = () => {
  const [selectedScan, setSelectedScan] = useState('');
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const[emailError , setEmailError] = useState()
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const handleScanTypeClick = (type) => {
    setSelectedScan(type);
    setResult('');
    setError('');
  };

  const handleStartScanClick = () => {
    if (!url || !selectedScan) return;
    setShowEmailPopup(true); // Show the email popup
  };

  const validateEmailDomain = () => {
    try {
      const urlDomain = new URL(url).hostname.replace('www.', '');
      return email.endsWith(`@${urlDomain}`);
    } catch {
      return false;
    }
  };

  const handleScan = async () => {
    if (!validateEmailDomain()) {
      setEmailError('Email must match the website domain.');
      return;
    }

    setLoading(true);
    setShowEmailPopup(false);
    setError('');
    setResult('');

    try {
      const response = await axios.post('https://your-backend-api.com/scan', {
        scanType: selectedScan,
        url,
        email,
      });

      setResult(response.data.result);
    } catch (err) {
      setError('Error performing scan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scanContainer">
      <h2>Scanning Module</h2>

      <form onSubmit={(e) => e.preventDefault()} className="scanForm">
        <input
          type="url"
          placeholder="Enter URL to scan"
          value={url}
          className="scanInput"
          onChange={(e) => setUrl(e.target.value)}
          disabled={!selectedScan}
          required
        />
        <button type="button" onClick={handleStartScanClick} disabled={!selectedScan || !url || loading}>
          {loading ? 'Scanning...' : 'Start Scan'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {result && <p className="result-message">{result}</p>}

      <div className="scan-types">
        <div className={`scantype ${selectedScan === 'light' ? 'selected' : ''}`} onClick={() => handleScanTypeClick('light')}>
          <img src={lightScan} alt=".." className="scan-icon" />
          Light Scan
          <hr />
          <p>Detect XSS, SQL Injection, and exposed API keys.</p>
        </div>
        <div className={`scantype ${selectedScan === 'deep' ? 'selected' : ''}`} onClick={() => handleScanTypeClick('deep')}>
          <img src={deepScan} alt=".." className="scan-icon" />
          Deep Scan
          <hr />
          <p>Identify all vulnerabilities and CVEs.</p>
        </div>
        <div className={`scantype ${selectedScan === 'port' ? 'selected' : ''}`} onClick={() => handleScanTypeClick('port')}>
          <img src={portScan} alt=".." className="scan-icon" />
          Port Scan
          <hr />
          <p>Find open ports and secure malicious ones.</p>
        </div>
      </div>

      {showEmailPopup && (
        <div className="emailPopup">
          <div className="popupContent">
            <h3>Enter Company Email</h3>
            
            <input
              type="email"
              placeholder="Enter email (e.g., admin@example.com)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleScan}>Confirm & Start Scan</button>
            <button onClick={() => setShowEmailPopup(false)}>Cancel</button>
            <p className="error-message">{emailError}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanComponent;

