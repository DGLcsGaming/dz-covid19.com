import React, { useState, useEffect, useMemo } from "react";
import "./odometer-theme-default.css";
import "./App.css";
import "./flickity.css";
import Header from "./components/Header.js";
import CountryTab from "./components/CountryTab";
import MyMap from "./components/MyMap";
import { wilayasContext } from "./contexts/wilayasContext";
import { currentStatsContext } from "./contexts/currentStatsContext";
import { dailyStatsContext } from "./contexts/dailyStatsContext";
import { globalContext } from "./contexts/globalContext";
import useWindowDimensions from "./hooks/useWindowDimensions";
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:4000");

function App() {
  const [globalState, setGlobalState] = useState({
    selectedWilayaId: null
  });
  const [width, height] = useWindowDimensions();
  const [currentStats, setCurrentStats] = useState(null);
  const [dailyStats, setDailyStats] = useState(null);
  const [wilayas, setWilayas] = useState(null);

  useEffect(() => {
    socket.on("currentStats", data => {
      console.log("CurrentStats Loaded!", new Date(Date.now()).toISOString());
      setCurrentStats(data);
    });
    socket.on("dailyStats", data => {
      console.log("Daily Loaded!", new Date(Date.now()).toISOString());
      setDailyStats(data);
    });
    socket.on("wilayas", data => {
      console.log("Wilayas Loaded!", new Date(Date.now()).toISOString());
      setWilayas(data);
    });
  }, []);

  var content = <h1> Loading .. </h1>;
  if (currentStats != null && dailyStats != null && wilayas != null) {
    content = (
      <div className="App">
        <globalContext.Provider value={[globalState, setGlobalState]}>
          <currentStatsContext.Provider value={[currentStats, setCurrentStats]}>
            <dailyStatsContext.Provider value={[dailyStats, setDailyStats]}>
              <wilayasContext.Provider value={[wilayas, setWilayas]}>
                <div className={width >= 800 ? "desktop" : "mobile"}>
                  <div className="content">
                    <CountryTab />
                    <MyMap />
                  </div>
                  <Header />
                  <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </wilayasContext.Provider>
            </dailyStatsContext.Provider>
          </currentStatsContext.Provider>
        </globalContext.Provider>
      </div>
    );
  }

  return content;
}

export default App;
/*
        <currentStatsContext.Provider value={[currentStats, setCurrentStats]}>
          <dailyStatsContext.Provider value={[dailyStats, setDailyStats]}>
            <wilayasContext.Provider value={[wilayas, setWilayas]}>
              <div className="desktop">
                <div className="content">
                  <CountryTab />
                  <MyMap />
                </div>
                <Header />
              </div>
            </wilayasContext.Provider>
          </dailyStatsContext.Provider>
        </currentStatsContext.Provider>
        */
