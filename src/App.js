import './App.css';
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
      try {
          const response = await axios.get("http://localhost:4002/backend/hello");
          console.log(response.data);
          setMessage(response.data);
      } catch (error) {
          setMessage("Error fetching message");
      }
  };
  const userInput = "<img src=x onerror=alert('CodeQL Alert!')>"; // 🚨 CodeQL will flag this

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        
          <h1>Landing Page</h1>
          <button onClick={fetchMessage}>Get Backend Message</button>
          <p>{message}</p>
          <p dangerouslySetInnerHTML={{ __html: message }} />
      </div>
  );
}

export default App;
