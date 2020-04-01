import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src="./img/corona.svg" width="40px"></img>
      </a>
      <div className="flex navbar-items">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              {t("Header.Home")} <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {t("Header.FAQ")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {t("Header.Disclaimer")}
            </a>
          </li>
        </ul>
        <small>
          Made with &#10084;&#65039; by{" "}
          <strong>
            <a href="https://facebook.com/DGLCS">Ghoul Faical</a>
          </strong>{" "}
          in Algeria
        </small>
      </div>
    </nav>
  );
}

export default Header;
