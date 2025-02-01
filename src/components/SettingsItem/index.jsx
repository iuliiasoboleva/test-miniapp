import React, { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import AspectRatioPreview from "../AspectRatioPreview"; // Визуализация прямоугольников
import './styles.css';

const SettingsItem = ({ label, name, type = "text", options, min, max, step, showRange, showPreview }) => {
  const { settings, updateSetting } = useContext(SettingsContext);

  // Если в settings[name] ничего нет, берём первое значение из options
  const initialValue = settings[name] ?? (options ? options[0].value : min || "");
  const [selectedValue, setSelectedValue] = useState(initialValue);

  useEffect(() => {
    setSelectedValue(settings[name] ?? initialValue);
  }, [settings[name]]);

  const handleChange = (value) => {
    setSelectedValue(value);
    updateSetting(name, value);
  };

  const handleSliderChange = (event) => {
    const index = Number(event.target.value);
    const selectedOption = options[index];
    if (selectedOption) {
      setSelectedValue(selectedOption.value);
      updateSetting(name, selectedOption.value);
    }
  };

  return (
    <div className="settings-item">
      <div className="settings-select-item">
        <label>{label}</label>

        {/* Селект */}
        {options && type !== "textInput" && (
          <div className="select-wrapper">
            <select value={selectedValue} onChange={(e) => handleChange(e.target.value)}>
              {options.map((opt, index) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <i className="bi bi-chevron-down select-arrow"></i>
          </div>
        )}

        {/* Числовой ввод (счётчик) */}
        {type === "number" && (
          <input
            type="number"
            className="input-number"
            min={min}
            max={max}
            step={step}
            value={selectedValue}
            onChange={(e) => handleChange(e.target.value)}
          />
        )}

        {/* Текстовый ввод с теми же стилями, что и select */}
        {type === "textInput" && (
            <input
              type="text"
              className="styled-input"
              value={selectedValue}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Введите текст..."
            />
        )}
      </div>

      {/* Бегунок (если указан showRange) */}
      {showRange && options ? (
        <input
          type="range"
          min="0"
          className="token-range"
          max={options.length - 1}
          step="1"
          value={options.findIndex(opt => opt.value === selectedValue)}
          onChange={handleSliderChange}
        />
      ) : showRange && (
        <input
          type="range"
          className="token-range"
          min={min}
          max={max}
          step={step}
          value={selectedValue}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}

      {/* Визуализация соотношения сторон */}
      {showPreview && <AspectRatioPreview selectedSize={selectedValue} />}
    </div>
  );
};

export default SettingsItem;
