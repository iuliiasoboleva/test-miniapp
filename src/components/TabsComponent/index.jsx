import React, { useState } from "react";
import "./styles.css";

const TabsComponent = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

    return (
        <section className="tabs-component">
            <div className="time-filters">
                {Object.keys(tabs).map((tabKey) => (
                    <a 
                        key={tabKey} 
                        onClick={() => setActiveTab(tabKey)} 
                        className={activeTab === tabKey ? "active" : ""}
                    >
                        {tabKey}
                    </a>
                ))}
            </div>
            <div className="statistics">
                <div className="content-block">
                        <div>
                            {tabs[activeTab]}
                        </div>
                </div>
            </div>
        </section>
    );
};

export default TabsComponent;
