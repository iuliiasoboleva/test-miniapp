import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    // Инициализация мини-приложения
    tg.ready();

    // Настройка кнопки
    tg.MainButton.setText("Продолжить");
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      tg.sendData("Button clicked!");
    });

    // Очистка событий
    return () => {
      tg.MainButton.offClick();
    };
  }, []);

  const handleNavClick = (section) => {
    console.log('section', section)
    setActiveSection(section);
  };

  return (
    <div className="app">
      <NavBar onNavClick={handleNavClick} />
      <main>
        {activeSection === "home" && <HomeSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "features" && <FeaturesSection />}
        {activeSection === "contact" && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
