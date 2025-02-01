import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mockMessages from "../../data/messages";

const Message = () => {
  const { id } = useParams(); // Получаем `id` сообщения из URL
  const navigate = useNavigate();
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    // Ищем сообщение по ID
    const message = mockMessages.find(msg => msg.id.toString() === id);
    setSelectedMessage(message || null);
  }, [id]);

  return (
    <div className="message-container">
      <h2>Выбранное сообщение</h2>
      {selectedMessage ? (
        <div className="message-content">
          <p>{selectedMessage.text.replace(/<\/?[^>]+(>|$)/g, "").replace(/```[a-z]*\n?/g, "")}</p>
          <span className="timestamp">{selectedMessage.timestamp}</span>
        </div>
      ) : (
        <p>Сообщение не найдено</p>
      )}

      <button className="back-button" onClick={() => navigate("/")}>
        🔙 Назад к чату
      </button>
    </div>
  );
};

export default Message;
