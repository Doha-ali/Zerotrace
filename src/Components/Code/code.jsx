import { useState } from "react";
import axios from "axios";
import "./code.css";

const CodeReview = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [fileName, setFileName] = useState("");
  const API_KEY = "AIzaSyBfw-FDORUI5Ip3yc2wMr6t8z51MPRAQSg"; 

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => setCode(e.target.result);
      reader.readAsText(file);
    }
  };

  const handleReview = async () => {
    if (!code.trim()) {
      setResult("⚠️ Please enter or upload code before reviewing.");
      return;
    }

    try {
      setResult("🔍 Analyzing code for security vulnerabilities...");

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          model: "gemini-pro",
          prompt: {
            text: `Analyze the following code for security vulnerabilities. Identify potential threats such as SQL injection, XSS, authentication flaws, or insecure data handling. Provide recommended fixes with explanations.\n\n${code}`,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      

      const reviewResult = response.data?.candidates?.[0]?.output || "⚠️ No response received.";
      
      // Format the response for readability
      setResult(reviewResult.replace(/\n/g, "\n\n"));
    } catch (error) {
      console.error("Error reviewing code:", error);
      setResult("❌ Error analyzing the code. Please try again.");
    }
  };

  return (
    <div className="code-reviewContainer">
      <div className="secTool2">
        <h3>Input Code</h3>
        <div className="uploadContainer">
          <label className="uploadBtn">
            Upload file 📂
            <input type="file" accept=".js,.py,.txt,.cpp,.java" onChange={handleFileUpload} hidden />
          </label>
          {fileName && <span className="file-name">{fileName}</span>}
        </div>
        <textarea
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="enterCode"
        />
        <button onClick={handleReview} className="startReview">Start Review</button>
      </div>
      <div className="secTool2 res">
        <h3>Result</h3>
        <textarea className="resultBox" value={result} readOnly />
      </div>
    </div>
  );
};

export default CodeReview;



// import { useState } from "react";
// import axios from "axios";
// import "./code.css";

// const CodeReview = () => {
//   const [code, setCode] = useState("");
//   const [result, setResult] = useState("");
//   const [fileName, setFileName] = useState("");

//   const ENDPOINT = process.env["AZURE_OPENAI_ENDPOINT"] || "https://ammar-m6juimni-eastus2.openai.azure.com/openai/deployments/gpt-35-turbo/chat";  
//   const DEPLOYMENT = "gpt-35-turbo"; // Your Azure OpenAI deployment name  
//   const API_VERSION = "2024-05-01-preview";
//   const API_KEY = "5tlyR6uBymrTXV6zgEDZ4XGUvr34bLjXiHfIJ9smXSPoyrlkFuQBJQQJ99BAACHYHv6XJ3w3AAAAACOGEe22"; 

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFileName(file.name);
//       const reader = new FileReader();
//       reader.onload = (e) => setCode(e.target.result);
//       reader.readAsText(file);
//     }
//   };

//   const handleReview = async () => {
//     if (!code.trim()) {
//       setResult("⚠️ Please enter or upload code before reviewing.");
//       return;
//     }

//     try {
//       setResult("🔍 Analyzing code for security vulnerabilities...");

//       const response = await axios.post(  
//        `${ENDPOINT}/openai/deployments/${DEPLOYMENT}/chat/completions?api-version=${API_VERSION}`;
//         {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: `Analyze the following code for security vulnerabilities. Identify potential threats such as SQL injection, XSS, authentication flaws, or insecure data handling. Provide recommended fixes with explanations.\n\n${code}`,
//                 },
//               ],
//             },
//           ],
//         }
//       );

//       const reviewResult = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response received.";
      
//       // Format the response for readability
//       setResult(reviewResult.replace(/\n/g, "\n\n"));
//     } catch (error) {
//       console.error("Error reviewing code:", error);
//       setResult("❌ Error analyzing the code. Please try again.");
//     }
//   };

//   return (
//     <div className="code-reviewContainer">
//       <div className="secTool2">
//         <h3>Input Code</h3>
//         <div className="uploadContainer">
//           <label className="uploadBtn">
//             Upload file 📂
//             <input type="file" accept=".js,.py,.txt,.cpp,.java" onChange={handleFileUpload} hidden />
//           </label>
//           {fileName && <span className="file-name">{fileName}</span>}
//         </div>
//         <textarea
//           placeholder="Enter code"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           className="enterCode"
//         />
//         <button onClick={handleReview} className="startReview">Start Review</button>
//       </div>
//       <div className="secTool2 res">
//         <h3>Result</h3>
//         <textarea className="resultBox" value={result} readOnly />
//       </div>
//     </div>
//   );
// };

// export default CodeReview;

