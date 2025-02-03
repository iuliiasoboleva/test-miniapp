import React, { useState } from "react";
import "./styles.css";

const SettingsHeader = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");

    return (
        <div className="flux-train-container">
            <header className="flux-train-header">
                <div className="flux-train-rightBlock">
                    <nav className="flux-train-top-nav">
                        <ul>
                            {tabs.map((tab) => (
                                <li key={tab.key}>
                                    <a
                                        className={activeTab === tab.key ? "active" : ""}
                                        onClick={() => setActiveTab(tab.key)}
                                    >
                                        <i className={tab.icon}></i> {tab.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="flux-train-content">
                {tabs.map((tab) =>
                    activeTab === tab.key ? (
                        <>
                            {tab.content}
                        </>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default SettingsHeader;
