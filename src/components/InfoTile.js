import React from "react";

var today = 72;
var yesterday = 60;
function infoTile() {
  return (
    <div className="infoTile">
        <div className="title text-center" title="Total Confirmed Cases">Total Confirmed Cases</div>
        <div className="confirmedContainer">
            <div className="confirmed text-center">72</div>
            <div className="confirmed-right">
                <div class="ring-container">
                    <div className="ringring"></div>
                    <div className="circle"></div>
                    <h6 className="live">LIVE</h6>
                </div>
                <div className="changeContainer text-center">
                    <img className="svg-filter-red" src="./img/high.svg" alt="high temperature" />
                    <div className="change text-center red">{((today-yesterday)/yesterday) * 100}%</div>
                </div> 
            </div>

        </div>
        
        <div className="legend flex flex-row justify-center flex justify-center w-full md:justify-end md:mt-0">
            <div className="w-1/3 flex flex-col rounded overflow-hidden statshadow text-center text-yellow-600">
                <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-yellow-100 text-xl lg:text-3xl font-bold font-sans"><span className="mx-2">54</span></div>
                <div className="py-1 w-full bg-yellow-200 text-sm lg:text-base font-semibold font-sans"><span className="mx-2 active">Active</span></div>
            </div> 
            <div className="w-1/3 mx-2 flex flex-col rounded overflow-hidden statshadow text-center text-green-600">
                <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-green-100 text-xl lg:text-3xl font-bold font-sans"><span className="mx-2">12</span></div>
                <div className="py-1 w-full bg-green-200 text-sm lg:text-base font-semibold font-sans"><span className="mx-2 recovered">Recovered</span></div>
            </div> 
            <div className="w-1/3 flex flex-col rounded overflow-hidden statshadow text-center text-gray-600">
                <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-gray-200 text-xl lg:text-3xl font-bold font-sans"><span className="mx-2">6</span></div>
                <div className="py-1 w-full bg-gray-300 text-sm lg:text-base font-semibold font-sans"><span className="mx-2 deaths">Deaths</span></div>
            </div>
        </div>
    </div>
  );
}

export default infoTile;


