import React, { useEffect, useState } from "react";
import "./styles.css";

const LoRATrainingDashboard = () => {
    const [loras, setLoras] = useState([
        {
            id: 8232,
            name: "Sergey",
            downloadLink: "https://cdn.syntx.ai/loras/BFQ82ypMOdhwNTyHh92sk_pytorch_lora_weights.safetensors",
        },
    ]);

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.expand();
            window.Telegram.WebApp.onEvent("viewportChanged", () => {
                if (window.Telegram.WebApp.isExpanded) {
                    window.Telegram.WebApp.disableClosingConfirmation();
                }
            });
        }
    }, []);

    const handleArchive = (id) => {
        if (window.confirm("Отправить LoRA в архив?")) {
            setLoras((prev) => prev.filter((lora) => lora.id !== id));
        }
    };

    return (
        <div className="lora-dashboard">
            <div className="lora-title">Архив <span>LoRA</span></div>
            <section className="lora-list">
                <div className="lora-grid">
                    {loras.length > 0 ? (
                        loras.map((lora) => (
                            <div key={lora.id} className="lora-card">
                                <h3>{lora.name}</h3>
                                <div className="lora-actions">
                                    <a href={lora.downloadLink} target="_blank" className="lora-button">
                                        <i className="bi bi-download"></i> Скачать
                                    </a>
                                    <button className="lora-archive-button" onClick={() => handleArchive(lora.id)}>
                                        <i className="bi bi-archive"></i> В архив
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-loras">Нет доступных LoRA-моделей.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default LoRATrainingDashboard;
