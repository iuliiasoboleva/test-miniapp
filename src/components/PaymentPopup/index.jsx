import React from "react";
import "./styles.css";

const PaymentPopup = ({ plan, onClose }) => {
  return (
    <div className="payment-popup">
      <div className="payment-popup-content">
        <div className="close-button" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </div>
        <h3>Оплата тарифа {plan.name}</h3>
        <div className="form-group">
          <div className="select-wrapper">
            <label htmlFor="payment_method">Метод оплаты</label>
            <select id="payment_method" name="payment_method" className="select-input">
              <option value="payselection" selected>🇷🇺 МИР Карты/СБП</option>
              <option value="overpay">🇷🇺 Все карты РФ</option>
              <option value="overpaySBP">🇷🇺 CБП</option>
              <option value="cryptomus">₿ Крипта -20%</option>
              <option value="eupay">🇪🇺 Европа 💳</option>
              <option value="kazpay">🇰🇿 Казахстан 💳</option>
              <option value="payportuzs">🇺🇿 Uzbekistan</option>
              <option value="ukrpay">🇺🇦 Украина 💳</option>
              <option value="allcountries">🌍 Все страны 💳</option>
              <option value="tgstars">⭐️ Telegram stars</option>
            </select>
            <i class="bi bi-chevron-double-down"></i>
          </div>
        </div>
        <div className="form-group">
          <div className="select-wrapper">
            <label htmlFor="subscription_length">Срок подписки</label>
            <select id="subscription_length" name="subscription_length" className="select-input">
              <option value="1" selected>1 месяц</option>
              <option value="3">3 месяца -5%</option>
              <option value="6">6 месяцев -10%</option>
              <option value="12">12 месяцев -15%</option>
            </select>
            <i class="bi bi-chevron-double-down"></i>
          </div>
        </div>
        <div className="defRow">
          <div className="leftCell">Получатель:</div>
          <div className="rightCell">Юлия</div>
        </div>
        <div className="defRow">
          <div className="leftCell">Токены:</div>
          <div className="rightCell">680<i className="bi bi-lightning-charge-fill"></i></div>
        </div>
        <div className="defRow">
          <div className="leftCell">Итоговая скидка:</div>
          <div className="rightCell">0%</div>
        </div>
        <div className="defRow">
          <div className="leftCell">Итоговая цена:</div>
          <div className="rightCell">{plan.price.rub} RUB / {plan.price.eur} EUR / {plan.price.usd} USD</div>
        </div>
        <button className="payment-button">ПЕРЕЙТИ К ОПЛАТЕ</button>
      </div>
    </div>
  );
};

export default PaymentPopup;
