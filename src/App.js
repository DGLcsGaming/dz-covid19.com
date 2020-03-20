import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import CountryTab from "./components/CountryTab";
import MyMap from "./components/MyMap";

function App() {
  return (
    <div className="App">
      <div className="desktop">
        <div className="content">
          <CountryTab /> 
          <MyMap /> 
        </div>
        <Header />
      </div>
    </div>
  );
}

export default App;
