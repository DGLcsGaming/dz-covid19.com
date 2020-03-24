import React, { useContext } from "react";
import InfoTile from "./InfoTile";
import Area from "./Area";
import Graph from "./Graph";
import { wilayasContext } from "../contexts/wilayasContext";


function CountryTab() {
  const [wilayas, setWilayas] = useContext(wilayasContext);
  return (
    <div className="country tab">
      <div className="pullbar" />
      <div className="pageName text-center">
        <a href="#">
          <img src="./img/corona.svg" height="40px"/>
        </a>
        <span>Algeria COVID-19 Tracker</span>
      </div>
      <InfoTile />
      <Graph /> 
      <div className="areas">
          {wilayas.sort((a, b) => b.confirmed - a.confirmed).map(wilaya => (
            <Area key={wilaya.code} data={wilaya}/>
          ))}
       </div>
       
    </div>
  );
}

export default CountryTab;
