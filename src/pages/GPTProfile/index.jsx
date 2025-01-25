import React, { useEffect } from "react";
import "./styles.css";

const GPTProfile = () => {
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
      <h1>GPT Profile</h1>
      <p>Это другой маршрут MiniApp, доступный через Telegram.</p>
    </div>
  );
};

export default GPTProfile;
