import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import FeaturesSection from "../../components/FeaturesSection";
import ContactSection from "../../components/ContactSection";
import SettingsSection from "../../components/SettingsSection";
import FundsMovementSection from "../../components/FundsMovementSection";
import Footer from "../../components/Footer";

const MainProfile = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (page) => {
    setActiveSection(page);
  };

  const handleNavClick = (section) => {
    console.log("section", section);
    setActiveSection(section);
  };

  return (
    <div>
      <NavBar onNavClick={handleNavClick} />
      <main>
        {activeSection === "home" && <HomeSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "features" && <FeaturesSection onNavigate={handleNavigate} />}
        {activeSection === "contact" && <ContactSection />}
        {activeSection === "settings" && <SettingsSection />}
        {activeSection === "funds" && <FundsMovementSection />}
      </main>
      <Footer onNavClick={handleNavClick} />
    </div>
  );
};

export default MainProfile;
