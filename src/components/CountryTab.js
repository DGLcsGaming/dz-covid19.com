import React, { useContext, Fragment } from "react";
import InfoTile from "./InfoTile";
import Graph from "./Graph";
import Wilyas from "./Wilayas";
import { wilayasContext } from "../contexts/wilayasContext";
import { currentStatsContext } from "../contexts/currentStatsContext";
import { dailyStatsContext } from "../contexts/dailyStatsContext";
import { ReactComponent as Loading } from "../Icons/Loading.svg";
import LanguageDropdown from "./LanguageDropdown";
import Beta from "./Beta";

const CountryTab = (props) => {
  const [wilayas, setWilayas] = useContext(wilayasContext);
  const [currentStats, setCurrentStats] = useContext(currentStatsContext);
  const [dailyStats, setDailyStats] = useContext(dailyStatsContext);
  return (
    <div className="country tab" style={props.style}>
      <Beta />
      <div className="pullbar" />
      <LanguageDropdown />
      <div className="pageName text-center">
        <a href="#">
          <img src="./img/corona.svg" height="40px" />
        </a>
        <span>Algeria COVID-19 Tracker</span>
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
              Ghoul Faical
            </a>
          </strong>{" "}
          in Algeria
        </small>
      </div>
    </div>
  );
};

export default CountryTab;
