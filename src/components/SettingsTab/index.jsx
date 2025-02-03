import React, { useState, useEffect } from "react";
import "./styles.css";

const SettingsTab = () => {
  const [showModel, setShowModel] = useState(true);
  const [summaryStatus, setSummaryStatus] = useState(true);
  const [summary, setSummary] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxLength = 3000;

  useEffect(() => {
    // Имитируем загрузку данных с бэка
    setTimeout(() => {
      setShowModel(true);
      setSummaryStatus(true);
      setSummary("Пользовательские инструкции...");
      setCharCount("Пользовательские инструкции...".length);
    }, 500);
  }, []);

  const handleToggle = (setter) => {
    setter((prev) => !prev);
  };

  const handleSummaryChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setSummary(value);
      setCharCount(value.length);
    }
  };

  return (
    <div className="settings-tab">
      <div className="notification">
        <i className="bi bi-info-square-fill"></i> 
        Переключайте настройки, управляйте моделью и изменяйте поведение AI.
      </div>

      {/* Выводить название модели */}
      <section className="settings-toggle">
        <span className="switch-label">Выводить название модели:</span>
        <div className="toggle-container">
          <div
            className={`toggle-button ${showModel ? "active" : "inactive"}`}
            onClick={() => handleToggle(setShowModel)}
          >
            {showModel ? "On" : "Off"}
          </div>
        </div>
      </section>

      <div className="notification">
        <i className="bi bi-info-square-fill"></i> 
        Этот переключатель управляет отображением названия модели AI.
      </div>

      {/* Индивидуальные указания */}
      <section className="settings-toggle">
        <span className="switch-label">Индивидуальные указания:</span>
        <div className="toggle-container">
          <div
            className={`toggle-button ${summaryStatus ? "active" : "inactive"}`}
            onClick={() => handleToggle(setSummaryStatus)}
          >
            {summaryStatus ? "On" : "Off"}
          </div>
        </div>
      </section>

      {/* Текстовая область с пользовательскими инструкциями */}
      <section className="settings-textarea">
        <textarea
          value={summary}
          onChange={handleSummaryChange}
          maxLength={maxLength}
          rows="5"
          placeholder="Добавьте ваши пожелания для AI..."
        ></textarea>
        <div className="char-counter">{charCount}/{maxLength}</div>
      </section>

      <div className="gpt-settings-buttons">
        <button className="submit-button">Сохранить</button>
        <button className="submit-button" onClick={() => window.Telegram.WebApp.close()}>
          Закрыть окно
        </button>
      </div>
    </div>
  );
};

export default SettingsTab;
