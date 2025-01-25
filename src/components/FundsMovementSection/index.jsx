import React, { useState } from "react";
import "./styles.css";

const FundsMovementSection = () => {
  const [activeTab, setActiveTab] = useState("payments");

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Партнерство</h2>
      <div className="sub-tabs">
              <button
                className={`sub-tab ${activeTab === "payments" ? "active" : ""}`}
                onClick={() => setActiveTab("payments")}
              >
                История платежей
              </button>
              <button
                className={`sub-tab ${activeTab === "movements" ? "active" : ""}`}
                onClick={() => setActiveTab("movements")}
              >
                История токенов
              </button>
            </div>
            <div className="sub-tab-content">
              {activeTab === "payments" && <p>Транзакции отсутсвуют</p>}
              {activeTab === "movements" && <p>История токенов</p>}
            </div>      
    </section>
  );
};

export default FundsMovementSection;
