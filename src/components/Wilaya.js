import React from "react";
import { Circle, Popup } from "react-leaflet";
import Odometer from "react-odometerjs";
import { useTranslation } from "react-i18next";

function normilize(val, max, min) {
  return (val - min) / (max - min);
}
function hslToHex(value) {
  // valueToHeatMap + hslToHex
  var h = (1.0 - value) * 240;
  var s = 100;
  var l = 50;
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const Wilaya = (props) => {
  const { t } = useTranslation();
  return (
    <Circle
      key={props.wilaya.code}
      center={{
        lat: props.wilaya.coordinates[0],
        lng: props.wilaya.coordinates[1],
      }}
      fillColor={"#ff1900"}
      color={"#ff2f00"}
      fillOpacity=".3"
      opacity="0.05"
      className="mapCircle"
      radius={(Math.log(props.wilaya.confirmed) * 400000) / (Math.pow(2, props.zoom) / 2)}
      onclick={() => props.click(props.wilaya.code)}>
      <Popup maxWidth="auto">
        <div className="circlePopup">
          <div className="topToolTip">
            <div className="titleInfoBox">{props.wilaya.name}</div>
            <div className="statLine">
              <div className="stat confirmed">{t("General.Confirmed")}</div>
              <div className="statCount confirmed font-bold">
                <Odometer value={props.wilaya.confirmed} format="(,ddd)" />
                <div className="delta">+{props.wilaya.new_cases}</div>
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
                <div className="delta">+{props.wilaya.new_deaths}</div>
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
