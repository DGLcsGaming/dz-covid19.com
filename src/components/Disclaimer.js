import React from "react";
import { useTranslation } from "react-i18next";

const Disclaimer = () => {
  const { t } = useTranslation();
  return (
    <div className="disclaimer-container">
      <h3 className="disclaimer-header">تبرئة</h3>
      <br />
      <ul>
        <li>
          <span>{t("Disclaimer.1")}</span>
        </li>
        <li>
          <span>{t("Disclaimer.2")}</span>
        </li>
        <li>
          <span>{t("Disclaimer.3")}</span>
        </li>
        <li>
          <span>{t("Disclaimer.4")}</span>
        </li>
      </ul>
    </div>
  );
};

export default Disclaimer;
