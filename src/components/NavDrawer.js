import React, { Fragment } from "react";

const NavDrawer = props => {
  return (
    <Fragment>
      <div
        className="backdrop-container"
        style={{
          opacity: props.visible.opacity,
          display: props.visible.display
        }}
        onClick={props.click}
      />
      <div
        className="navdrawer-container"
        style={
          props.visible.opacity === 1
            ? { transform: "translateX(0%)", willChange: "transform" }
            : { transform: "translateX(100%)", willChange: "transform" }
        }>
        <div className="flex navbar-items">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>
          <small>
            Made with &#10084;&#65039; by{" "}
            <strong>
              <a href="https://facebook.com/DGLCS" target="_blank">
                Ghoul Faical
              </a>
            </strong>{" "}
            in Algeria
          </small>
        </div>
      </div>
    </Fragment>
  );
};

export default NavDrawer;
