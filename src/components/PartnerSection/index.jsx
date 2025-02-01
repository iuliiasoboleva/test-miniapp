import React, { useState } from "react";
import Notice from '../Notice';
import TabsComponent from "../TabsComponent";
import "./styles.css";
import FAQComponent from "../FAQComponent";

const PartnerSection = () => {
  const [activeTab, setActiveTab] = useState("balance");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabData = {
    "Платежи рефералов": 'Транзакции отсутствуют.',
    "Движение токенов": 'Движение токенов не зафиксировано.'
  };

  const tabReferralsData = {
    "Полный список": 'Полный список рефералов',
    "Самые активные": 'Самые активные рефералы'
  };

  const faqData = [
    {
      icon: "bi bi-lightbulb-fill ok",
      question: "Рекомендуем посмотреть ознакомительное видео",
      answer: "Ссылка на видео: https://youtu.be/BW9f0nUdpAo"
    },
    {
      icon: "bi bi-question-square-fill red",
      question: "Как работает партнерская программа?",
      answer: "Партнер приглашает пользователей по уникальной ссылке и получает вознаграждение."
    }
  ];

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
            <TabsComponent tabs={tabData} />
          </div>
        );
      case "referrals":
        return (
          <div className="referrals-content">
            <TabsComponent tabs={tabReferralsData} />
          </div>
        );
      case "documentation":
        return <FAQComponent faqData={faqData} />;
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
