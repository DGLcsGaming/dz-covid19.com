import React from "react";

const Backdrop = props => {
  return (
    <div
      className="backdrop-container"
      style={props.visible ? { opacity: 0 } : { opacity: 1 }}></div>
  );
};

export default Backdrop;
