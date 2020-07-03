import React, { useContext } from "react";
import { globalContext } from "../contexts/globalContext";
import { useTranslation } from "react-i18next";

function Area(props) {
  const [globalState, setGlobalState] = useContext(globalContext);
  const { t } = useTranslation();
  const handleClick = () => {
    setGlobalState({ ...globalState, selectedWilayaId: props.data.code });
  };
  return (
    <div id={props.data.name} className="area" onClick={handleClick}>
      <div className="areaName">{props.data.name}</div>
      <div style={{ margin: "5px 0px", borderBottom: "1px solid rgb(221, 221, 221)", width: "80%", lineHeight: "1px" }}>&nbsp;</div>
      <div className="areaTotal">
        <div className="areaStats areaConfirmed">
          <strong>{t("General.Confirmed")}</strong>
          <div>
            {props.data.confirmed}
            <div className="delta">+{props.data.new_cases}</div>
          </div>
        </div>
        <div className="areaStats areaRecovered">
          <strong>{t("General.Recovered")}</strong>
          {/* <div>{props.data.recovered}</div> */}
          <div>
            <small>({t("General.NA")})</small>
          </div>
        </div>
        {/*  */}
        <div className="areaStats areaDeaths">
          <strong>{t("General.Deaths")}</strong>
          <div>
            <small>({t("General.NA")})</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Area;
