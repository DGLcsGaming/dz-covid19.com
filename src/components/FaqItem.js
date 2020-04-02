import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";

const FaqItem = forwardRef((props, ref) => {
  const myRef = useRef();
  const [active, setActive] = useState("expPanel");
  const toggleClass = () => {
    active === "expPanel active" ? setActive("expPanel") : setActive("expPanel active");
  };
  const close = () => {
    myRef.current.scrollTop = 0;
    setActive("expPanel");
  };
  useImperativeHandle(
    ref,
    () => {
      return {
        close: close
      };
    },
    []
  );
  return (
    <div onClick={() => toggleClass()} className={active} ref={myRef}>
      <div className="panelTitle">
        <div className="title">
          <span className="text">{props.title}</span>
        </div>
        <div className="actions">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect expIcon">
            <i className="material-icons">expand_more</i>
          </button>
        </div>
      </div>
      <div className="panelExpanded">
        <div className="panelContent">
          <div>{props.text}</div>
        </div>
      </div>
    </div>
  );
});

export default FaqItem;
