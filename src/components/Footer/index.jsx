import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/images/user.svg";
import { ReactComponent as AboutIcon } from "../../assets/images/play-alt.svg";
import { ReactComponent as ContactIcon } from "../../assets/images/users-alt.svg";
import "./styles.css";

const Footer = ({ onNavClick }) => {
    return (
        <footer className="footer">
            <div className="footer-menu-item" onClick={() => onNavClick("home")}>
                <HomeIcon className="footer-menu-icon" />
                <span className="footer-menu-text">Аккаунт</span>
            </div>
            <div className="footer-menu-item" onClick={() => onNavClick("contact")}>
                <AboutIcon className="footer-menu-icon" />
                <span className="footer-menu-text">Партнерство</span>
            </div>
            <div className="footer-menu-item" onClick={() => onNavClick("features")}>
                <ContactIcon className="footer-menu-icon" />
                <span className="footer-menu-text">Сообщество</span>
            </div>
        </footer>
    );
};

export default Footer;
