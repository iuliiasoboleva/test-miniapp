import React from "react";
import "./styles.css";

const FAQComponent = ({ faqData }) => {
    return (
        <section className="faq-content">
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className="question">
                        <i className={item.icon}></i> {item.question}
                    </div>
                    <div className="answer">
                        <i className="bi bi-lightbulb-fill ok"></i> {item.answer}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FAQComponent;
