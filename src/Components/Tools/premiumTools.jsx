import React from "react";
import "./premiumTools.css";
import lockIcon from "../images/icon password manager.png"; 
import codeReviewIcon from "../images/icon code reviews.png"; 
import emailBreachIcon from "../images/icon vulnerability scan.png";
import spamIcon from "../images/icon spam email.png";
import vulnerabilityScanIcon from "../images/icon vulnerability scan.png";
import { useNavigate } from "react-router-dom";

const PremiumTools = () => {
  const navigate = useNavigate();
  const tools = [
    {
      title: "The vulnerability scan",
      description:
        "A vulnerability scan is an automated, high-level test that looks for and reports potential known vulnerabilities.",
      icon: vulnerabilityScanIcon,
      link: "/VulnerScan",
    },
    {
      title: "Code Reviews",
      description:
        "Code reviews are methodical assessments of code designed to identify bugs and help developers learn the source code.",
      icon: codeReviewIcon,
      link: "/CodeReviews",

    },
    {
      title: "Email Breach",
      description:
        "Email breach refers to the processes and technologies used to identify unauthorized access or breaches involving email accounts and systems.",
      icon: emailBreachIcon,
      link: "/Emailbreach",

    },
    {
      title: "Spam Email",
      description:
        "Spam Email is unsolicited and unwanted junk email sent out in bulk to an indiscriminate recipient list.",
      icon: spamIcon,
      link: "/Emailspam",
      
    },
    {
      title: "Password Manager",
      description:
        "A password manager is a software application designed to store and manage your passwords and other sensitive information securely.",
      icon: lockIcon,
      link: "/PasswordManager",
      
    },
  ];
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLearnMore = (link) => {
    if (isAuthenticated) {
      navigate(link); // Navigate to the feature page
    } else {
      // localStorage.setItem("redirectAfterLogin", link);
      // navigate("/signup"); 
      navigate(link);
    }
  };

  return (
    <div className="premium-tools">
      <h2 className="premium-tools-title">
        We offer premium tools <br />
        <span className="highlight">Exclusively for you.</span>
      </h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.icon} alt={`${tool.title} icon`} className="tool-icon" />
            <h3 className="tool-title">{tool.title}</h3>
            <hr/>
            <p className="tool-description">{tool.description}</p>
            <button className="learn-more-btn"  onClick={() => handleLearnMore(tool.link)}>Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumTools;

