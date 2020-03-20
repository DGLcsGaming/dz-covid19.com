import React from "react";
import InfoTile from "./InfoTile";
import Area from "./Area";
import Graph from "./Graph";

function CountryTab() {
  return (
    <div className="country tab">
      <div className="pageName text-center">
        <a href="#">
          <img src="./img/corona.svg" height="40px"/>
        </a>
        <span>Algeria COVID-19 Tracker</span>
      </div>
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
