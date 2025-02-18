import React, { useState } from "react";
import axios from "axios";
import "./breach.css"; // Assuming you want separate CSS for styling

const EmailBreachCheck = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("https://1838-102-184-171-122.ngrok-free.app/email%20breach%20detection/check-breach.php", { email });
      setResult(response.data.breached ? "Your email has been breached!" : "Your email is safe.");
    } catch (err) {
      setError("Failed to check breach status. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="thirdBreachSec">
    <div className="breachContainer">
      <h2>Email Breach Detection</h2>
      <p>Enter your email to check if your email address is in a data breach</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="emailInput"
          required
        />
        <button type="submit" disabled={loading} className="checkBreach">
          {loading ? "Checking..." : "Check For Breach"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {result && <p className="result-message">{result}</p>}
    </div>
    </div>
  );
};

export default EmailBreachCheck;
