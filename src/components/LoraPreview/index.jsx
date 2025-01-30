import React, { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import Loader from "../Loader";

const LoraPreview = () => {
  const { settings } = useContext(SettingsContext);
  
  if (!settings.lora) return null;

  return (
    <div className="lora-preview">
      {settings.loading ? (
        <Loader />
      ) : (
        <>
          <img src={`https://syntxai.net/images/loras/${settings.lora}.jpg`} alt="LoRA Preview" />
          <p>Описание LoRA: {settings.lora}</p>
        </>
      )}
    </div>
  );
};

export default LoraPreview;
