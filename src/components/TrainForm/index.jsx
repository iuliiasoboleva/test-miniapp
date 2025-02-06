import React, { useState } from "react";
import UploadForm from "../../components/UploadForm";
import SettingsItem from "../../components/SettingsItem";
import Notice from "../../components/Notice";
import "./styles.css";

const MAX_IMAGES = 50; // Лимит изображений

const FluxForm = () => {
    const [checked, setChecked] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleImagesUpload = (images) => {
        if (images.length > MAX_IMAGES) {
            alert(`Вы можете загрузить максимум ${MAX_IMAGES} изображений.`);
            return;
        }
        setUploadedImages(images);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);
    };

    return (
        <div className="train-main-container">
            <h2>Создать <span>Lora @ Flux</span></h2>
            <Notice text={'Загружайте до 50 изображений и создавайте свои собственные лоры. Подходит для создания собственной нейрофотосессии или уникальных стилей.'} />

            <div className="model-title">
                <SettingsItem label="Название" name="customText" type="textInput" />
            </div>

            <div className="model-title">
                <SettingsItem
                    label="Назначение"
                    name="model"
                    type="select"
                    options={[
                        { value: "fluxopt", label: "Для персонажа" },
                        { value: "fluxpro", label: "Для стиля" },
                        { value: "fluxpro11", label: "Для объекта" }
                    ]}
                />
            </div>

            <div className="model-title">
                <label className="flux-train-checkbox-label">
                    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                    Установить шаги обучения самостоятельно (только для профессионалов)
                </label>
                {checked && (
                    <SettingsItem
                        label="Шаги"
                        name="steps"
                        type="number"
                        min="0"
                        max="4000"
                        step="1"
                        showRange={true}
                    />
                )}
            </div>

            <div className="model-title text-train">
                <p className="subtext-train">Стоимость обучения <span>*1 шаг = ⚡ 0.12</span></p>
                <p>⚡ 60.00</p>
            </div>

            {/* Форма загрузки изображений */}
            <UploadForm onImagesUpload={handleImagesUpload} />

            {/* Превью загруженных файлов */}
            {uploadedImages.length > 0 && (
                <div className="image-preview-wrapper">
                    <h3>Загруженные изображения ({uploadedImages.length}/{MAX_IMAGES}):</h3>
                    <div className="image-preview-grid">
                        {uploadedImages.map((image, index) => (
                            <div key={index} className="image-preview-container">
                                <img src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} className="image-preview" />
                                <button className="remove-image" onClick={() => handleRemoveImage(index)}>
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Кнопка "Начать обучение" */}
            {uploadedImages.length === MAX_IMAGES && (
                <button className="submit-button">Начать обучение</button>
            )}
        </div>
    );
};

export default FluxForm;
