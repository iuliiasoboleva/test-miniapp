import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    model: "fluxopt",
    batch: 1,
    seed: 1006128965,
    randomSeed: false,
    size: "1152x896",
    cfg: 3.5,
    steps: 25,
    lora: "",
    loraStrength: 0.0,
    externalLoraUrl: "",
    loading: false,
  });

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};
