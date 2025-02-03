import React, { useState } from "react";
import HomeSection from "../../components/HomeSection";
import SubscriptionSection from "../../components/SubscriptionSection";
import FeaturesSection from "../../components/FeaturesSection";
import PartnerSection from "../../components/PartnerSection";
import SettingsSection from "../../components/SettingsSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TabsComponent from "../../components/TabsComponent";
import FAQComponent from "../../components/FAQComponent";
import { faqData } from "../../data/faqData";
import './styles.css'

const MainProfile = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (page) => {
    setActiveSection(page);
  };

  const handleNavClick = (section) => {
    console.log("section", section);
    setActiveSection(section);
  };

  const tabData = {
    "История платежей": 'Транзакции отсутствуют.',
    "История токенов": 'Движение токенов не зафиксировано.'
  };

  return (
    <div>
      <Header onNavClick={handleNavClick} />
      <main>
        {activeSection === "home" && <HomeSection />}
        {activeSection === "subscription" && <SubscriptionSection />}
        {activeSection === "features" && <FeaturesSection onNavigate={handleNavigate} />}
        {activeSection === "partner" && <PartnerSection />}
        {activeSection === "settings" && <SettingsSection />}
        {activeSection === "funds" && <div className='funds-tabs'><TabsComponent tabs={tabData} /></div>}
        {activeSection === "faq" && <div className='funds-tabs'><FAQComponent faqData={faqData} /></div>}
      </main>
      <Footer onNavClick={handleNavClick} />
    </div>
  );
};

export default MainProfile;
