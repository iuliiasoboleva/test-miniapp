import React, { useState, useRef } from "react";
import "./styles.css";

const Header = () => (
  <header>
    <nav>
      <ul style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <li>
          <a href="https://fluxtrain.syntxai.net?user_id=255850941&hash=hash_value">
            <i className="bi bi-node-plus-fill"></i> Обучить LoRa
          </a>
        </li>
        <li>
          <a href="https://fluxtrain.syntxai.net?page=myloras&user_id=255850941&hash=hash_value">
            <i className="bi bi-list-ul"></i> Мои LoRa
          </a>
        </li>
        <li>
          <a href="https://fluxtrain.syntxai.net?page=archive&user_id=255850941&hash=hash_value">
            <i className="bi bi-archive-fill"></i> Архив LoRa
          </a>
        </li>
        <li>
          <a href="https://docs.syntx.ai">
            <i className="bi bi-question"></i> База знаний
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

const StepsSection = ({ steps, setSteps }) => (
  <section className="box margin black">
    <label>Шаги (Steps)</label>
    <input
      type="number"
      value={steps}
      min="500"
      max="4000"
      step="1"
      onChange={(e) => setSteps(Number(e.target.value))}
    />
  </section>
);

const PriceSection = ({ steps }) => {
  const price = (steps * 0.12).toFixed(2);
  return (
    <section className="box margin black">
      <label>Стоимость обучения:</label>
      <span>⚡ {price}</span>
    </section>
  );
};

const ImageUploader = ({ images, setImages }) => {
  const fileInputRef = useRef(null);

  const handleFiles = async (files) => {
    const newFiles = Array.from(files).slice(0, 50 - images.length);
    for (const file of newFiles) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prev) => [...prev, { src: reader.result, file }]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="box margin black">
      <div className="image-upload-container">
        <i className="bi bi-cloud-upload" style={{ fontSize: "2em" }}></i>
        <p>Перетащите изображения или</p>
        <input
          type="file"
          ref={fileInputRef}
          multiple
          accept=".jpg,.jpeg,.png,.webp"
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
        <button onClick={() => fileInputRef.current.click()} className="image-upload-button">
          <i className="bi bi-image"></i> Выбрать файлы
        </button>
      </div>
      <div className="image-preview-grid">
        {images.map((img, idx) => (
          <div key={idx} className="image-preview-container">
            <img src={img.src} className="image-preview" alt="Preview" />
            <button
              className="remove-image"
              onClick={() => setImages(images.filter((_, i) => i !== idx))}
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const SubmitButton = ({ steps, images }) => {
  const isDisabled = images.length < 5 || steps < 500;

  return (
    <button
      className="submit-button"
      disabled={isDisabled}
      onClick={() => alert("Отправка формы...")}
    >
      Начать обучение ({images.length})
    </button>
  );
};

const FluxTrain = () => {
  const [steps, setSteps] = useState(1000);
  const [images, setImages] = useState([]);

  return (
    <div>
      <Header />
      <div className="settingsTitle">Создать <span>Lora @ Flux</span></div>
      <ImageUploader images={images} setImages={setImages} />
      <StepsSection steps={steps} setSteps={setSteps} />
      <PriceSection steps={steps} />
      <SubmitButton steps={steps} images={images} />
    </div>
  );
};

export default FluxTrain;
