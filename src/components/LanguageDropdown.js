import React from "react";
import { ReactComponent as Dz } from "../Icons/dz.svg";
import { ReactComponent as Gb } from "../Icons/gb.svg";
import { ReactComponent as Fr } from "../Icons/fr.svg";

const LanguageDropdown = props => {
  const handleChange = () => {};
  return (
    <div className="select-box">
      <div className="select-box__current" tabIndex="1">
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="Gb"
            value="Gb"
            name="Gb"
            checked={true}
            onChange={handleChange}
          />
          <p className="select-box__input-text">
            <Gb width="20px" style={{ margin: "2px 5px 0px 5px" }} />
          </p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="Dz"
            value="Dz"
            name="Dz"
            checked={false}
            onChange={handleChange}
          />
          <p className="select-box__input-text">
            <Dz width="20px" style={{ margin: "2px 5px 0px 5px" }} />
          </p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="Fr"
            value="Fr"
            name="Fr"
            checked={false}
            onChange={handleChange}
          />
          <p className="select-box__input-text">
            <Fr width="20px" style={{ margin: "2px 5px 0px 5px" }} />
          </p>
        </div>
        <img
          className="select-box__icon"
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className="select-box__list">
        <li>
          <Gb width="24px" style={{ marginTop: "12px" }} htmlFor="Gb" />
        </li>
        <li>
          <Dz width="24px" style={{ marginTop: "12px" }} htmlFor="Dz" />
        </li>
        <li>
          <Fr width="24px" style={{ marginTop: "12px" }} htmlFor="Fr" />
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
