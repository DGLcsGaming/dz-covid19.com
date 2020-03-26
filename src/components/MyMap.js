import React, { useState, useRef, useContext } from "react";
import { Map, TileLayer } from "react-leaflet";
import { wilayasContext } from "../contexts/wilayasContext";
import { globalContext } from "../contexts/globalContext";
import Wilaya from "./Wilaya";

function MyMap() {
  const map = useRef(null);
  const [currentZoom, setCurrentZoom] = useState(6);

  const [wilayas, setWilayas] = useContext(wilayasContext);

  const handleZoom = () => {
    setCurrentZoom(map.current.leafletElement.getZoom());
  };

  var maxWilaya = wilayas.reduce((max, wilaya) =>
    max.confirmed > wilaya.confirmed ? max : wilaya
  );

  const [globalState, setGlobalState] = useContext(globalContext);
  const handleClick = code => {
    setGlobalState({ ...globalState, selectedWilayaId: code });
  };

  return (
    <div className="map">
      <Map
        center={[29.03696, 3.295898]}
        zoom={6}
        ref={map}
        onzoomend={handleZoom}>
        <TileLayer
          url="	https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          attribution=""
        />
        {wilayas.map(wilaya => {
          if (wilaya.confirmed && wilaya.confirmed > 0)
            return (
              <Wilaya
                key={wilaya.code}
                wilaya={wilaya}
                maxWilaya={maxWilaya}
                click={handleClick}
                zoom={currentZoom}
              />
            );
        })}
      </Map>
    </div>
  );
}

export default MyMap;
