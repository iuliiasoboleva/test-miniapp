// src/components/AspectRatioPreview.js
import React from "react";
import "./styles.css";

const aspectRatios = {
  "1344x768": 1344 / 768, // 16:9
  "1152x896": 1152 / 896, // 4:3
  "1216x832": 1216 / 832, // 3:2
  "1280x1024": 1280 / 1024, // 5:4
  "1024x1024": 1, // 1:1
  "1024x1280": 1024 / 1280, // 4:5
  "896x1152": 896 / 1152, // 3:4
  "832x1216": 832 / 1216, // 2:3
  "768x1344": 768 / 1344, // 9:16
};

const AspectRatioPreview = ({ selectedSize }) => {
  const ratio = aspectRatios[selectedSize] || 1; // Значение по умолчанию (квадрат)

  return (
    <div className="aspect-ratio-preview">
      <div className="preview-container">
        {/* Горизонтальный прямоугольник */}
        <div className="preview-frame" style={{ aspectRatio: ratio }}></div>

        {/* Вертикальный пунктирный прямоугольник */}
        <div className="preview-frame-inverse" style={{ aspectRatio: 1 / ratio }}></div>
      </div>
    </div>
  );
};

export default AspectRatioPreview;
