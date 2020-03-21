import React, {useState, useEffect} from "react";
import "./odometer-theme-default.css"
import "./App.css";
import "./flickity.css";
import Header from "./components/Header.js";
import CountryTab from "./components/CountryTab";
import MyMap from "./components/MyMap";
import {wilayasContext} from "./contexts/wilayasContext";
import {mainDataContext} from "./contexts/mainDataContext";
import axios from "axios";
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:4000");

function App() {
  useEffect(() => {
      console.log("Sending Request!");
      socket.on('mainData', data => {
        setMainData(data);
      });
      socket.on('wilayas', wilayas => {
        setMainData(wilayas);
      });
      
      axios.get("http://localhost:4000/mainData").then(res => res.data).then(data => {
        if(!data.error){
          setMainData(data.data);
        }else{
          alert("Error Getting Data!");
        }
      });
      
      axios.get("http://localhost:4000/wilayas").then(res => res.data).then(data => {
        if(!data.error){
          setWilayas(data.data);
        }else{
          alert("Error Getting Data!");
        }
      });

  }, []);
  const [wilayas, setWilayas] = useState([
      {
        id: 0,
        name: 'N/A',
        coordinates : [null, null],
        confirmed : 0,
        deaths: 0,
        recoveries: 0
      }
  ]);
  const [mainData, setMainData] = useState({
    currentStats: {
      confirmed: 1,
      active: 0,
      recovered: 0,
      deaths: 0
    },
    dailyStats : [
      {
        date: '0-0',
        confirmed: 1
      }
    ]
  });
  return (
    <div className="App">
      <mainDataContext.Provider value={[mainData, setMainData]}>
        <wilayasContext.Provider value={[wilayas, setWilayas]}>
          <div className="desktop">
            <div className="content">
              <CountryTab /> 
              <MyMap /> 
            </div>
            <Header />
          </div>
        </wilayasContext.Provider>
      </mainDataContext.Provider>
    </div>
  );
}

export default App;
