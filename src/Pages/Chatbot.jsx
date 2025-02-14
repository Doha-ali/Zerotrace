import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faLightbulb, faCode, faMoon, faTrash , faPenNib , faSun , faCopy } from '@fortawesome/free-solid-svg-icons';
import gimine from '../Components/images/gemini.png'
import user2 from '../Components/images/user2.jpg'


const Chatbot = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("themeColor") || "light_mode");
  const [apiLoading, setApiLoading] = useState(false);
  const chatListRef = useRef(null);

  // Replace with your actual API key
  const API_KEY = "AIzaSyBojf_AjtC9ccFQ_ULQ_-gRMdKvDt204nQ";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  const suggestions = [
    { text: "How can I protect my phone or device from being hacked?", icon: faTrophy },
    { text: "How do I know if my account has been hacked?", icon: faPenNib },
    { text: "Are public Wi-Fi networks safe?", icon: faLightbulb },
    { text: "How do I choose a strong password?", icon: faCode },
  ];

  // Load saved chats and apply theme on mount
  useEffect(() => {
    const savedChats = localStorage.getItem("savedchats");
    if (savedChats) setMessages(JSON.parse(savedChats));
    if (theme === "light_mode") {
      document.body.classList.add("light_mode");
    } else {
      document.body.classList.remove("light_mode");
    }
  }, [theme]);

  // Save chats to localStorage and scroll to bottom on new messages
  useEffect(() => {
    localStorage.setItem("savedchats", JSON.stringify(messages));
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [messages]);

  // Toggle theme between dark and light
  // useEffect(() => {
  //   document.body.classList.toggle("light_mode", theme === "light_mode");
  //   localStorage.setItem("themeColor", theme);
  // }, [theme]);



  const toggleTheme = () => {
    if (theme === "light_mode") {
      setTheme("dark_mode");
      document.body.classList.remove("light_mode");
      document.body.classList.add("dark_mode"); 
      localStorage.setItem("themeColor", "dark_mode");
    } else {
      setTheme("light_mode");
      document.body.classList.remove("dark_mode");
      document.body.classList.add("light_mode");
      localStorage.setItem("themeColor", "light_mode");
    }
  };




  // Delete all chats
  const deleteChat = () => {
    if (window.confirm("Are you sure you want to delete all the chats?")) {
      setMessages([]);
      localStorage.removeItem("savedchats");
    }
  };

  // Handle sending a message (from input or suggestion)
  const handleSendMessage = async (message) => {
    if (!message.trim() || apiLoading) return;

    // Add the user message to the chat list
    const userMsg = { sender: "outgoing", content: message };
    setMessages((prev) => [...prev, userMsg]);
    setUserMessage("");
    setApiLoading(true);

    // Add a loading message for the bot response
    const loadingMsg = { sender: "incoming", content: "", loading: true };
    setMessages((prev) => [...prev, loadingMsg]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: message }] }],
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || "API error");

      // Extract and clean the bot's reply
      let botResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";
      botResponse = botResponse.replace(/\*\*(.*?)\*\*/g, "$1");

      // Replace the loading message with a typing effect for the bot reply
      setMessages((prev) => {
        const newMessages = [...prev];
        const loadingIndex = newMessages.findIndex((msg) => msg.loading);
        if (loadingIndex !== -1) {
          newMessages[loadingIndex] = { sender: "incoming", content: "" };
          let currentText = "";
          const words = botResponse.split(" ");
          let wordIndex = 0;
          const interval = setInterval(() => {
            currentText += (wordIndex === 0 ? "" : " ") + words[wordIndex];
            newMessages[loadingIndex].content = currentText;
            setMessages([...newMessages]);
            wordIndex++;
            if (wordIndex === words.length) {
              clearInterval(interval);
              delete newMessages[loadingIndex].loading;
              setMessages([...newMessages]);
              setApiLoading(false);
            }
          }, 100);
        }
        return newMessages;
      });
    } catch (error) {
      // Replace the loading message with an error message
      setMessages((prev) => {
        const newMessages = [...prev];
        const loadingIndex = newMessages.findIndex((msg) => msg.loading);
        if (loadingIndex !== -1) {
          newMessages[loadingIndex] = { sender: "incoming", content: error.message, error: true };
        }
        return newMessages;
      });
      setApiLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(userMessage);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestionText) => {
    handleSendMessage(suggestionText);
  };




  return (
    <div className="chatContainer">
      <div className="colored"></div>
      <header className="header">
        <h1 className="title">ZERO Trace Ai</h1>
        <p className="subtitle">How Can I help you today?</p>

        
        <ul className="suggestion-list">
          {suggestions.map((s, index) => (
            <li key={index} className="suggestion" onClick={() => handleSuggestionClick(s.text)}>
              <h4 className="text">{s.text}</h4>
              <span className="icon material-symbols-rounded"><FontAwesomeIcon icon={s.icon}/></span>
            </li>
          ))}
        </ul>

        {/* Action Buttons in header */}
       
      </header>



      {/* Chat list */}
      <div className="chat-list" ref={chatListRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender} ${msg.error ? "error" : ""} ${msg.loading ? "loading" : ""}`}>
            <div className="message-content">
              {msg.sender === "incoming" && (
                <img className="avatar" src={gimine} alt="Gemini logo" />
              )}
              {msg.sender === "outgoing" && (
                <img className="avatar" src={user2} alt="User" />
              )}
              <p className="text">{msg.content}</p>
              {msg.sender === "incoming" && !msg.loading && (
                <span
                  className="icon material-symbols-rounded"
                  onClick={() => {
                    navigator.clipboard.writeText(msg.content);
                  }}
                >
                            <FontAwesomeIcon icon ={faCopy} />
                </span>
              )}
            </div>
            {msg.loading && (
              <div className="loading-indicator">
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Typing area */}
      <div className="typing-area">
        <form className="typing-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="typing-input"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              required
            />

            <div className="action-buttons">
              <span id="theme-toggle-button" className="icon material-symbols-rounded" onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === "light_mode" ? faMoon : faSun} className="moon"/>
              </span>
              <span id="delete-chat-button" className="icon material-symbols-rounded" onClick={deleteChat}>
                <FontAwesomeIcon icon={faTrash} className="trash"/>
              </span>
            </div>
            {/* <button id="send-message-button" type="submit" className="icon3 material-symbols-rounded">
                send
            </button> */}
          </div>
        </form>
        <p className="disclaimer">
          ZERO Trace may display inaccurate info, including about people, so double-check its responses.
        </p>
      </div>
    </div>
  );
};

export default Chatbot;









