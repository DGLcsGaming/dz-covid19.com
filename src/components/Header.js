import React from "react";

function Header() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#"><img src="./img/corona.svg" width="40px"></img></a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <small>Made with &#10084;&#65039; by <strong><a href="https://facebook.com/DGLCS">Ghoul Faical</a></strong> in Algeria</small>
      </div> 
    </nav>

  );
}

export default Header;
