import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const mockMessages = [
  { id: 1, text: "Привет! Чем могу помочь?", sender: "bot", timestamp: "12:30" },
  { id: 2, text: "Как сделать API-запрос в JavaScript?", sender: "user", timestamp: "12:31" },
  { id: 3, text: "```javascript\nfetch('https://api.example.com')\n  .then(response => response.json())\n  .then(data => console.log(data));\n```", sender: "bot", timestamp: "12:32" },
  { id: 4, text: "<ul><li>Купить хлеб</li><li>Купить молоко</li></ul>", sender: "bot", timestamp: "12:33" },
  { id: 5, text: "<table border='1'><tr><th>Продукт</th><th>Цена</th></tr><tr><td>Яблоки</td><td>100 руб.</td></tr></table>", sender: "bot", timestamp: "12:34" }
];

const GPTDialogs = () => {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Имитация загрузки данных с бэка
    setTimeout(() => {
      setMessages(mockMessages);
    }, 500);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Ответ скопирован!");
    });
  };

  const renderMessageContent = (message) => {
    if (message.text.startsWith("```")) {
      return <pre><code>{message.text.replace(/```/g, "")}</code></pre>;
    } else if (message.text.includes("<table") || message.text.includes("<ul") || message.text.includes("<ol")) {
      return <div dangerouslySetInnerHTML={{ __html: message.text }} />;
    } else {
      return <p>{message.text}</p>;
    }
  };

  return (
    <div className="gpt-dialogs-container">
      <div className="chat-header">GPTDialogs</div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.sender === "bot" && <div className="bot-icon">🤖</div>}
            <div className="message-content">
              {renderMessageContent(msg)}
              {msg.sender === "bot" && (
                <div className="message-meta">
                  <span className="timestamp">{msg.timestamp}</span>
                  <button className="copy-btn" onClick={() => copyToClipboard(msg.text)}>📋</button>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
    </div>
  );
};

export default GPTDialogs;
