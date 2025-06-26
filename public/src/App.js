import React, { useState } from "react";
import syllabus from "../syllabus";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [showSyllabus, setShowSyllabus] = useState(false);

  const sendMessage = () => {
    if (text.trim() !== "") {
      setMessages([...messages, text]);
      setText("");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h2>Data Science Chat</h2>

      <button
        onClick={() => setShowSyllabus(!showSyllabus)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          marginBottom: 20,
          backgroundColor: "#6200ea",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
        }}
      >
        {showSyllabus ? "Hide Syllabus" : "Hide Chat (Show Syllabus)"}
      </button>

      {showSyllabus ? (
        <pre
          style={{
            whiteSpace: "pre-wrap",
            background: "#f5f5f5",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {syllabus}
        </pre>
      ) : (
        <>
          <div
            style={{
              minHeight: "200px",
              border: "1px solid #ccc",
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
              background: "#fafafa",
            }}
          >
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: 5 }}>
                <b>You:</b> {msg}
              </div>
            ))}
          </div>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message..."
            style={{ padding: "10px", width: "80%" }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "10px",
              marginLeft: 10,
              backgroundColor: "#03dac5",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Send
          </button>
        </>
      )}
    </div>
  );
              }
