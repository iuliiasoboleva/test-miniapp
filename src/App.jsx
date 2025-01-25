import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainProfile from "./pages/MainProfile";
import GPTProfile from "./pages/GPTProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainProfile />} />
        <Route path="/gpt-profile" element={<GPTProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
