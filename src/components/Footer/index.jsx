import React from "react";
import "./styles.css";

const Footer = ({ onNavClick }) => {
  return (
    <footer className="footer">
      <nav className="footer-menu">
        <ul>
          <li onClick={() => onNavClick("home")}>
            <a href="#">
              <i className="fas fa-user"></i>
              Аккаунт
            </a>
          </li>
          <li onClick={() => onNavClick("partner")}>
            <a href="#">
              <i className="fas fa-handshake"></i>
              <span className="footer-menu-text">Партнерство</span>
            </a>
          </li>
          <li onClick={() => onNavClick("features")}>
            <a href="#">
              <i className="fas fa-users"></i>
              <span className="footer-menu-text">Сообщество</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
