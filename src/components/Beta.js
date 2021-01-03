import React from "react";
import { useTranslation } from "react-i18next";

const Beta = props => {
  const { t } = useTranslation();
  return (
    <div className="ribbon ribbon-top">
      <span>{t("Beta.Beta")}</span>
    </div>
  );
};

export default Beta;
