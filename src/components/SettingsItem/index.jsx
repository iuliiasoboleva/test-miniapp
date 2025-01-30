import React, { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import AspectRatioPreview from "../AspectRatioPreview"; // Визуализация прямоугольников

const SettingsItem = ({ label, name, type = "text", options, min, max, step, showRange, showPreview }) => {
  const { settings, updateSetting } = useContext(SettingsContext);

  // Если в settings[name] ничего нет, берём первое значение из options
  const initialValue = settings[name] ?? (options ? options[0].value : min || 0);
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
      <label>{label}</label>

      {/* Селект */}
      {options && (
        <select value={selectedValue} onChange={(e) => handleChange(e.target.value)}>
          {options.map((opt, index) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      )}

      {/* Числовой ввод (счётчик) */}
      {type === "number" && (
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={selectedValue}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}

      {/* Бегунок (если указан showRange) */}
      {showRange && options ? (
        <input
          type="range"
          min="0"
          max={options.length - 1}
          step="1"
          value={options.findIndex(opt => opt.value === selectedValue)}
          onChange={handleSliderChange}
        />
      ) : showRange && (
        <input
          type="range"
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
