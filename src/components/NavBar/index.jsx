import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const NavBar = ({ onNavClick }) => {
  const { t } = useTranslation();
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleNavClick = (menu) => {
    onNavClick(menu);
  };

  const handleContactClick = () => {
    setShowSubMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#dropdown-menu") &&
        !event.target.closest("#more-menu")
      ) {
        setShowSubMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-right">
      <nav>
        <ul>
          <li onClick={() => handleNavClick("subscription")}>
            <a href="#">
              <i className="bi bi-person-fill-check"></i>
              {t("navbar.subscription")}
            </a>
          </li>
          <li onClick={() => handleNavClick("features")}>
            <a href="#">
              <i className="bi bi-lightning-charge-fill"></i>
              {t("navbar.tokens")}
            </a>
          </li>
          <li onClick={() => handleNavClick("faq")}>
            <a href="#">
              <i className="bi bi-question"></i>
              FAQ
            </a>
          </li>
          <li>
            <a id="more-menu" onClick={handleContactClick}>
              <i className="bi bi-chevron-double-down"></i>
              {t("navbar.more")}
            </a>
            {showSubMenu && (
              <ul id="dropdown-menu">
                <li id="dropdown-menu-item" onClick={() => {
                  handleNavClick("settings");
                  setShowSubMenu(false);
                }}
                >
                  <a href="#" id="settings">
                    <i className="bi bi-gear-fill"></i>
                    <span>{t("navbar.settings")}</span>
                  </a>
                </li>
                <li id="dropdown-menu-item" onClick={() => {
                  handleNavClick("funds");
                  setShowSubMenu(false);
                }}    >
                  <a href="#" id="funds">
                    <i className="bi bi-calculator-fill"></i>
                    <span>{t("navbar.funds")}</span>
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
