import React, { useEffect, useState } from "react";
import { ReactComponent as InfoIcon } from "../../assets/images/exclamation.svg";
import { ReactComponent as AllModelsIcon } from "../../assets/images/comment-alt.svg";
import { ReactComponent as GPTsIcon } from "../../assets/images/user.svg";
import { ReactComponent as SettingsIcon } from "../../assets/images/shopping-bag.svg";
import { ReactComponent as DialogsIcon } from "../../assets/images/comment-alt.svg";
import "./styles.css";

const GPTProfile = () => {
  const [activeTab, setActiveTab] = useState("allModels");

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    // Инициализация мини-приложения
    tg.ready();

    // Настройка кнопки "Закрыть окно"
    tg.MainButton.setText("Закрыть окно");
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      tg.close(); // Закрытие окна MiniApp
    });

    return () => {
      tg.MainButton.offClick();
      tg.MainButton.hide();
    };
  }, []);

  return (
    <div className="gpt-profile">
      {/* Информационный блок */}
      <div className="info-block">
        <InfoIcon className="info-icon" />
        <p>Добро пожаловать в GPT Profile! Выберите вкладку ниже.</p>
      </div>

      {/* Табы */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === "allModels" ? "active" : ""}`}
          onClick={() => setActiveTab("allModels")}
        >
          <AllModelsIcon className="tab-icon" />
          <span>Все модели</span>
        </div>
        <div
          className={`tab ${activeTab === "gpts" ? "active" : ""}`}
          onClick={() => setActiveTab("gpts")}
        >
          <GPTsIcon className="tab-icon" />
          <span>GPTs</span>
        </div>
        <div
          className={`tab ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          <SettingsIcon className="tab-icon" />
          <span>Настройки</span>
        </div>
        <div
          className={`tab ${activeTab === "dialogs" ? "active" : ""}`}
          onClick={() => setActiveTab("dialogs")}
        >
          <DialogsIcon className="tab-icon" />
          <span>Диалоги</span>
        </div>
      </div>

      {/* Содержимое вкладок */}
      <div className="tab-content">
        {activeTab === "allModels" && (
          <div className="all-models">
            <div className="plan">
              <div className="plan-row">
                <span className="plan-text">
                  <InfoIcon className="plan-icon" />
                  Тариф "Базовый"
                </span>
                <span className="plan-info">100 токенов / месяц</span>
              </div>
              <div className="plan-row">
                <span className="plan-text">
                  <InfoIcon className="plan-icon" />
                  Тариф "Премиум"
                </span>
                <span className="plan-info">500 токенов / месяц</span>
              </div>
            </div>
            <div className="model-select">
              <label htmlFor="model">Выберите модель:</label>
              <select id="model">
                <option value="gpt-3.5">GPT-3.5</option>
                <option value="gpt-4">GPT-4</option>
                <option value="davinci">Davinci</option>
              </select>
              <p>Каждая модель имеет свои особенности, выберите нужную.</p>
            </div>
          </div>
        )}
        {activeTab === "gpts" && (
          <div className="gpts">
            <p>Здесь вы можете настроить свои GPTs.</p>
          </div>
        )}
        {activeTab === "settings" && (
          <div className="settings">
            <p>Настройте параметры работы вашего профиля здесь.</p>
          </div>
        )}
        {activeTab === "dialogs" && (
          <div className="dialogs">
            <ul>
              <li>Диалог 1</li>
              <li>Диалог 2</li>
              <li>Диалог 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GPTProfile;
