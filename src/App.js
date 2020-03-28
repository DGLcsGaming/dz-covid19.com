import React, { useState, useEffect, useMemo } from "react";
import "./odometer-theme-default.css";
import "./App.css";
import "./flickity.css";
import Header from "./components/Header";
import NavDrawer from "./components/NavDrawer";
import CountryTab from "./components/CountryTab";
import MyMap from "./components/MyMap";
import { wilayasContext } from "./contexts/wilayasContext";
import { currentStatsContext } from "./contexts/currentStatsContext";
import { dailyStatsContext } from "./contexts/dailyStatsContext";
import { globalContext } from "./contexts/globalContext";
import useWindowDimensions from "./hooks/useWindowDimensions";
import openSocket from "socket.io-client";

//const socket = openSocket("http://212.24.98.17:4000");
const socket = openSocket("//:4000");

function App() {
  const [globalState, setGlobalState] = useState({
    selectedWilayaId: null
  });
  const [width, height] = useWindowDimensions();
  const [currentStats, setCurrentStats] = useState(null);
  const [dailyStats, setDailyStats] = useState(null);
  const [wilayas, setWilayas] = useState(null);
  const [isServerDown, setIsServerDown] = useState(false);
  const [navDrawerVisible, setNavDrawerVisible] = useState({
    opacity: 0,
    display: "none"
  });

  const navTogglerClick = () => {
    if (navDrawerVisible.display === "none") {
      setNavDrawerVisible({ opacity: 0, display: "block" });
      setTimeout(() => {
        setNavDrawerVisible({ display: "block", opacity: 1 });
      }, 10);
    } else {
      setNavDrawerVisible({ display: "block", opacity: 0 });
      setTimeout(() => {
        setNavDrawerVisible({ opacity: 0, display: "none" });
      }, 300);
    }
  };

  const hideBackDrop = () => {
    setNavDrawerVisible({ display: "block", opacity: 0 });
    setTimeout(() => {
      setNavDrawerVisible({ opacity: 0, display: "none" });
    }, 300);
  };

  socket.io.on("connect_error", function() {
    console.log("Error connecting to Socket.io server");
    setIsServerDown(true);
  });
  socket.on("connect", function() {
    console.log("Connected to Socket.io server");
    setIsServerDown(false);
  });

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
    socket.on("clientscount", data => {
      console.log("Clients Online: " + data);
    });
  }, []);

  var content;

  if (
    currentStats != null &&
    dailyStats != null &&
    wilayas != null &&
    !isServerDown
  ) {
    content = (
      <div className="App">
        <globalContext.Provider value={[globalState, setGlobalState]}>
          <currentStatsContext.Provider value={[currentStats, setCurrentStats]}>
            <dailyStatsContext.Provider value={[dailyStats, setDailyStats]}>
              <wilayasContext.Provider value={[wilayas, setWilayas]}>
                <div className={width >= 800 ? "desktop" : "mobile"}>
                  <div
                    className="content"
                    style={
                      navDrawerVisible.display === "block"
                        ? { overflowY: "hidden" }
                        : { overflowY: "auto" }
                    }>
                    <CountryTab />
                    <MyMap />
                  </div>
                  <NavDrawer visible={navDrawerVisible} click={hideBackDrop} />
                  <Header />
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={navTogglerClick}>
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </wilayasContext.Provider>
            </dailyStatsContext.Provider>
          </currentStatsContext.Provider>
        </globalContext.Provider>
      </div>
    );
  } else if (isServerDown) {
    content = <h1>Server is Offline</h1>;
  } else {
    content = <h1> Loading .. </h1>;
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
