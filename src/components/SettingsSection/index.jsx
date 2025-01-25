import React, { useState } from "react";
import "./styles.css";

const SettingsSection = () => {
  const [notifications, setNotifications] = useState({
    updates: false,
    tokenDeduction: false,
    referralPayments: false,
  });

  const toggleNotification = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <section id="setting" className="settings-section">
      <h2 className="section-title">Настройки уведомлений</h2>
      <div className="notification-row">
        <span>Получать уведомления об обновлениях</span>
        <div className="notification-toggle">
          <button
            className={`toggle-button ${
              notifications.updates ? "active" : "inactive"
            }`}
            onClick={() => toggleNotification("updates")}
          >
            {notifications.updates ? "On" : "Off"}
          </button>
        </div>
      </div>
      <div className="notification-row">
        <span>Уведомлять о списании токенов</span>
        <div className="notification-toggle">
          <button
            className={`toggle-button ${
              notifications.tokenDeduction ? "active" : "inactive"
            }`}
            onClick={() => toggleNotification("tokenDeduction")}
          >
            {notifications.tokenDeduction ? "On" : "Off"}
          </button>
        </div>
      </div>
      <div className="notification-row">
        <span>Оплаты рефералами</span>
        <div className="notification-toggle">
          <button
            className={`toggle-button ${
              notifications.referralPayments ? "active" : "inactive"
            }`}
            onClick={() => toggleNotification("referralPayments")}
          >
            {notifications.referralPayments ? "On" : "Off"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SettingsSection;
