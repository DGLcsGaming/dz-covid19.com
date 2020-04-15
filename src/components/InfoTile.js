import React, { useContext, useMemo } from "react";
import { currentStatsContext } from "../contexts/currentStatsContext";
import { dailyStatsContext } from "../contexts/dailyStatsContext";
import Odometer from "react-odometerjs";
import { useTranslation } from "react-i18next";

const calcPercentage = (currentStats, dailyStats) => {
  var yesterday;
  var yesDate = new Date();
  yesDate.setUTCHours(0, 0, 0, 0);
  yesDate.setDate(yesDate.getDate() - 1);
  yesterday = dailyStats.find((day) => {
    return day.date === yesDate.toISOString();
  });
  if (yesterday) {
    return [Math.floor(Math.round(((currentStats.confirmed - yesterday.confirmed) / yesterday.confirmed) * 100)), yesterday];
  } else {
    return [null, null];
  }
};

function InfoTile() {
  const { t } = useTranslation();
  const [currentStats, setCurrentStats] = useContext(currentStatsContext);
  const [dailyStats, setDailyStats] = useContext(dailyStatsContext);

  const [growthPercentage, yesterday] = useMemo(() => calcPercentage(currentStats, dailyStats), [currentStats, dailyStats]);

  return (
    <div className="infoTile">
      <div className="title text-center" title="Total Confirmed Cases">
        {t("InfoTile.TotalCases")}
      </div>
      <div className="confirmedContainer">
        <div className="confirmed text-center">
          <Odometer value={currentStats.confirmed} format="(,ddd)" />
        </div>
        <div className="confirmed-right">
          <div className="ring-container">
            <div className="ringring"></div>
            <div className="circle"></div>
            <h6 className="live">{t("InfoTile.Live")}</h6>
          </div>
          <div className="changeContainer text-center">
            <img className="svg-filter-red" src="./img/high.svg" />
            <div className="change text-center red">
              <span className="difference">
                +<Odometer value={currentStats.confirmed - yesterday.confirmed} format="d" />
              </span>
              &nbsp; (
              <Odometer value={growthPercentage} format="d" />
              %)
            </div>
          </div>
        </div>
      </div>

      <div id="threestats" className="legend flex flex-row justify-center flex justify-center w-full md:justify-end md:mt-0">
        <div className="w-1/3 flex flex-col rounded overflow-hidden statshadow text-center text-yellow-600">
          <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-yellow-100 text-xl lg:text-3xl font-bold font-sans">
            <span className="mx-2">
              <Odometer value={currentStats.active} format="(,ddd)" />
            </span>
          </div>
          <div className="py-1 w-full bg-yellow-200 text-sm lg:text-base font-semibold font-sans">
            <span className="mx-2 active">{t("General.Active")}</span>
          </div>
        </div>
        <div className="w-1/2 mx-2 flex flex-col rounded overflow-hidden statshadow text-center text-green-600" style={{ position: "relative" }}>
          <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-green-100 text-xxl font-bold font-sans">
            <div className="recovered-difference">
              +<Odometer value={currentStats.recovered - yesterday.recovered} format="d" />
            </div>
            <span className="mx-2">
              <Odometer value={currentStats.recovered} format="(,ddd)" />
            </span>
          </div>
          <div className="py-1 w-full bg-green-200 text-sm lg:text-base font-semibold font-sans">
            <span className="mx-2 recovered">{t("General.Recovered")}</span>
          </div>
        </div>
        <div className="w-1/3 flex flex-col rounded overflow-hidden statshadow text-center text-gray-600" style={{ position: "relative" }}>
          <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-gray-200 text-xl font-bold font-sans">
            <div className="deaths-difference">
              +<Odometer value={currentStats.deaths - yesterday.deaths} format="d" />
            </div>
            <span className="mx-2">
              <Odometer value={currentStats.deaths} format="(,ddd)" />
            </span>
          </div>
          <div className="py-1 w-full bg-gray-300 text-sm lg:text-base font-semibold font-sans">
            <span className="mx-2 deaths">{t("General.Deaths")}</span>
          </div>
        </div>
      </div>
      <div id="hospitalized" className="legend flex flex-row justify-center flex justify-center w-full md:justify-end md:mt-0">
        <div className="w-full flex flex-col rounded overflow-hidden statshadow text-center text-purple-600" style={{ position: "relative" }}>
          <div className="h-10 py-1 flex flex-auto items-center justify-center bg-purple-100 text-xl font-bold font-sans">
            <span className="mx-2">
              <Odometer value={currentStats.hospitalized} format="(,ddd)" />
            </span>
          </div>
          <div className="py-1 w-full bg-purple-200 text-sm lg:text-base font-semibold font-sans">
            <span className="mx-2 recovered">تحت العلاج{/* {t("General.Hospitalized")} */}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoTile;
