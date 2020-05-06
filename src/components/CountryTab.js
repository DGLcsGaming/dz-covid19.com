import React, { useContext, Fragment, useState, useEffect, useRef, useMemo } from "react";
import InfoTile from "./InfoTile";
import Graph from "./Graph";
import Wilyas from "./Wilayas";
import { wilayasContext } from "../contexts/wilayasContext";
import { currentStatsContext } from "../contexts/currentStatsContext";
import { dailyStatsContext } from "../contexts/dailyStatsContext";
import { ReactComponent as Loading } from "../Icons/Loading.svg";
import LanguageDropdown from "./LanguageDropdown";
import Beta from "./Beta";
import Ramadan from "./Ramadan";
import Donations from "../components/Donations";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";

const CountryTab = (props) => {
  const areasRef = useRef(null);
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
  var scrollIntervalOBS;
  useEffect(() => {
    if (props.obs === true && areasRef.current) {
      areasRef.current.style.cssText =
        "display: flex; flex-direction: column; position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background-color: white;";
      document.querySelector(".graph").style.cssText = "display: none;";
      document.querySelector(".country.tab").style.cssText = "margin-top: 0;";
      var currentHeight = 0;
      var Height = areasRef.current.scrollHeight - document.documentElement.scrollHeight;
      var bool = true;
      var step = 0.1;
      var speed = 1;
      scrollIntervalOBS = setInterval(() => {
        if (currentHeight < 0 || currentHeight >= Height) bool = !bool;
        if (bool) {
          areasRef.current.scrollTo(0, (currentHeight += step));
        } else {
          areasRef.current.scrollTo(0, (currentHeight -= step));
        }
      }, speed);
      return () => {
        clearInterval(scrollIntervalOBS);
      };
    }
  }, [props]);
  return (
    <div className="country tab" style={props.style}>
      <div className="pullbar" />
      <Ramadan />
      {/* <Donations /> */}
      {/* <Beta /> */}
      <LanguageDropdown />
      <div className="pageName text-center">
        <a href="#">
          <img src="./img/corona.svg" height="40px" />
        </a>
        <span>Algeria COVID-19 Tracker</span>
      </div>
      <h1 style={{ fontSize: "1px", textAlign: "center", color: "white", lineHeight: "1px" }}>إحصائيات فيروس كورونا في الجزائر</h1>
      <div className="facebook" style={isArabic ? { direction: "rtl" } : { direction: "ltr" }}>
        <span>{t("InfoTile.Facebook")}</span>
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
        <div id="scrollableTab" style={{ overflowY: "auto" }}>
          <InfoTile />
          {props.obs2 ? (
            <Modal
              isOpen={true}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  zIndex: 99999,
                },
                content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  width: "100vw",
                  height: "100vh",
                  paddingRight: "10vw",
                  paddingLeft: "10vw",
                },
              }}
              contentLabel="Notification">
              <Graph obs={props.obs2} />
            </Modal>
          ) : (
            <div className="graph">
              <Graph />
            </div>
          )}
          <Wilyas ref={areasRef} wilayas={wilayas} />
        </div>
      )}
    </div>
  );
};

export default CountryTab;

{
  /* <div className="signature">
  <small>
    Made with &#10084;&#65039; by{" "}
    <strong>
      <a href="https://facebook.com/DGLCS" target="_blank">
        Ghoul Fayçal
      </a>
    </strong>{" "}
    in Algeria
  </small>
</div> */
}
