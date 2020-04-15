import React from "react";
import { ReactComponent as Bell } from "../Icons/Bell.svg";

const GetNotifiedButton = (props) => {
  return (
    <button className="getnotifiedbutton" onClick={props.click} style={props.style}>
      <Bell width="24px" height="24px" style={{ fill: "#38a169" }} />
    </button>
  );
};

export default GetNotifiedButton;
