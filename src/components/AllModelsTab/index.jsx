import React, { useState, useEffect } from "react";
import { models, features } from "../../data/gptModels";
import "./styles.css";

const AllModelsTab = () => {
    const [selectedModel, setSelectedModel] = useState("7"); // GPT-4o по умолчанию
    const [modelFeatures, setModelFeatures] = useState(features[selectedModel] || null);

    useEffect(() => {
        setModelFeatures(features[selectedModel] || null);
    }, [selectedModel]);

    return (
        <>
            <div className="all-models-container">
                <div className="all-models-statistics">
                    <div className="all-models-stat-item">
                        <div>
                            <i className="bi bi-star-fill"></i>
                            <span class="all-models-stat-text">Тарифный план</span>
                        </div>
                        <span class="all-models-stat-number"> 💼  FREE</span>
                    </div>
                    <div className="all-models-stat-item">
                        <div>
                            <i className="bi bi-person-workspace"></i>
                            <span class="all-models-stat-text">Доступно пробных запросов:</span>
                        </div>
                        <span class="all-models-stat-number">1  ✏️</span>
                    </div>
                </div>

                <div className="all-models-statistics">
                    <div className="all-models-statistics-select">
                        <label htmlFor="model">Выберите модель:</label>
                        <div class="select-wrapper">

                            <select
                                id="model"
                                className="select-input"
                                value={selectedModel}
                                onChange={(e) => setSelectedModel(e.target.value)}
                            >
                                {models.map((model) => (
                                    <option key={model.id} value={model.id} disabled={model.disabled}>
                                        {model.name}
                                    </option>
                                ))}
                            </select>
                            <i class="bi bi-chevron-down select-arrow"></i>
                        </div>
                    </div>
                    {modelFeatures ? (
                        <>
                            <p>{modelFeatures.description}</p>
                            <b>Дополнительные возможности:</b>
                            <ul>
                                {modelFeatures.capabilities.map((feature, index) => (
                                    <li key={index} className={feature.available ? "ok" : "err"}>
                                        <i className={`bi ${feature.available ? "bi-check2" : "bi-x-lg"}`}></i>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p>Выберите модель, чтобы увидеть её возможности.</p>
                    )}
                </div>
            </div>
            <button className="submit-button" onClick={() => window.Telegram.WebApp.close()}>
                Закрыть окно
            </button>
        </>
    );
};

export default AllModelsTab;
