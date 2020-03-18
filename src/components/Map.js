import React, {useState} from "react";
import ReactMapGL from "react-map-gl";
import { setRTLTextPlugin } from "mapbox-gl";
setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true
);

function Map() {

    const [viewport, setViewport] = useState({
        latitude: 28.0290,
        longitude: 1.6667,
        zoom: 5,
        width: "100vw",
        height: "100vh"
    });

  return (
    <div className="map">
      <ReactMapGL {...viewport} onViewportChange={viewport => {setViewport(viewport);}}  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} mapStyle="mapbox://styles/dglcsgaming/ck7xxjgdc09rb1inzt90xa14e">
      
      </ReactMapGL>
    </div>
  );
}
 
export default Map;
