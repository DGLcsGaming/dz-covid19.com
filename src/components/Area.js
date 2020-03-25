import React, { useContext } from "react";
import { globalContext } from "../contexts/globalContext";

function Area(props) {
  const [globalState, setGlobalState] = useContext(globalContext);
  const handleClick = () => {
    setGlobalState({ ...globalState, selectedWilayaId: props.data.code });
  };
  return (
    <div id={props.data.name} className="area" onClick={handleClick}>
      <div className="areaName">
        {props.data.code}&nbsp;-&nbsp;{props.data.name}
      </div>
      <div className="areaTotal">{props.data.confirmed}</div>
    </div>
  );
}

export default Area;
