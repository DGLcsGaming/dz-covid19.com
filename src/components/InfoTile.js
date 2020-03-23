import React, { useContext, useMemo, useEffect } from "react";
import { currentStatsContext } from "../contexts/currentStatsContext";
import { dailyStatsContext } from "../contexts/dailyStatsContext";
import Odometer from "react-odometerjs";

const calcPercentage = (currentStats, dailyStats) => {
  var today, yesterday;
  today = parseInt(currentStats.confirmed);
  var yesDate = new Date();
  yesDate.setUTCHours(0, 0, 0, 0);
  yesDate.setDate(yesDate.getDate() - 1);
  yesterday = dailyStats.find(day => {
    return day.date === yesDate.toISOString();
  });
  return [
    Math.floor(Math.round(((today - yesterday.confirmed) / yesterday.confirmed) * 100)),
    today,
    yesterday.confirmed
  ];
};

function InfoTile() {
  const [currentStats, setCurrentStats] = useContext(currentStatsContext);
  const [dailyStats, setDailyStats] = useContext(dailyStatsContext);

  const [growthPercentage, today, yesterday] = useMemo(
    () => calcPercentage(currentStats, dailyStats),
    [currentStats, dailyStats]
  );

  return (
    <div className="infoTile">
      <div className="title text-center" title="Total Confirmed Cases">
        Total Confirmed Cases
      </div>
      <div className="confirmedContainer">
        <div className="confirmed text-center">
          <Odometer value={currentStats.confirmed} format="(,ddd)" />
        </div>
        <div className="confirmed-right">
          <div className="ring-container">
            <div className="ringring"></div>
            <div className="circle"></div>
            <h6 className="live">LIVE</h6>
          </div>
          <div className="changeContainer text-center">
            <img className="svg-filter-red" src="./img/high.svg" />
            <div className="change text-center red">
              <span className="difference">
                +<Odometer value={today - yesterday} format="d" />
              </span>
              &nbsp; (
              <Odometer value={growthPercentage} format="d" />
              %)
            </div>
          </div>
        </div>
      </div>

      <div className="legend flex flex-row justify-center flex justify-center w-full md:justify-end md:mt-0">
        <div className="w-1/3 flex flex-col rounded overflow-hidden statshadow text-center text-yellow-600">
          <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-yellow-100 text-xl lg:text-3xl font-bold font-sans">
            <span className="mx-2">
              <Odometer value={currentStats.active} format="(,ddd)" />
            </span>
          </div>
          <div className="py-1 w-full bg-yellow-200 text-sm lg:text-base font-semibold font-sans">
            <span className="mx-2 active">Active</span>
          </div>
        </div>
        <div className="w-1/2 mx-2 flex flex-col rounded overflow-hidden statshadow text-center text-green-600">
          <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-green-100 text-xxl font-bold font-sans">
            <span className="mx-2">
              <Odometer value={currentStats.recovered} format="(,ddd)" />
            </span>
          </div>
          <div className="py-1 w-full bg-green-200 text-sm lg:text-base font-semibold font-sans">
            <span className="mx-2 recovered">Recovered</span>
          </div>
        </div>
        <div className="w-1/3 flex flex-col rounded overflow-hidden statshadow text-center text-gray-600">
          <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-gray-200 text-xl lg:text-3xl font-bold font-sans">
            <span className="mx-2">
              <Odometer value={currentStats.deaths} format="(,ddd)" />
            </span>
          </div>
          <div className="py-1 w-full bg-gray-300 text-sm lg:text-base font-semibold font-sans">
            <span className="mx-2 deaths">Deaths</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoTile;
