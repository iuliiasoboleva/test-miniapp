import React from "react";
import "./styles.css";

const FluxTrainHeader = () => {
    return (
        <header className="flux-train-header">
            <div className="flux-train-rightBlock">
                <nav className="flux-train-top-nav">
                    <ul>
                        <li>
                            <a
                            // className={activeTab === "balance" ? "active" : ""}
                            //   onClick={() => handleTabClick("balance")}
                            >
                                <i className="bi bi-node-plus-fill"></i>Обучить LoRa
                            </a>
                        </li>
                        <li>
                            <a
                            // className={activeTab === "referrals" ? "active" : ""}
                            // onClick={() => handleTabClick("referrals")}
                            >
                                <i className="bi bi-list-ul"></i>Мои LoRa
                            </a>
                        </li>
                        <li>
                            <a
                            // className={activeTab === "documentation" ? "active" : ""}
                            // onClick={() => handleTabClick("documentation")}
                            >
                                <i className="bi bi-archive-fill"></i>Архив LoRa
                            </a>
                        </li>
                        <li>
                            <a
                            // className={activeTab === "documentation" ? "active" : ""}
                            // onClick={() => handleTabClick("documentation")}
                            >
                                <i className="bi bi-question"></i>База знаний
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default FluxTrainHeader;
