import React, { useContext, useEffect } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import SettingsItem from "../../components/SettingsItem";
import LoraPreview from "../../components/LoraPreview";
import "./styles.css"; // Подключаем стили

const defaultSettings = {
    model: "fluxopt",
    batch: "1",
    seed: "0",
    randomSeed: false,
    size: "1152x896",
    cfg: "3.5",
    steps: "25",
    lora: "",
};

const FluxSettings = () => {
    const { settings, updateSetting } = useContext(SettingsContext);

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.expand();
        }
    }, []);

    const handleSaveAndReturn = () => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.close();
        }
    };

    const handleResetSettings = () => {
        Object.keys(defaultSettings).forEach((key) => {
            updateSetting(key, defaultSettings[key]);
        });
    };

    return (
        <div className="settings-container">
            <h2 className="settings-title">Настройки <span>Flux.1 +OPT</span></h2>
            <div className="model-title">
                <SettingsItem
                    label="Модель"
                    name="model"
                    type="select"
                    options={[
                        { value: "fluxopt", label: "Flux.1 +OPT" },
                        { value: "fluxpro", label: "Flux.1 PRO" },
                        { value: "fluxpro11", label: "Flux.1.1 PRO" }
                    ]}
                />
            </div>
            <div className="settings-form">
                <SettingsItem
                    label="Кол-во генераций"
                    name="batch"
                    type="select"
                    options={[
                        { value: "1", label: "1 (⚡0.30)" },
                        { value: "2", label: "2 (⚡0.60)" },
                        { value: "3", label: "3 (⚡0.90)" }
                    ]}
                />

                {/* Seed (счётчик + бегунок) */}
                <SettingsItem
                    label="Seed"
                    name="seed"
                    type="number"
                    min="0"
                    max="2147483647"
                    showRange={true}
                />

                <label className="checkbox-label">
                    <input type="checkbox" checked={settings.randomSeed} onChange={() => updateSetting("randomSeed", !settings.randomSeed)} />
                    Случайный Seed
                </label>

                {/* Соотношение сторон (селект + бегунок + визуализация) */}
                <SettingsItem
                    label="Соотношение сторон"
                    name="size"
                    options={[
                        { value: "1344x768", label: "(16:9) 1344x768" },
                        { value: "1152x896", label: "(4:3) 1152x896" },
                        { value: "1216x832", label: "(3:2) 1216x832" },
                        { value: "1280x1024", label: "(5:4) 1280x1024" },
                        { value: "1024x1024", label: "(1:1) 1024x1024" },
                        { value: "1024x1280", label: "(4:5) 1024x1280" },
                        { value: "896x1152", label: "(3:4) 896x1152" },
                        { value: "832x1216", label: "(2:3) 832x1216" },
                        { value: "768x1344", label: "(9:16) 768x1344" },
                    ]}
                    showRange={true}
                    showPreview={true}
                />

                {/* Креативность (счётчик + бегунок) */}
                <SettingsItem
                    label="Креативность (Cfg Scale)"
                    name="cfg"
                    type="number"
                    min="1"
                    max="4"
                    step="0.1"
                    showRange={true}
                />

                {/* Шаги (счётчик + бегунок) */}
                <SettingsItem
                    label="Шаги (Decoder Inference Steps)"
                    name="steps"
                    type="number"
                    min="10"
                    max="28"
                    step="1"
                    showRange={true}
                />

                {/* Выбор LoRA (селект) */}
                <SettingsItem
                    label="Выбор LoRA"
                    name="lora"
                    type="select"
                    options={[
                        { value: "", label: "Без LoRA" },
                        { value: "Neon_Cyberpunk", label: "Neon Cyberpunk Splash Art" },
                        { value: "DreamyFloating", label: "Dreamy Floating" },
                        { value: "Japanesestyle", label: "Японский стиль" },
                        { value: "Midjourney", label: "Midjourney" },
                        { value: "X-labs Anime", label: "X-labs Anime" },
                        { value: "NSFW Unlock", label: "NSFW Unlock 18+" }
                    ]}
                />

                <LoraPreview />
            </div>
            <div className="settings-buttons">
                <button onClick={handleSaveAndReturn}>Сохранить</button>
                <button className="reset-btn" onClick={handleResetSettings}>Сбросить параметры</button>
            </div>
        </div>
    );
};

export default FluxSettings;
