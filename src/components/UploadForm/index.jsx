import React, { useRef, useState } from "react";
import "./styles.css";

const UploadForm = ({ onImagesUpload }) => {
    const [error, setError] = useState("");
    const fileInputRef = useRef(null); // Реф для сброса input

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const allowedTypes = ["image/png", "image/jpeg", "image/webp"];

        if (files.length > 5) {
            setError("Можно загрузить не более 5 изображений.");
            return;
        }

        const validFiles = files.filter((file) => {
            if (!allowedTypes.includes(file.type)) {
                setError("Допустимые форматы: PNG, JPG, WEBP.");
                return false;
            }
            return true;
        });

        onImagesUpload(validFiles);
        setError("");

        // Сбрасываем значение input после выбора файлов
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="upload-container">
            <i className="bi bi-cloud-upload"></i>

            {/* Скрытый input */}
            <input
                type="file"
                ref={fileInputRef}
                className="file-input"
                multiple
                accept=".jpg,.jpeg,.png,.webp"
                onChange={handleFileChange}
                style={{ display: "none" }} // Скрываем input
            />

            <p>Перетащите изображения в этот блок или</p>

            {/* Привязываем label к input */}
            <button type="button" className="upload-button" onClick={triggerFileInput}>
                <i className="bi bi-image"></i> Выберите файлы
            </button>

            <p className="upload-info">* PNG, JPG, WEBP • Max 5MB каждый • До 5 изображений</p>

            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default UploadForm;
