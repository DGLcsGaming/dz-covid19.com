import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import CountryTab from "./components/CountryTab";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <div className="desktop">
        <div className="content">
          <Header />
          <CountryTab />
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
