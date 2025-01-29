import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.svg";
import NavBar from "../NavBar";
import "./styles.css";

const Header = ({ onNavClick }) => {
    const { t, i18n } = useTranslation();

    const [tokens, setTokens] = useState(0.9);
    const [tariff, setTariff] = useState("Free");

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await new Promise((resolve) =>
                setTimeout(() => resolve({ tokens: 0.9, tariff: "Free" }), 500)
            );
            setTokens(response.tokens);
            setTariff(response.tariff);
        };
        fetchUserData();
    }, []);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                <a>
                    <img src={logo} alt="Logo" width="75px" height="85px" />
                </a>
                <div className="tokens-info">
                    {tokens.toFixed(2)} <i className="bi bi-lightning-charge-fill lightning"></i>
                </div>
                <div className="subscription-info">💼 {tariff}</div>
                <div className="language-switcher">
                    <button className="language-button" onClick={() => changeLanguage("en")}>
                        <img src="https://flagcdn.com/w40/us.png" alt="English Flag" className="flag-icon" />
                        English
                    </button>
                    <button className="language-button" onClick={() => changeLanguage("ru")}>
                        <img src="https://flagcdn.com/w40/ru.png" alt="Russian Flag" className="flag-icon" />
                        Русский
                    </button>
                </div>

            </div>
            <NavBar onNavClick={onNavClick} />
        </div>
    );
};

export default Header;
