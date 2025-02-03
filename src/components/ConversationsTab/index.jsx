import React, { useState, useEffect } from "react";
import { mockConversations } from "../../data/mockConversations";
import "./styles.css";

const ConversationsTab = () => {
  const [conversations, setConversations] = useState(mockConversations);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  useEffect(() => {
    // Эмуляция загрузки данных
    setTimeout(() => {
      setConversations(mockConversations);
    }, 500);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.title.toLowerCase().includes(searchQuery)
  );

  const handleEditStart = (id, title) => {
    setEditingId(id);
    setEditedTitle(title);
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditedTitle("");
  };

  const handleEditSave = (id) => {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === id ? { ...conv, title: editedTitle } : conv
      )
    );
    setEditingId(null);
    console.log(`Заголовок для ${id} обновлен: ${editedTitle}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Вы уверены, что хотите удалить этот диалог?")) {
      setConversations((prev) => prev.filter((conv) => conv.id !== id));
    }
  };

  return (
    <div className="conversations-container">
      <div className="conversations-search-bar">
        <i className="bi bi-search"></i>
        <input
          type="text"
          placeholder="Поиск диалога"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {filteredConversations.length > 0 ? (
        filteredConversations.map((conv) => (
          <div key={conv.id} className="conversation-card">
            <div className="conversation-header">
              <div className="conversation-status">
                <i
                  className={`bi ${conv.status === "ok"
                      ? "bi-square-fill"
                      : "bi-square"
                    }`}
                ></i>
              </div>

              <div className="conversation-content">
                <div className="conversation-title">
                  {editingId === conv.id ? (
                    <>
                      <input
                        type="text"
                        className="conversation-title-edit"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                      />
                      <i
                        className="bi bi-check-lg conversation-save-icon"
                        onClick={() => handleEditSave(conv.id)}
                      ></i>
                      <i
                        className="bi bi-x-lg conversation-cancel-icon"
                        onClick={handleEditCancel}
                      ></i>
                    </>
                  ) : (
                    <>
                      <span className="conversation-title-text">
                        {conv.title}
                      </span>
                      <i
                        className="bi bi-pencil conversation-edit-icon"
                        onClick={() => handleEditStart(conv.id, conv.title)}
                      ></i>
                    </>
                  )}
                </div>
                <span className="conversation-date">&gt; {conv.date}</span>
              </div>
            </div>
            <div className="conversation-buttons">
              {conv.status !== "ok" && (
                <button className="conversation-activate-btn">
                  <i className="bi bi-arrow-return-right"></i> Активировать
                </button>
              )}
              <button
                className="conversation-delete-btn"
                onClick={() => handleDelete(conv.id)}
              >
                <i className="bi bi-x-lg"></i> Удалить
              </button>
              <a href={conv.link} target="_self">
                <i className="bi bi-box-arrow-up-right"></i> Посмотреть
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="conversations-no-results">Нет диалогов</div>
      )}
    </div>
  );
};

export default ConversationsTab;
