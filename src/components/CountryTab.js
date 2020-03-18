import React from "react";
import InfoTile from "./InfoTile";
import Area from "./Area";
import Graph from "./Graph";

function CountryTab() {
  return (
    <div className="country tab">
      <div className="pageName text-center">Algeria COVID-19 Tracker</div>
       <InfoTile />
       <Graph /> 
      <div className="areas">
            <Area />
            <Area />
            <Area />
            <Area />
            <Area />
            <Area />
            <Area />
            <Area />
            <Area />
            <Area />
            <Area />
            <Area />
       </div>
       
    </div>
  );
}

export default CountryTab;
