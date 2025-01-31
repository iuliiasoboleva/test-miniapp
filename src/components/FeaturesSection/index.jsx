import React, { useState } from "react";
import "./styles.css";
import Notice from "../Notice";

const FeaturesSection = ({ onNavigate }) => {
  const [tokens, setTokens] = useState(0); // Начальное количество токенов
  const pricePerToken = {
    rub: 0.5,
    usd: 0.01,
    eur: 0.009,
  };

  const handleTokenChange = (e) => {
    setTokens(Number(e.target.value));
  };

  return (
    <section id="features" className="features-section">
      <h2 className="features-section-title">Выберите количество</h2>
      <div className="token-display">
        <span className="selected-tokens">{tokens}  ⚡</span>
      </div>
      <input
        type="range"
        className="token-range"
        min="0"
        max="6800"
        step="10"
        value={tokens}
        onChange={handleTokenChange}
      />
      <div className="price-info">
        <p>За 1 токен:</p>
        <p>{pricePerToken.rub} RUB / {pricePerToken.usd} USD / {pricePerToken.eur} EUR</p>
      </div>
      <Notice text={'Токены можно купить только с активной подпиской.'} />
      <button className="subscribe-button" onClick={() => onNavigate("subscription")}>
        Купить подписку
      </button>
    </section>
  );
};

export default FeaturesSection;
