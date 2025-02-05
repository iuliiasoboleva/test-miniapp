import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const languages = [
    { code: "en", label: "🇺🇸 English" },
    { code: "ru", label: "🇷🇺 Русский" },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const changeLanguage = (lang) => {
        setSelectedLanguage(lang);
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <div className="language-select" onClick={() => setIsOpen(!isOpen)}>
                {languages.find((l) => l.code === selectedLanguage)?.label}
                <span className="arrow"></span>
            </div>
            {isOpen && (
                <ul className="language-dropdown">
                    {languages.map((lang) => (
                        <li
                            key={lang.code}
                            className={`language-option ${selectedLanguage === lang.code ? "active" : ""}`}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            {lang.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSwitcher;
