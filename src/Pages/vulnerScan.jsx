// import React, { useState } from "react";
// import axios from "axios";
// import "./Tool1.css"; // Import CSS

// const VulnerabilityScanner = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [domain, setDomain] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [report, setReport] = useState(null);

//   const optionTexts = {
//     "1": "Website Scanner ",
//     "2": "Network Scanner",
//     "3": "Port Scanner",
//     "4": "Subdomain Finder",
//     "5": "SSL/TLS Scanner",
//     "6": "Website Recon"
//   };

//   const handleScan = async () => {
//     if (!domain) return alert("Please enter a domain.");

//     setLoading(true);
//     setReport(null);

//     try {
//       // Simulated API call (Replace this with real API)
//       const response = await axios.post("https://your-api.com/scan", { domain });

//       setReport(response.data); // API should return issues
//     } catch (error) {
//       console.error("Scan failed:", error);
//       alert("Error scanning the domain.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="tool1">
      
//     <div className="scannerContainer">
//     <h2>Scanning Module</h2>
//     <hr/>
//       {/* Radio Buttons */}
//       <div className="radio-buttons">
//       {Object.keys(optionTexts).map((key) => (
//           <label key={key} className="radio-option">
//             <input
//               type="radio"
//               name="scanOption"
//               value={key}
//               checked={selectedOption === key}
//               onChange={() => setSelectedOption(key)}
//             />
//             {optionTexts[key]}
//           </label>
//         ))}
//       </div>

//       {/* Show input & button only when a radio option is selected */}
//       {selectedOption && (
//         <>
//           <input
//             type="text"
//             placeholder="Enter URL..."
//             value={domain}
//             className="urlInput"
//             onChange={(e) => setDomain(e.target.value)}
//           />
//           <button onClick={handleScan} disabled={loading} className="startScan">
//             {loading ? "Scanning..." : "Start Scan"}
//           </button>
//         </>
//       )}

//       {/* Scan Results */}
//       {report && (
//         <div className="report-section">
//           <h3>Vulnerabilities Report</h3>
//           <ul>
//             {report.issues?.length > 0 ? (
//               report.issues.map((issue, index) => <li key={index}>{issue}</li>)
//             ) : (
//               <li>No vulnerabilities found.</li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default VulnerabilityScanner;







// import React, { useState } from 'react';
// import './Tool1.css'

// const NewScan = () => {
//   const [selectedCategory, setSelectedCategory] = useState('Quick start');
//   const [selectedTools, setSelectedTools] = useState(new Set());

//   const categories = [
//     {
//       name: 'Quick start',
//       tools: [
//         { name: 'Website Scanner', description: 'Discover XSS, SQLI, RCE and 70+ web application issues.' },
//         { name: 'Network Scanner', description: 'Check for 10,000+ CVEs and server misconfigurations.' },
//         { name: 'Port Scanner', description: 'Detect open ports and fingerprint services.' },
//         { name: 'Subdomain Finder', description: 'Discover subdomains of a domain.' },
//         { name: 'SSL/TLS Scanner', description: 'Find SSL/TLS issues like POODLE, Heartbleed, DROWN, ROBOT, etc.' },
//         { name: 'Website Recon', description: 'Fingerprint web technologies of target website.' },
//       ],
//     },
//     { name: 'Recon tools', tools: [] },
//     { name: 'Vulnerability scanners', tools: [] },
//     { name: 'Exploit tools', tools: [] },
//     { name: 'Utils', tools: [] },
//   ];

//   const toggleToolSelection = (toolName) => {
//     const newSelection = new Set(selectedTools);
//     if (newSelection.has(toolName)) {
//       newSelection.delete(toolName);
//     } else {
//       newSelection.add(toolName);
//     }
//     setSelectedTools(newSelection);
//   };

//   const selectedCategoryData = categories.find(cat => cat.name === selectedCategory);

//   return (
//     <div className="new-scan-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2 className="text-lg font-semibold mb-4">Categories</h2>
//         <nav className="space-y-2">
//           {categories.map((category) => (
//             <button
//               key={category.name}
//               onClick={() => setSelectedCategory(category.name)}
//               className={`category-button ${
//                 selectedCategory === category.name 
//                   ? 'bg-blue-100 text-blue-700 font-medium' 
//                   : 'hover:bg-gray-100 text-gray-700'
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Selected Tools Header */}
//         {selectedTools.size > 0 && (
//           <div className="tool-grid">
//             <h3 className="text-sm font-semibold text-blue-800 mb-2">Selected Tools ({selectedTools.size}):</h3>
//             <div className="tool-card">
//               {Array.from(selectedTools).map((toolName) => (
//                 <span 
//                   key={toolName}
//                   className="px-3 py-1 bg-white rounded-full text-sm border border-blue-200 text-blue-700 flex items-center gap-2"
//                 >
//                   {toolName}
//                   <button 
//                     onClick={() => toggleToolSelection(toolName)}
//                     className="text-blue-400 hover:text-blue-600"
//                   >
//                     ×
//                   </button>
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {selectedCategory === 'Quick start' && (
//           <h1 className="text-2xl font-bold text-gray-900 mb-6">Quick find</h1>
//         )}
        
//         <h2 className="text-lg font-semibold text-gray-800 mb-6">
//           {selectedCategory === 'Quick start' ? 'Frequently used' : selectedCategory}
//         </h2>


// <div className="selected-tools-header">
//           {selectedCategoryData?.tools.map((tool, index) => {
//             const isSelected = selectedTools.has(tool.name);
//             return (
//               <article 
//                 key={index}
//                 onClick={() => toggleToolSelection(tool.name)}
//                 className={`tool-card ${
//                   isSelected 
//                     ? 'border-blue-300 bg-blue-50' 
//                     : 'border-gray-200 hover:border-blue-200'
//                 } cursor-pointer transition-all group relative`}
//               >
//                 <div className={`custom-checkbox ${
//                   isSelected ? 'bg-blue-500 border-blue-600' : 'bg-white border-gray-300'
//                 }`}>
//                   {isSelected && (
//                     <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
//                     </svg>
//                   )}
//                 </div>
//                 <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
//               </article>
//             );
//           })}
//         </div>

//         {/* Action Bar */}
//         {selectedTools.size > 0 && (
//           <div className="action-bar">
//             <div className="max-w-6xl mx-auto flex justify-between items-center">
//               <span className="text-gray-700">
//                 {selectedTools.size} tool{selectedTools.size > 1 ? 's' : ''} selected
//               </span>
//               <button 
//                 className="start-scan-button"
//                 onClick={() => console.log('Starting scan with:', Array.from(selectedTools))}
//               >
//                 Start Scan
//               </button>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default NewScan;



// import React, { useState } from "react";
// import axios from "axios";
// import "./vulnerScan.css"; // Import CSS

// const VulnerabilityScanner = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [domain, setDomain] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [report, setReport] = useState(null);

//   // Different texts for each option
//   const options = [
//     { id: 1, text: "Website Scanner" },
//     { id: 2, text: "Network Scanner" },
//     { id: 3, text: "Port Scanner" },
//     { id: 4, text: "Subdomain Finder" },
//     { id: 5, text: "SSL/TLS Scanner" },
//     { id: 6, text: "Website Recon" },
//   ];

//   const handleScan = async () => {
//     if (!domain) return alert("Please enter a URL.");

//     setLoading(true);
//     setReport(null);

//     try {
//       // Simulated API call (Replace with real API)
//       const response = await axios.post("https://your-api.com/scan", { domain });

//       setReport(response.data); // API should return scan results
//     } catch (error) {
//       console.error("Scan failed:", error);
//       alert("Error scanning the URL.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="Too1Sec">
//     <div className="scannerContainer">
//       <h2>Scanning Module</h2>

//       {/* Selection Container */}
//       <div className="optionsContainer">
//         {options.map((option) => (
//           <div
//             key={option.id}
//             className={`option-box ${selectedOption === option.id ? "selected" : ""}`}
//             onClick={() => setSelectedOption(option.id)}
//           >
//             {option.text}
//           </div>
//         ))}
//       </div>

//       {/* Show input & button only when an option is selected */}
//       {selectedOption && (
//         <>
//           <input
//             type="text"
//             placeholder={`Enter URL for ${options.find(o => o.id === selectedOption).text}`}
//             value={domain}
//             className="urlInput"
//             onChange={(e) => setDomain(e.target.value)}
//           />
//           <button onClick={handleScan} disabled={loading} className="startScan">
//             {loading ? "Scanning..." : "Start Scan"}
//           </button>
//         </>
//       )}

//       {/* Scan Results */}
//       {report && (
//         <div className="report-section">
//           <h3>Vulnerabilities Report</h3>
//           <ul>
//             {report.issues?.length > 0 ? (
//               report.issues.map((issue, index) => <li key={index}>{issue}</li>)
//             ) : (
//               <li>No vulnerabilities found.</li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default VulnerabilityScanner;


import React from 'react'
import './vulnerScan.css'
import ScanComponent from '../Components/Scan/scan'

 const VulnerScan = () => {
  return (
    <div className='vulnerSec'>
        <section className='vulnerHead'>
            <h1>Vulnerability Scan</h1>
        </section>
        <ScanComponent/>
    </div>
  )
}
export default VulnerScan



