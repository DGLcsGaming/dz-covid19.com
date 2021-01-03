import React from "react";
import { ReactComponent as Lantern } from "../Icons/Lantern.svg";
import { ReactComponent as RamadanDecorations } from "../Icons/RamadanDecorations.svg";
import { ReactComponent as RamadanText } from "../Icons/ramadanText.svg";

const Ramadan = (props) => {
  return (
    <div className="arabic">
      <div className="ramadan-decorations">
        <RamadanDecorations />
      </div>
      <div className="sway2d lantern">
        <Lantern />
      </div>
      <div className="ramadan-text-container">
        <RamadanText />
      </div>
    </div>
  );
};

export default Ramadan;
