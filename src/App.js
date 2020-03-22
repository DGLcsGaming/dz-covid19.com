import React, { useState, useEffect } from "react";
import "./odometer-theme-default.css";
import "./App.css";
import "./flickity.css";
import Header from "./components/Header.js";
import CountryTab from "./components/CountryTab";
import MyMap from "./components/MyMap";
import { wilayasContext } from "./contexts/wilayasContext";
import { currentStatsContext } from "./contexts/currentStatsContext";
import { dailyStatsContext } from "./contexts/dailyStatsContext";
import axios from "axios";
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:4000");

function App() {
  useEffect(() => {
    console.log("Sending Request!");
    socket.on("currentStats", data => {
      setCurrentStats(data);
    });
    socket.on("dailyStats", data => {
      setDailyStats(data);
    });
    socket.on("wilayas", wilayas => {
      setWilayas(wilayas);
    });

    axios
      .get("http://localhost:4000/currentStats")
      .then(res => res.data)
      .then(data => {
        if (!data.error) {
          setCurrentStats(data.data);
        } else {
          alert("Error Getting Data!");
        }
      });

    axios
      .get("http://localhost:4000/dailyStats")
      .then(res => res.data)
      .then(data => {
        if (!data.error) {
          setDailyStats(data.data);
        } else {
          alert("Error Getting Data!");
        }
      });

    axios
      .get("http://localhost:4000/wilayas")
      .then(res => res.data)
      .then(data => {
        if (!data.error) {
          setWilayas(data.data);
        } else {
          alert("Error Getting Data!");
        }
      });
  }, []);
  const [wilayas, setWilayas] = useState([
    {
      id: 0,
      name: "N/A",
      coordinates: [null, null],
      confirmed: 0,
      deaths: 0,
      recoveries: 0
    }
  ]);
  const [currentStats, setCurrentStats] = useState({
    confirmed: 1,
    active: 0,
    recovered: 0,
    deaths: 0
  });

  const [dailyStats, setDailyStats] = useState([
    {
      date: "0-0",
      confirmed: 1
    }
  ]);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
