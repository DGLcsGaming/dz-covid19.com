import React, { useState } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { setRTLTextPlugin } from "mapbox-gl";
import { heatmapLayer } from "./MapStyle";
import { data } from "./GeoJSON";

setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true
);

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 29.036960648558267,
    longitude: 3.2958984375,
    zoom: 4,
    width: "100vw",
    height: "100vh",
    margin: "15px"
  });

  const point = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [2.8166634, 36.4666648]
    },
    properties: {
      name: "Dinagat Islands"
    }
  };

  const clusterLayer = {
    id: "unclustered-point",
    type: "circle",
    source: "earthquakes",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-color": "#11b4da",
      "circle-radius": 100,
      "circle-stroke-width": 1,
      "circle-stroke-color": "#fff"
    }
  };

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/dglcsgaming/ck7xxjgdc09rb1inzt90xa14e">
        <Source type="geojson" data={point}>
          <Layer {...clusterLayer} />
        </Source>
      </ReactMapGL>
    </div>
  );
}

export default Map;
