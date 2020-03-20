import React, {useState, useRef} from "react";
import { Map, Marker, Popup, TileLayer, Circle } from 'react-leaflet';


const blida = {
  coordinates : [2.8166634, 36.4666648],
  confirmed : 51
}

function MyMap() {
  const map = useRef(null);
  const [state, setState] = useState({
    zoom: 6
  });
  const [wilayaState, setWilayaState] = useState([
      {
        name: 'blida',
        coordinates : [2.8166634, 36.4666648],
        confirmed : 51,
        deaths: 5,
        recoveries: 12
      },
      {
        name: 'Algiers',
        coordinates : [3.086472, 36.737232],
        confirmed : 9,
        deaths: 0,
        recoveries: 0
      },
      {
        name: 'Skikda',
        coordinates : [6.910181, 36.871521],
        confirmed : 3,
        deaths: 1,
        recoveries: 1
      }
  ]);

  const handleZoom = () => {
    setState({zoom: map.current.leafletElement.getZoom()});
  };
  
  return (
    <div className="map">
      <Map center={[29.036960, 3.295898]} zoom={6} ref={map} onzoomend={handleZoom} >
        <TileLayer
          url="	https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          attribution=""
        />
        {
          wilayaState.map((wilaya, index) => (
                <Circle 
                center={{lat:wilaya.coordinates[1], lng: wilaya.coordinates[0]}}
                fillColor="red" 
                color="red"
                fillOpacity=".5"
                opacity=".2"
                className="mapCircle"
                radius={wilaya.confirmed/(state.zoom/5000)}/>
          ))
        }

      </Map>
    </div>
  );
}

export default MyMap;
