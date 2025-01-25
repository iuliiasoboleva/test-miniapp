import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as InfoIcon } from "../../assets/images/exclamation.svg";
import plans from "../../data/plans";
import "./styles.css";

const SubscriptionSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPlanDetails, setShowPlanDetails] = useState(false);
  const [showPurchasePopup, setShowPurchasePopup] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const [activeTokens, setActiveTokens] = useState(
    plans.reduce((acc, plan) => {
      acc[plan.name] = plan.tokens[0];
      return acc;
    }, {})
  );
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setTooltipIndex(null); // Закрываем тултип, если клик вне контейнера
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setShowPurchasePopup(true);
  };

  const handleTabClick = (planName, token) => {
    setActiveTokens((prev) => ({ ...prev, [planName]: token }));
  };

  const handleShowPlanDetails = () => {
    setShowPlanDetails(true);
  };

  const handleClosePopup = () => {
    setShowPlanDetails(false);
    setShowPurchasePopup(false);
  };

  const toggleTooltip = (index) => {
    setTooltipIndex(tooltipIndex === index ? null : index);
  };

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">Choose Your Plan</h2>
      <div className="slider-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-slider">
            <div className="plan-header">
              <h3 className="plan-name">{plan.name}</h3>
              <div className="tooltip-container" ref={tooltipRef}>
                <InfoIcon
                  className="info-icon"
                  onClick={(event) => {
                    event.stopPropagation(); // Останавливаем всплытие
                    toggleTooltip(index);
                  }}
                />
                {tooltipIndex === index && (
                  <div
                    className="tooltip"
                    onClick={(event) => event.stopPropagation()} // Остановка всплытия внутри тултипа
                  >
                    A token is a virtual unit you can use within the app.
                  </div>
                )}
              </div>
            </div>
            <div className="token-tabs">
              {plan.tokens.map((token) => (
                <button
                  key={token}
                  className={`token-tab ${activeTokens[plan.name] === token ? "active" : ""
                    }`}
                  onClick={() => handleTabClick(plan.name, token)}
                >
                  {token} Tokens
                </button>
              ))}
              <div
                className="tab-indicator"
                style={{
                  transform: `translateX(${plan.tokens.indexOf(activeTokens[plan.name]) * 100
                    }%)`,
                }}
              ></div>
            </div>
            <ul className="plan-description">
              {plan.description.map((feature, idx) => (
                <li key={idx} className="plan-feature">
                  + {feature}
                </li>
              ))}
            </ul>
            <p className="plan-details-link" onClick={handleShowPlanDetails}>
              What’s included in the plan?
            </p>
            <div className="plan-pricing">
              <p>
                Price:{" "}
                {plan.dynamicPrices[activeTokens[plan.name]].rub} RUB /{" "}
                {plan.dynamicPrices[activeTokens[plan.name]].eur} EUR /{" "}
                {plan.dynamicPrices[activeTokens[plan.name]].usd} USD
              </p>
              <p className="plan-discount">{plan.discount}</p>
            </div>
            <button className="purchase-button" onClick={() => handlePlanClick(plan)}>
              Buy
            </button>
          </div>
        ))}
      </div>

      {/* Popup for Plan Details */}
      {showPlanDetails && (
        <div className="popup">
          <div className="popup-content">
            <h3>Plan Details</h3>
            <p>Details about the plan features will be shown here.</p>
            <button className="close-button" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Popup for Purchase Confirmation */}
      {showPurchasePopup && selectedPlan && (
        <div className="popup">
          <div className="popup-content">
            <h3>Purchase Confirmation</h3>
            <p>You are purchasing the {selectedPlan.name} plan.</p>
            <p>
              Price:{" "}
              {selectedPlan.dynamicPrices[activeTokens[selectedPlan.name]].rub} RUB /{" "}
              {selectedPlan.dynamicPrices[activeTokens[selectedPlan.name]].eur} EUR /{" "}
              {selectedPlan.dynamicPrices[activeTokens[selectedPlan.name]].usd} USD
            </p>
            <div className="pay-buttons">
              <button
                className="pay-button"
                onClick={() => window.open("https://your-payment-widget.com", "_blank")}
              >
                Proceed to Payment
              </button>
              <button className="close-button" onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SubscriptionSection;
