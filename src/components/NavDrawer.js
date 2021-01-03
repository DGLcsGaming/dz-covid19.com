import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const NavDrawer = (props) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [currentRoute, setCurrentRoute] = useState(pathname);

  return (
    <Fragment>
      <div
        className="backdrop-container"
        style={{
          opacity: props.visible.opacity,
          display: props.visible.display,
        }}
        onClick={props.click}
      />
      <div
        className="navdrawer-container"
        style={
          props.visible.opacity === 1
            ? { transform: "translateX(0%)", willChange: "transform" }
            : { transform: "translateX(100%)", willChange: "transform" }
        }>
        <ul className="navbar-nav">
          <li className={currentRoute === "/" ? "nav-item active" : "nav-item"}>
            <Link
              className="nav-link"
              to="/"
              onClick={() => {
                setCurrentRoute("/");
                props.click();
              }}>
              {t("Header.Home")} <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className={currentRoute === "/advices" ? "nav-item active" : "nav-item"}>
            <Link
              className="nav-link"
              to="/advices"
              onClick={() => {
                setCurrentRoute("/advices");
                props.click();
              }}>
              {t("Header.Advices")}
            </Link>
          </li>
          <li className={currentRoute === "/faq" ? "nav-item active" : "nav-item"}>
            <Link
              className="nav-link"
              to="/faq"
              onClick={() => {
                setCurrentRoute("/faq");
                props.click();
              }}>
              {t("Header.FAQ")}
            </Link>
          </li>
          <li className={currentRoute === "/disclaimer" ? "nav-item active" : "nav-item"}>
            <Link
              className="nav-link"
              to="/disclaimer"
              onClick={() => {
                setCurrentRoute("/disclaimer");
                props.click();
              }}>
              {t("Header.Disclaimer")}
            </Link>
          </li>
        </ul>
        {/* <small style={{ textAlign: "center" }}>
          Made with &#10084;&#65039; by{" "}
          <strong>
            <a href="https://facebook.com/DGLCS">Ghoul Fayçal</a>
          </strong>{" "}
          in Algeria
        </small> */}
      </div>
    </Fragment>
  );
};

export default NavDrawer;
