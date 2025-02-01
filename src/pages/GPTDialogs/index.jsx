import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import mockMessages from "../../data/messages";
import "./styles.css";

const GPTDialogs = () => {
  const { id } = useParams(); // Получаем id сообщения (если есть)
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [copiedMessageId, setCopiedMessageId] = useState(null);
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setMessages(mockMessages);
    }, 500);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const copyMessageToClipboard = (messageId, text) => {
    const plainText = text.replace(/```[a-z]*\n?/g, "");
    navigator.clipboard.writeText(plainText).then(() => {
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 3000);
    });
  };

  const copyCodeToClipboard = (messageId, code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCodeId(messageId);
      setTimeout(() => setCopiedCodeId(null), 3000);
    });
  };

  const copyLinkToClipboard = () => {
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl);
  };

  const renderMessageContent = (message) => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "text";
            const codeString = String(children).replace(/\n$/, "");

            return !inline ? (
              <div className="code-block">
                <div className="code-header">
                  <span className="code-language">{language.toUpperCase()}</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyCodeToClipboard(message.id, codeString)}
                  >
                    {copiedCodeId === message.id ? "✅" : "📋"}
                  </button>
                </div>
                <SyntaxHighlighter style={atomDark} language={language} PreTag="div">
                  {codeString}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          table({ children }) {
            return <table className="markdown-table">{children}</table>;
          },
          th({ children }) {
            return <th style={{ border: "1px solid rgb(29, 31, 33)", padding: "5px" }}>{children}</th>;
          },
          td({ children }) {
            return <td style={{ border: "1px solid rgb(29, 31, 33)", padding: "5px" }}>{children}</td>;
          }
        }}
      >
        {message.text}
      </ReactMarkdown>
    );
  };

  // Если есть id в URL, показываем только одно сообщение
  const selectedMessage = id ? messages.find(msg => msg.id.toString() === id) : null;

  return (
    <div className="gpt-dialogs-container">
      <div className="chat-header">
        <a href={window.location.href} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-box-arrow-up-right"></i> В браузер
        </a>
        <a href="#" onClick={copyLinkToClipboard}>
          <i className="bi bi-clipboard"></i> Скопировать ссылку
        </a>
      </div>
      <div className="chat-messages">
        {selectedMessage ? (
          <div key={selectedMessage.id} className={`message ${selectedMessage.sender}`}>
            {selectedMessage.sender === "bot" && (
              <div className="bot-icon">
                <img src={logo} alt="Logo" width="25px" height="35px" />
              </div>
            )}
            <div className="message-content">
              {renderMessageContent(selectedMessage)}
              <div className="message-meta">
                <div className="message-data">
                  <div
                    className="copy-message-btn"
                    onClick={() => copyMessageToClipboard(selectedMessage.id, selectedMessage.text)}
                  >
                    {copiedMessageId === selectedMessage.id ? (
                      <><i className="bi bi-check2"></i> Скопировано!</>
                    ) : (
                      <><i className="bi bi-copy"></i> Скопировать</>
                    )}
                  </div>
                  <span className="model"><i className="bi bi-robot"></i>{selectedMessage.model}</span>
                  <span className="timestamp"><i className="bi bi-clock-history"></i>{selectedMessage.timestamp}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              {msg.sender === "bot" && (
                <div className="bot-icon">
                  <img src={logo} alt="Logo" width="25px" height="35px" />
                </div>
              )}
              <div className="message-content">
                {renderMessageContent(msg)}
                <div className="message-meta">
                  <div className="message-data">
                    <div
                      className="copy-message-btn"
                      onClick={() => copyMessageToClipboard(msg.id, msg.text)}
                    >
                      {copiedMessageId === msg.id ? (
                        <><i className="bi bi-check2"></i> Скопировано!</>
                      ) : (
                        <><i className="bi bi-copy"></i> Скопировать</>
                      )}
                    </div>
                    <span className="model"><i className="bi bi-robot"></i>{msg.model}</span>
                    <span className="timestamp"><i className="bi bi-clock-history"></i>{msg.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={chatEndRef}></div>
      </div>
    </div>
  );
};

export default GPTDialogs;
