import React, {useState, useRef, useContext} from "react";
import { Map, Marker, Popup, TileLayer, Circle } from 'react-leaflet';
import {wilayasContext} from "../contexts/wilayasContext";
import Odometer from "react-odometerjs";


function MyMap() {
  const map = useRef(null);
  const [currentZoom, setCurrentZoom] = useState(6);

  const [wilayas, setWilayas] = useContext(wilayasContext);

  const handleZoom = () => {
    setCurrentZoom(map.current.leafletElement.getZoom());
  };
  
  return (
    <div className="map">
      <Map center={[29.036960, 3.295898]} zoom={6} ref={map} onzoomend={handleZoom} >
        <TileLayer
          url="	https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          attribution=""
        />
        {
          wilayas.map((wilaya, index) => (
                <Circle 
                key={wilaya.id}
                center={{lat:wilaya.coordinates[1], lng: wilaya.coordinates[0]}}
                fillColor="red" 
                color="red"
                fillOpacity=".5"
                opacity=".2"
                className="mapCircle"
                radius={Math.log(wilaya.confirmed)*100000/currentZoom}>
                  <Popup>
                    <div className="circlePopup">
                        <div className="topToolTip">
                            <div className="titleInfoBox">{wilaya.name}</div>
                            <div className="statLine">
                                <div className="stat confirmed">Confirmed</div>
                                <div className="statCount confirmed font-bold"><Odometer value={wilaya.confirmed} format="(,ddd)" /></div>
                            </div>
                            <div className="statLine divider"></div>
                            <div className="statLine text-yellow-600">
                                <div className="stat">Active </div>
                                <div className="statCount font-bold"><Odometer value={wilaya.active} format="(,ddd)" /></div>
                            </div>
                            <div className="statLine text-green-600">
                                <div className="stat">Recovered </div>
                                <div className="statCount font-bold"><Odometer value={wilaya.recovered} format="(,ddd)" /></div>
                            </div>
                            <div className="statLine text-gray-600"> 
                                <div className="stat">Fatal </div>
                                <div className="statCount font-bold"><Odometer value={wilaya.deaths} format="(,ddd)" /></div>
                            </div> 
                            <i></i>
                        </div>
                    </div>
                  </Popup>
                </Circle>
          ))
        }

      </Map>
    </div>
  );
}

export default MyMap;
