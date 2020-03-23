import React, {useState, useRef, useContext} from "react";
import { Map, Marker, Popup, TileLayer, Circle } from 'react-leaflet';
import {wilayasContext} from "../contexts/wilayasContext";
import Odometer from "react-odometerjs";


function pickHex(weight) {
  var color1 = [241, 29, 40]; // red
  var color2 = [255, 161, 44]; // orange
  var w1 = weight;
  var w2 = 1 - w1;
  var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2)];
  return rgb;
}
function normilize (val, max, min) { 
  return (val - min) / (max - min); 
}

function getGradientColor (start_color, end_color, percent) {
  // strip the leading # if it's there
  start_color = start_color.replace(/^\s*#|\s*$/g, '');
  end_color = end_color.replace(/^\s*#|\s*$/g, '');

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if(start_color.length == 3){
    start_color = start_color.replace(/(.)/g, '$1$1');
  }

  if(end_color.length == 3){
    end_color = end_color.replace(/(.)/g, '$1$1');
  }

  // get colors
  var start_red = parseInt(start_color.substr(0, 2), 16),
      start_green = parseInt(start_color.substr(2, 2), 16),
      start_blue = parseInt(start_color.substr(4, 2), 16);

  var end_red = parseInt(end_color.substr(0, 2), 16),
      end_green = parseInt(end_color.substr(2, 2), 16),
      end_blue = parseInt(end_color.substr(4, 2), 16);

  // calculate new color
  var diff_red = end_red - start_red;
  var diff_green = end_green - start_green;
  var diff_blue = end_blue - start_blue;

  diff_red = ( (diff_red * percent) + start_red ).toString(16).split('.')[0];
  diff_green = ( (diff_green * percent) + start_green ).toString(16).split('.')[0];
  diff_blue = ( (diff_blue * percent) + start_blue ).toString(16).split('.')[0];

  // ensure 2 digits by color
  if( diff_red.length == 1 ) diff_red = '0' + diff_red
  if( diff_green.length == 1 ) diff_green = '0' + diff_green
  if( diff_blue.length == 1 ) diff_blue = '0' + diff_blue

  return '#' + diff_red + diff_green + diff_blue;
};

function MyMap() {
  const map = useRef(null);
  const [currentZoom, setCurrentZoom] = useState(6);

  const [wilayas, setWilayas] = useContext(wilayasContext);

  const handleZoom = () => {
    setCurrentZoom(map.current.leafletElement.getZoom());
  };
  
  var maxWilaya = wilayas.reduce((max, wilaya) => max.confirmed > wilaya.confirmed ? max : wilaya);

  return (
    <div className="map">
      <Map center={[29.036960, 3.295898]} zoom={6} ref={map} onzoomend={handleZoom} >
        <TileLayer
          url="	https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          attribution=""
        />
        {
          wilayas.map((wilaya, index) => (
                wilaya.confirmed &&
                <Circle 
                key={wilaya.code}
                center={{lat:wilaya.coordinates[0], lng: wilaya.coordinates[1]}}
                fillColor={getGradientColor('#ff6f00','#FF0000', normilize(Math.log10(wilaya.confirmed), Math.log10(maxWilaya.confirmed), 0))} 
                color={getGradientColor('#ff6f00','#FF0000', normilize(Math.log10(wilaya.confirmed), Math.log10(maxWilaya.confirmed), 0))} 
                fillOpacity=".5"
                opacity=".2"
                className="mapCircle"
                radius={(Math.log(wilaya.confirmed*2)*100000/currentZoom)}>
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
