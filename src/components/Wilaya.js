import React from "react";
import { Circle, Popup } from "react-leaflet";
import Odometer from "react-odometerjs";
import { useTranslation } from "react-i18next";

function pickHex(weight) {
  var color1 = [241, 29, 40]; // red
  var color2 = [255, 161, 44]; // orange
  var w1 = weight;
  var w2 = 1 - w1;
  var rgb = [
    Math.round(color1[0] * w1 + color2[0] * w2),
    Math.round(color1[1] * w1 + color2[1] * w2),
    Math.round(color1[2] * w1 + color2[2] * w2)
  ];
  return rgb;
}
function normilize(val, max, min) {
  return (val - min) / (max - min);
}

function getGradientColor(start_color, end_color, percent) {
  // strip the leading # if it's there
  start_color = start_color.replace(/^\s*#|\s*$/g, "");
  end_color = end_color.replace(/^\s*#|\s*$/g, "");

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (start_color.length == 3) {
    start_color = start_color.replace(/(.)/g, "$1$1");
  }

  if (end_color.length == 3) {
    end_color = end_color.replace(/(.)/g, "$1$1");
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

  diff_red = (diff_red * percent + start_red).toString(16).split(".")[0];
  diff_green = (diff_green * percent + start_green).toString(16).split(".")[0];
  diff_blue = (diff_blue * percent + start_blue).toString(16).split(".")[0];

  // ensure 2 digits by color
  if (diff_red.length == 1) diff_red = "0" + diff_red;
  if (diff_green.length == 1) diff_green = "0" + diff_green;
  if (diff_blue.length == 1) diff_blue = "0" + diff_blue;

  return "#" + diff_red + diff_green + diff_blue;
}

const Wilaya = props => {
  const { t } = useTranslation();
  return (
    <Circle
      key={props.wilaya.code}
      center={{
        lat: props.wilaya.coordinates[0],
        lng: props.wilaya.coordinates[1]
      }}
      fillColor={getGradientColor(
        "#ff6f00",
        "#FF0000",
        normilize(
          Math.log10(props.wilaya.confirmed),
          Math.log10(props.maxWilaya.confirmed),
          0
        )
      )}
      color={getGradientColor(
        "#ff6f00",
        "#FF0000",
        normilize(
          Math.log10(props.confirmed),
          Math.log10(props.maxWilaya.confirmed),
          0
        )
      )}
      fillOpacity=".5"
      opacity=".2"
      className="mapCircle"
      radius={(Math.log(props.wilaya.confirmed * 2) * 100000) / props.zoom}
      onclick={() => props.click(props.wilaya.code)}>
      <Popup>
        <div className="circlePopup">
          <div className="topToolTip">
            <div className="titleInfoBox">{props.wilaya.name}</div>
            <div className="statLine">
              <div className="stat confirmed">{t("General.Confirmed")}</div>
              <div className="statCount confirmed font-bold">
                <Odometer value={props.wilaya.confirmed} format="(,ddd)" />
              </div>
            </div>
            <div className="statLine divider"></div>
            <div className="statLine text-yellow-600">
              <div className="stat">{t("General.Active")}</div>
              <div className="statCount font-bold">
                <Odometer value={props.wilaya.active} format="(,ddd)" />
              </div>
            </div>
            <div className="statLine text-green-600">
              <div className="stat">{t("General.Recovered")}</div>
              <div className="statCount font-bold">
                <Odometer value={props.wilaya.recovered} format="(,ddd)" />
              </div>
            </div>
            <div className="statLine text-gray-600">
              <div className="stat">{t("General.Deaths")}</div>
              <div className="statCount font-bold">
                <Odometer value={props.wilaya.deaths} format="(,ddd)" />
              </div>
            </div>
            <i></i>
          </div>
        </div>
      </Popup>
    </Circle>
  );
};

export default Wilaya;
