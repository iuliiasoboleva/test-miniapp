import React, { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

const LoraPreview = () => {
  const { settings } = useContext(SettingsContext);

  if (!settings.lora) return null;

  return (
    <div className="lora-preview">
      <img src={`https://syntxai.net/images/loras/${settings.lora}.jpg`} alt="LoRA Preview" />
      <p>Описание LoRA: {settings.lora}</p>
    </div>
  );
};

export default LoraPreview;
