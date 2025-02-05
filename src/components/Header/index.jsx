import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import NavBar from "../NavBar";
import LanguageSwitcher from "../LanguageSwitcher";
import "./styles.css";

const Header = ({ onNavClick }) => {
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

    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo-info">
                    <a>
                        <img src={logo} alt="Logo" width="75px" height="85px" />
                    </a>
                    <div className="tokens-info">
                        {tokens.toFixed(2)} <i className="fas fa-bolt lightning"></i>
                    </div>
                    <div className="subscription-info">
                        <i className="fas fa-briefcase"></i> {tariff}
                    </div>
                </div>
                <LanguageSwitcher/>
            </div>
            <NavBar onNavClick={onNavClick} />
        </div>
    );
};

export default Header;
