import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/images/user.svg";
import { ReactComponent as AboutIcon } from "../../assets/images/play-alt.svg";
import { ReactComponent as ContactIcon } from "../../assets/images/users-alt.svg";
import "./styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-menu-item">
                <HomeIcon className="footer-menu-icon" />
                <span className="footer-menu-text">Home</span>
            </div>
            <div className="footer-menu-item">
                <AboutIcon className="footer-menu-icon" />
                <span className="footer-menu-text">About</span>
            </div>
            <div className="footer-menu-item">
                <ContactIcon className="footer-menu-icon" />
                <span className="footer-menu-text">Contact</span>
            </div>
        </footer>
    );
};

export default Footer;
