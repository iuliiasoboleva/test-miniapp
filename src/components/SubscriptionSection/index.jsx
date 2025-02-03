import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as InfoIcon } from "../../assets/images/exclamation.svg";
import plans from "../../data/plans";
import PlanDetailsPopup from "../PlanDetailsPopup";
import PaymentPopup from "../PaymentPopup";
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
  const [activeSlide, setActiveSlide] = useState(0);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setTooltipIndex(null);
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

  const handleShowPlanDetails = (plan) => {
    setSelectedPlan(plan);
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
    <>
      <section id="about" className="about-section">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="slider-container">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-slider ${activeSlide === index ? "active" : ""}`}
              onMouseEnter={() => setActiveSlide(index)}
            >
              <div className="price-slider">
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="tooltip-container" ref={tooltipRef}>
                    <InfoIcon
                      className="info-icon"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleTooltip(index);
                      }}
                    />
                    {tooltipIndex === index && (
                      <div
                        className="tooltip"
                        onClick={(event) => event.stopPropagation()}
                      >
                        A token is a virtual unit you can use within the app.
                      </div>
                    )}
                  </div>
                </div>
                <div className="token-switcher">
                  <div className="token-slider" style={{ transform: `translateX(${plan.tokens.indexOf(activeTokens[plan.name]) * 100}%)` }}></div>
                  <div className="token-text">
                    {plan.tokens.map((token, idx) => (
                      <span key={idx} className={activeTokens[plan.name] === token ? "active" : ""} onClick={() => handleTabClick(plan.name, token)}>
                        {token} токенов
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="plan-description">
                  {plan.description.map((feature, idx) => (
                    <li key={idx} className="plan-feature">+ {feature}</li>
                  ))}
                </ul>
                <p className="plan-details-link" onClick={() => handleShowPlanDetails(plan)}>
                  What's included in the plan?
                </p>
                <div className="plan-pricing">
                  <p>
                    Price: {" "}
                    {plan.dynamicPrices[activeTokens[plan.name]].rub} RUB / {" "}
                    {plan.dynamicPrices[activeTokens[plan.name]].eur} EUR / {" "}
                    {plan.dynamicPrices[activeTokens[plan.name]].usd} USD
                  </p>
                  <p className="plan-discount">{plan.discount}</p>
                </div>
                <button className="purchase-button" onClick={() => handlePlanClick(plan)}>
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showPlanDetails && selectedPlan && (
        <PlanDetailsPopup plan={selectedPlan} onClose={handleClosePopup} />
      )}
      {showPurchasePopup && selectedPlan && (
        <PaymentPopup plan={selectedPlan} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default SubscriptionSection;
