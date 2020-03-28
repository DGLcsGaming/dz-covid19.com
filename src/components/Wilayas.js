import React from "react";
import Area from "./Area";

const Wilayas = props => (
  <div className="areas">
    {props.wilayas
      .sort((a, b) => b.confirmed - a.confirmed)
      .map(wilaya => (
        <Area key={wilaya.code} data={wilaya} />
      ))}
  </div>
);
export default Wilayas;
