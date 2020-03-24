import React from "react";

function Area(props) {
  return (
    <div id={props.data.name} className="area">
        <div className="areaName">{props.data.code}&nbsp;-&nbsp;{props.data.name}</div>
        <div className="areaTotal">{props.data.confirmed}</div>
    </div>
  );
}

export default Area;
