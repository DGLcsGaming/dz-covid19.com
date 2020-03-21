import React, { useContext } from "react";
import InfoTile from "./InfoTile";
import Area from "./Area";
import Graph from "./Graph";
import { wilayasContext } from "../contexts/wilayasContext";


function CountryTab() {
  const [wilayas, setWilayas] = useContext(wilayasContext);
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
          {wilayas.map(wilaya => (
            <Area key={wilaya.id} data={wilaya}/>
          ))}
       </div>
       
    </div>
  );
}

export default CountryTab;
