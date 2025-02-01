import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainProfile from "./pages/MainProfile";
import GPTProfile from "./pages/GPTProfile";
import FluxSettings from "./pages/FluxSettings";
import FluxTrain from "./pages/FluxTrain";
import useTelegramTheme from "./hooks/useTelegramTheme";
import { SettingsProvider } from "./context/SettingsContext";

const App = () => {
  useTelegramTheme();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainProfile />} />
        <Route path="/gpt-profile" element={<GPTProfile />} />
        <Route path="/flux-settings" element={
          <SettingsProvider>
            <FluxSettings />
          </SettingsProvider>
        } />
        <Route path="/flux-train" element={
          <SettingsProvider>
            <FluxTrain />
          </SettingsProvider>
        } />
      </Routes>
    </Router>
  );
};

export default App;
