import React from "react";
import { mockPlanDetails } from "../../data/mockPlanDetails";
import "./styles.css";

const PlanDetailsPopup = ({ plan, onClose }) => {
  return (
    <div className="popup-details">
      <div className="popup-details-content">
      <div className="close-button" onClick={onClose}><i className="bi bi-x-lg"></i></div>
      <h3>What's included in {plan.name}?</h3>
        <ul className="plan-details-list">
          {mockPlanDetails.map((item, index) => (
            <li key={index} className="plan-detail-item">
              <span>
                {item.icon && <i className={`${item.icon}`} style={{ color: item.color || "inherit" }}></i>}
                {item.title}
              </span>
              <span>
                {typeof item.value === "boolean" ? (
                  item.value ? <i className="bi bi-check2 purple"></i> : <i className="bi bi-x-lg"></i>
                ) : (
                  <>
                    {item.value} {item.highlight && <i className="bi bi-check2 purple"></i>}
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanDetailsPopup;
