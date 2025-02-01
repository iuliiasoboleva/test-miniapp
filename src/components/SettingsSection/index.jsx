import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./styles.css";

const SettingsSection = () => {
  const { t } = useTranslation();

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
        <span>{t("settings.tokenUsage")}</span>
        <div className="notification-toggle">
          <div
            className={`toggle-button ${
              notifications.updates ? "active" : "inactive"
            }`}
            onClick={() => toggleNotification("updates")}
          >
            {notifications.updates ? "On" : "Off"}
          </div>
        </div>
      </div>
      <div className="notification-row">
        <span>{t("settings.notifications")}</span>
        <div className="notification-toggle">
          <div
            className={`toggle-button ${
              notifications.tokenDeduction ? "active" : "inactive"
            }`}
            onClick={() => toggleNotification("tokenDeduction")}
          >
            {notifications.tokenDeduction ? "On" : "Off"}
          </div>
        </div>
      </div>
      <div className="notification-row">
        <span>{t("settings.referralPayments")}</span>
        <div className="notification-toggle">
          <div
            className={`toggle-button ${
              notifications.referralPayments ? "active" : "inactive"
            }`}
            onClick={() => toggleNotification("referralPayments")}
          >
            {notifications.referralPayments ? "On" : "Off"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsSection;
