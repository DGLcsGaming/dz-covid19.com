import React, {useState, useRef, useContext} from "react";
import { Map, Marker, Popup, TileLayer, Circle } from 'react-leaflet';
import {wilayasContext} from "../contexts/wilayasContext";


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
                radius={Math.log(wilaya.confirmed)*100000/currentZoom}/>
          ))
        }

      </Map>
    </div>
  );
}

export default MyMap;
