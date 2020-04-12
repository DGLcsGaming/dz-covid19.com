import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [currentRoute, setCurrentRoute] = useState(pathname);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src="./img/corona.svg" width="40px"></img>
      </a>
      <div className="flex navbar-items">
        <ul className="navbar-nav">
          <li className={currentRoute === "/" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/" onClick={() => setCurrentRoute("/")}>
              {t("Header.Home")} <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className={currentRoute === "/advices" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/advices" onClick={() => setCurrentRoute("/advices")}>
              {t("Header.Advices")}
            </Link>
          </li>
          <li className={currentRoute === "/faq" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/faq" onClick={() => setCurrentRoute("/faq")}>
              {t("Header.FAQ")}
            </Link>
          </li>
          <li className={currentRoute === "/disclaimer" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/disclaimer" onClick={() => setCurrentRoute("/disclaimer")}>
              {t("Header.Disclaimer")}
            </Link>
          </li>
        </ul>
        {/* <small>
          Made with &#10084;&#65039; by{" "}
          <strong>
            <a href="https://facebook.com/DGLCS">Ghoul Fayçal</a>
          </strong>{" "}
          in Algeria
        </small> */}
      </div>
    </nav>
  );
}

export default Header;
