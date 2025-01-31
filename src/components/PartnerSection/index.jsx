import React, { useState } from "react";
import Notice from '../Notice';
import "./styles.css";

const PartnerSection = () => {
  const [activeTab, setActiveTab] = useState("balance");
  const [activeSubTab, setActiveSubTab] = useState("payments");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveSubTab(tab === "balance" ? "payments" : "full-list"); // Сбрасываем подтаб при смене таба
  };

  const renderContent = () => {
    switch (activeTab) {
      case "balance":
        return (
          <div className="balance-content">
            <div className="partner-balance">
              <div className="stat-item">
                <div>
                  <p>
                    <span className="stat-icon"><i class="bi bi-piggy-bank-fill"></i></span>
                    <span className="stat-text">Баланс партнера</span>
                  </p>
                  <span className="stat-number">0.000 ⚡</span>
                </div>
              </div>
              <div className="stat-item">
                <div>
                  <p>
                    <span className="stat-icon"><i class="bi bi-graph-up-arrow"></i></span>
                    <span className="stat-text">Всего продаж</span>
                  </p>
                  <span className="stat-number">0 🛒</span>
                </div>
              </div>
              <div className="stat-item">
                <div>
                  <p>
                    <span className="stat-icon"><i class="bi bi-currency-exchange"></i></span>
                    <span className="stat-text">Сумма продаж</span>
                  </p>
                  <span className="stat-number">0.00 ₽ / 0.00 €</span>
                </div>
              </div>
              <button href="#" className="cardButton">Вывести в <span>₽ € $</span></button>
            </div>
            <Notice text={' Отправляйте друзьям/коллегам свою уникальную ссылку, чтобы зарабатывать вместе с SYNTX 👇'} />
            <div className="partner-copy-link">
              <p
                className="link-text"
                onClick={() => navigator.clipboard.writeText("https://referral-link.com")}
              >
                <i className="bi bi-link-45deg"></i>https://referral-link.com
              </p>
              <p><i className="bi bi-copy"></i>Кликните на ссылку, чтобы её скопировать</p>
            </div>
            <div className="sub-tabs">
              <button
                className={`sub-tab ${activeSubTab === "payments" ? "active" : ""}`}
                onClick={() => setActiveSubTab("payments")}
              >
                Платежи рефералов
              </button>
              <button
                className={`sub-tab ${activeSubTab === "movements" ? "active" : ""}`}
                onClick={() => setActiveSubTab("movements")}
              >
                Движение токенов
              </button>
            </div>
            <div className="sub-tab-content">
              {activeSubTab === "payments" && <p>Информация о платежах рефералов</p>}
              {activeSubTab === "movements" && <p>Информация о движении токенов</p>}
            </div>
          </div>
        );
      case "referrals":
        return (
          <div className="referrals-content">
            <div className="sub-tabs">
              <button
                className={`sub-tab ${activeSubTab === "full-list" ? "active" : ""}`}
                onClick={() => setActiveSubTab("full-list")}
              >
                Полный список
              </button>
              <button
                className={`sub-tab ${activeSubTab === "active" ? "active" : ""}`}
                onClick={() => setActiveSubTab("active")}
              >
                Самые активные
              </button>
            </div>
            <div className="sub-tab-content">
              {activeSubTab === "full-list" && <p>Полный список рефералов</p>}
              {activeSubTab === "active" && <p>Самые активные рефералы</p>}
            </div>
          </div>
        );
      case "documentation":
        return <p>Здесь отображается документация.</p>;
      default:
        return null;
    }
  };

  return (
    <section id="partner" className="partner-section">
      <div className="partner-title">PARTNER</div>
      <nav className="partner-top-nav">
        <ul>
          <li>
            <a
              className={activeTab === "balance" ? "active" : ""}
              onClick={() => handleTabClick("balance")}
            >
              <i className="bi bi-piggy-bank-fill"></i> Баланс
            </a>
          </li>
          <li>
            <a
              className={activeTab === "referrals" ? "active" : ""}
              onClick={() => handleTabClick("referrals")}
            >
              <i className="bi bi-people-fill"></i> Мои рефералы
            </a>
          </li>
          <li>
            <a
              className={activeTab === "documentation" ? "active" : ""}
              onClick={() => handleTabClick("documentation")}
            >
              <i className="bi bi-file-earmark-text-fill"></i> Документация
            </a>
          </li>
        </ul>
      </nav>
      <div className="tab-content">{renderContent()}</div>
    </section>
  );
};

export default PartnerSection;