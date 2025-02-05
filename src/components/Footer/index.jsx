import React from "react";
import "./styles.css";

const Footer = ({ onNavClick }) => {
  return (
    <footer className="footer">
      <nav className="footer-menu">
        <ul>
          <li onClick={() => onNavClick("home")}>
            <a href="#">
              <i className="fas fa-microchip"></i>  {/* Аккаунт */}
              {/* Аккаунт */}
            </a>
          </li>
          <li onClick={() => onNavClick("partner")}>
            <a href="#">
            <i className="fas fa-laptop-code"></i>  {/* Партнерство */}
            <span className="footer-menu-text">
                {/* Партнерство */}
                </span>
            </a>
          </li>
          <li onClick={() => onNavClick("features")}>
            <a href="#">
            <i className="fas fa-server"></i>  {/* Сообщество */}
            <span className="footer-menu-text">
                {/* Сообщество */}
                </span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
