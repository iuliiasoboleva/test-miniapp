import React, { useState, useEffect } from "react";
import { gpts } from "../../data/gptModels";
import "./styles.css";

const GPTsTab = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGPTs, setActiveGPTs] = useState([]); // Список активных GPTs
  const [loading, setLoading] = useState(null); // Для кнопки загрузки

  // Моковый API-запрос (имитация работы бэка)
  const mockActivateGPT = (gptId) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, gptId }), 500);
    });
  };

  // Фильтрация по категории и поисковому запросу
  const filteredGPTs = gpts
    .filter(
      (gpt) =>
        (selectedCategory === "" || gpt.category.toLowerCase() === selectedCategory.toLowerCase()) &&
        (gpt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          gpt.about.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (gpt.content && gpt.content.toLowerCase().includes(searchQuery.toLowerCase()))) // Поиск по контенту
    )
    .sort((a, b) => (activeGPTs.includes(b.id) ? -1 : 1)); // Активные в начале

  const handleActivateGPT = async (gptId) => {
    setLoading(gptId); // Показываем состояние загрузки для кнопки
    try {
      const response = await mockActivateGPT(gptId);
      if (response.success) {
        setActiveGPTs((prev) => [...prev, gptId]); // Добавляем в список активных
      }
    } catch (error) {
      console.error("Ошибка активации GPT:", error);
    } finally {
      setLoading(null); // Убираем состояние загрузки
    }
  };

  return (
    <div className="gpts-tab">
      <div className="gpts-form-group">
        <label htmlFor="category">Выберите категорию:</label>
        <div class="select-wrapper">
          <select
            id="category"
            className="select-input"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Все категории</option>
            <option value="Education">Образование</option>
            <option value="Research & Analysis">Исследование и анализ</option>
            <option value="Writing">Составление текстов</option>
            <option value="Productivity">Продуктивность</option>
            <option value="DALL·E">DALL·E</option>
            <option value="Programming">Программирование</option>
            <option value="Lifestyle">Образ жизни</option>
            <option value="Other">Other</option>
          </select>
          <i class="bi bi-chevron-down select-arrow"></i>
        </div>
      </div>
      <div className="gpts-form-group">
        <i className="bi bi-search"></i>
        <input
          type="text"
          placeholder="Поиск GPTs"
          className="styled-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div id="gpts-container">
        {filteredGPTs.length > 0 ? (
          filteredGPTs.map((gpt) => (
            <section key={gpt.id} className={`gpt-section ${activeGPTs.includes(gpt.id) ? "active-item" : ""}`}>
              <div className="gpt-item">
                <img className="gpt-icon" src={gpt.image} alt={gpt.title} />
                <div className="content">
                  <div className="title">{gpt.title}</div>
                  <div className="category">
                    <i className="bi bi-tag-fill"></i> {gpt.category}
                  </div>
                  <div className="about">{gpt.about}</div>
                  <div className="button-container">
                    {activeGPTs.includes(gpt.id) ? (
                      <button className="active-button">Активно</button>
                    ) : (
                      <button
                        className="enable-button"
                        onClick={() => handleActivateGPT(gpt.id)}
                        disabled={loading === gpt.id} // Отключаем кнопку при загрузке
                      >
                        {loading === gpt.id ? "Загрузка..." : "Включить"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))
        ) : (
          <div id="no-results" style={{ textAlign: "center", marginTop: "20px" }}>
            <i className="bi bi-robot"></i> Поиск не дал результатов.
            <br />
            <br />
            Вы можете обратиться в службу заботы{" "}
            <a href="#">@support</a>, и мы оперативно добавим необходимый GPTs.
          </div>
        )}
      </div>

      <button className="submit-button" onClick={() => window.Telegram.WebApp.close()}>
        Закрыть окно
      </button>
    </div>
  );
};

export default GPTsTab;
