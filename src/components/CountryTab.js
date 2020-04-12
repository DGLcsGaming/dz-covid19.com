import React, { useContext, Fragment, useState, useEffect } from "react";
import InfoTile from "./InfoTile";
import Graph from "./Graph";
import Wilyas from "./Wilayas";
import { wilayasContext } from "../contexts/wilayasContext";
import { currentStatsContext } from "../contexts/currentStatsContext";
import { dailyStatsContext } from "../contexts/dailyStatsContext";
import { ReactComponent as Loading } from "../Icons/Loading.svg";
import LanguageDropdown from "./LanguageDropdown";
import Beta from "./Beta";
import Donations from "../components/Donations";
import { useTranslation } from "react-i18next";

const CountryTab = (props) => {
  const { t, i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(true);
  const [wilayas, setWilayas] = useContext(wilayasContext);
  const [currentStats, setCurrentStats] = useContext(currentStatsContext);
  const [dailyStats, setDailyStats] = useContext(dailyStatsContext);
  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      if (lng === "Ar") {
        setIsArabic(true);
      } else {
        setIsArabic(false);
      }
    });
    return () => {
      i18n.off();
    };
  });
  return (
    <div className="country tab" style={props.style}>
      <div className="pullbar" />
      <Donations />
      {/* <Beta /> */}
      <LanguageDropdown />
      <div className="pageName text-center">
        <a href="#">
          <img src="./img/corona.svg" height="40px" />
        </a>
        <span>Algeria COVID-19 Tracker</span>
      </div>
      <div className="facebook" style={isArabic ? { direction: "rtl" } : { direction: "ltr" }}>
        <span>{t("InfoTile.Facebook")}</span>
        {/* <span>{isArabic ? "الصفحة الرسمية على الفيسبوك" : "Page officielle sur Facebook"}</span> */}
        <div
          className="fb-like"
          data-href="https://www.facebook.com/dzcovid19com"
          data-width=""
          data-layout="button"
          data-action="like"
          data-size="small"
          data-share="false"></div>
      </div>
      <div className="fbLink">
        <a href="https://fb.me/dzcovid19com" target="_blank">
          https://fb.me/dzcovid19com
        </a>
      </div>
      {currentStats === null || dailyStats === null || wilayas === null ? (
        <Loading />
      ) : (
        <Fragment>
          <InfoTile />
          <Graph />
          <Wilyas wilayas={wilayas} />
        </Fragment>
      )}
      <div className="signature">
        <small>
          Made with &#10084;&#65039; by{" "}
          <strong>
            <a href="https://facebook.com/DGLCS" target="_blank">
              Ghoul Fayçal
            </a>
          </strong>{" "}
          in Algeria
        </small>
      </div>
    </div>
  );
};

export default CountryTab;
