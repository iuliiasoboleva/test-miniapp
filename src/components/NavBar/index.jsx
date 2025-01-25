import React, { useEffect, useState } from "react";
import logo from "../../assets/images/user.svg";
import { ReactComponent as HomeIcon } from "../../assets/images/user.svg";
import { ReactComponent as AboutIcon } from "../../assets/images/shopping-bag.svg";
import { ReactComponent as FeaturesIcon } from "../../assets/images/question.svg";
import { ReactComponent as ContactIcon } from "../../assets/images/angle-down.svg";
import { ReactComponent as SubMenuIcon1 } from "../../assets/images/user.svg";
import { ReactComponent as SubMenuIcon2 } from "../../assets/images/shopping-bag.svg";
import "./styles.css";

const NavBar = ({ onNavClick }) => {
  const [tokens, setTokens] = useState(0.9);
  const [tariff, setTariff] = useState("Free");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

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

  const handleNavClick = (menu) => {
    setActiveMenu(menu);
    onNavClick(menu);
  };

  const handleContactClick = () => {
    setShowSubMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".submenu") && !event.target.closest(".menu-item")) {
        setShowSubMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="user-info">
          <p className="user-tokens">Tokens: {tokens.toFixed(2)}</p>
          <p className="user-tariff">Tariff: {tariff}</p>
        </div>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="menu-item" onClick={() => handleNavClick("home")}>
            <HomeIcon className="menu-icon" />
            <span className="menu-text">Home</span>
          </li>
          <li className="menu-item" onClick={() => handleNavClick("about")}>
            <AboutIcon className="menu-icon" />
            <span className="menu-text">About</span>
          </li>
          <li className="menu-item" onClick={() => handleNavClick("features")}>
            <FeaturesIcon className="menu-icon" />
            <span className="menu-text">Features</span>
          </li>
          <li className="menu-item" onClick={handleContactClick}>
            <ContactIcon className="menu-icon" />
            <span className="menu-text">Contact</span>
          </li>
          {showSubMenu && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeMenu === "settings" ? "active" : ""}`}
                onClick={() => handleNavClick("settings")}
              >
                <SubMenuIcon1 className="submenu-icon" />
                <span className="submenu-text">Настройки</span>
              </li>
              <li
                className={`submenu-item ${activeMenu === "funds" ? "active" : ""}`}
                onClick={() => handleNavClick("funds")}
              >
                <SubMenuIcon2 className="submenu-icon" />
                <span className="submenu-text">Движение средств</span>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
