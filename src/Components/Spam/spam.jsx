// import { useState } from "react";
// import axios from "axios";
// import "./spam.css"; // Ensure this CSS file is in your project
// import Envelope from '../images/envelope.png'

// const SpamCheckForm = () => {
//   const [senderName, setSenderName] = useState("");
//   const [emailContent, setEmailContent] = useState("");
//   const [agreed, setAgreed] = useState(false);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!agreed) {
//       setError("You must agree to the terms before submitting.");
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     setResult(null);

//     try {
//       // Replace the URL with your actual API endpoint
//       const response = await axios.post("http://localhost:5000/api/spam-check", {
//         senderName,
//         emailContent,
//       });

//       setResult(response.data.spam ? "🚨 Spam" : "✅ Not Spam");
//     } catch (err) {
//       setError("Error checking spam. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="spamCheckContainer">
//       <img src ={Envelope} alt="..." className="envelope"/>
//       <h2>Email Spam Checker</h2>
//       <form onSubmit={handleSubmit} className="spamForm">
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Enter sender name"
//             value={senderName}
//             className="senderNam"
//             onChange={(e) => setSenderName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <textarea
//             placeholder="Enter email content"
//             value={emailContent}
//             onChange={(e) => setEmailContent(e.target.value)}
//             className="emailContent"
//             required
//           ></textarea>
//         </div>
//         <div className="formGroup terms">
//           <input
//             type="checkbox"
//             id="terms"
//             className="checkBox"
//             checked={agreed}
//             onChange={(e) => setAgreed(e.target.checked)}
//           />
//           <label htmlFor="terms">
//             I agree to the{" "}
//             <a href="/terms" target="_blank" rel="noopener noreferrer">
//               Terms of Service
//             </a>{" "}
//             and{" "}
//             <a href="/privacy" target="_blank" rel="noopener noreferrer">
//               Privacy Policy
//             </a>
//           </label>
//         </div>
//         <button
//           type="submit"
//           disabled={loading || !agreed}
//           className="checkSpam"
//         >
//           {loading ? "Checking..." : "Check Spam"}
//         </button>
//       </form>
//       {result && <p className="result">{result}</p>}
//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// };

// export default SpamCheckForm;



import { useState } from "react";
import axios from "axios";
import "./spam.css";
import Envelope from "../images/envelope.png";

const SpamCheckForm = () => {
  const [senderName, setSenderName] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyBojf_AjtC9ccFQ_ULQ_-gRMdKvDt204nQ"; // Replace with your actual API key
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      setError("You must agree to the terms before submitting.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const prompt = `Analyze the following email and determine if it is spam or not. 
      Provide only "Spam" or "Not Spam" in your response.
      Sender: ${senderName}
      Email Content: ${emailContent}`;

      const response = await axios.post(API_URL, {
        contents: [{ parts: [{ text: prompt }] }],
      });

      const reviewResult =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response received.";

      setResult(reviewResult);
    } catch (err) {
      console.error("Error checking spam:", err);
      setError("❌ Error checking spam. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="spamCheckContainer">
      <img src={Envelope} alt="..." className="envelope" />
      <h2>Email Spam Checker</h2>
      <form onSubmit={handleSubmit} className="spamForm">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter sender name"
            value={senderName}
            className="senderNam"
            onChange={(e) => setSenderName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <textarea
            placeholder="Enter email content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            className="emailContent"
            required
          ></textarea>
        </div>
        <div className="formGroup terms">
          <input
            type="checkbox"
            id="terms"
            className="checkBox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="terms">
            I agree to the{" "}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </label>
        </div>
        <button type="submit" disabled={loading || !agreed} className="checkSpam">
          {loading ? "Checking..." : "Check Spam"}
        </button>
      </form>
      {result && ( <p className={`result ${result.startsWith("Spam") ? "spam" : "notSpam"}`}> {result} </p>
)}
      {/* {result && <p className="result">{result}</p>} */}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SpamCheckForm;


