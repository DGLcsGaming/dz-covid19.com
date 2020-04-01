import React, { useState, useEffect } from "react";
import { ReactComponent as Ar } from "../Icons/Ar.svg";
import { ReactComponent as En } from "../Icons/En.svg";
import { ReactComponent as Fr } from "../Icons/Fr.svg";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

const LanguageDropdown = props => {
  const [selectedLang, setSelectedLang] = useState("En");
  const [cookies, setCookie] = useCookies(["lang"]);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (Object.keys(cookies).length !== 0) {
      setSelectedLang(cookies.lang);
    } else {
      i18n.changeLanguage(selectedLang);
      let d = new Date();
      d.setTime(d.getTime() + 365 * 24 * 3600 * 1000);
      setCookie("lang", selectedLang, {
        path: "/",
        expires: d,
        sameSite: "lax"
      });
    }
  }, []);

  useEffect(() => {
    // Selected: En, Cookies: Ar
    if (Object.keys(cookies).length !== 0 && selectedLang !== cookies.lang) {
      i18n.changeLanguage(selectedLang);
      let d = new Date();
      d.setTime(d.getTime() + 365 * 24 * 3600 * 1000);
      setCookie("lang", selectedLang, {
        path: "/",
        expires: d,
        sameSite: "lax"
      });
      return;
    }
  }, [selectedLang]);

  return (
    <div className="select-box">
      <div className="select-box__current" tabIndex="1">
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="En"
            value="En"
            name="En"
            checked={selectedLang === "En" ? true : false}
            onChange={() => {}}
          />
          <p className="select-box__input-text">
            <En />
          </p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="Ar"
            value="Ar"
            name="Ar"
            checked={selectedLang === "Ar" ? true : false}
            onChange={() => {}}
          />
          <p className="select-box__input-text">
            <Ar />
          </p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="Fr"
            value="Fr"
            name="Fr"
            checked={selectedLang === "Fr" ? true : false}
            onChange={() => {}}
          />
          <p className="select-box__input-text">
            <Fr />
          </p>
        </div>
        <img
          className="select-box__icon"
          src="https://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className="select-box__list">
        <li onClick={() => setSelectedLang("En")}>
          <En className="select-box__option" />
        </li>
        <li onClick={() => setSelectedLang("Ar")}>
          <Ar className="select-box__option" />
        </li>
        <li onClick={() => setSelectedLang("Fr")}>
          <Fr className="select-box__option" />
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
