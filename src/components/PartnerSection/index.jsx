import React, { useState } from "react";
import { ReactComponent as BalanceIcon } from "../../assets/images/dollar.svg";
import { ReactComponent as ReferralsIcon } from "../../assets/images/users-alt.svg";
import { ReactComponent as DocumentationIcon } from "../../assets/images/comment-alt.svg";
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
            <div className="balance-row">
              <div className="balance-row-text">
                <BalanceIcon className="balance-icon" />
                <span>Токены:</span>
              </div>
              <span>1000</span>
            </div>
            <div className="balance-row">
              <div className="balance-row-text">
                <BalanceIcon className="balance-icon" />
                <span>Рубли:</span>
              </div>
              <span>5000</span>
            </div>
            <div className="balance-row">
              <div className="balance-row-text">
                <BalanceIcon className="balance-icon" />
                <span>Доллары:</span>
              </div>
              <span>70</span>
            </div>
            <button className="withdraw-button">Вывести</button>
            <div className="copy-link">
              <p>Кликните на ссылку, чтобы её скопировать:</p>
              <p
                className="link-text"
                onClick={() => navigator.clipboard.writeText("https://referral-link.com")}
              >
                https://referral-link.com
              </p>
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
    <section id="contact" className="contact-section">
      <h2 className="section-title">Партнерство</h2>
      <div className="tabs">
        <div
          className={`tab ${activeTab === "balance" ? "active" : ""}`}
          onClick={() => handleTabClick("balance")}
        >
          <BalanceIcon className="tab-icon" />
          <span>Баланс</span>
        </div>
        <div
          className={`tab ${activeTab === "referrals" ? "active" : ""}`}
          onClick={() => handleTabClick("referrals")}
        >
          <ReferralsIcon className="tab-icon" />
          <span>Мои рефералы</span>
        </div>
        <div
          className={`tab ${activeTab === "documentation" ? "active" : ""}`}
          onClick={() => handleTabClick("documentation")}
        >
          <DocumentationIcon className="tab-icon" />
          <span>Документация</span>
        </div>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </section>
  );
};

export default PartnerSection;
