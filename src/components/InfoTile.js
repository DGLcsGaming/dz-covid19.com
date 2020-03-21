import React, { useContext, useMemo} from "react";
import { mainDataContext } from "../contexts/mainDataContext";
import Odometer from 'react-odometerjs';

const calcPercentage = (mainData) => {
    var today = parseInt(mainData.currentStats.confirmed);
    var yesterday = parseInt(mainData.dailyStats[mainData.dailyStats.length - 1].confirmed);
    return Math.floor(Math.round(((today-yesterday)/yesterday) * 100));
};

function InfoTile() {
    const [mainData, setMainData] = useContext(mainDataContext);
    const growthPercentage = useMemo(() => calcPercentage(mainData), [mainData]);

  return (
    <div className="infoTile">
        <div className="title text-center" title="Total Confirmed Cases">Total Confirmed Cases</div>
        <div className="confirmedContainer">
            <div className="confirmed text-center"><Odometer value={mainData.currentStats.confirmed} format="(,ddd)" /></div>
            <div className="confirmed-right">
                <div className="ring-container">
                    <div className="ringring"></div>
                    <div className="circle"></div>
                    <h6 className="live">LIVE</h6>
                </div>
                <div className="changeContainer text-center">
                    <img className="svg-filter-red" src="./img/high.svg" alt="high temperature" />
                    <div className="change text-center red"><Odometer value={growthPercentage} format="d" />%</div>
                </div> 
            </div>

        </div>
        
        <div className="legend flex flex-row justify-center flex justify-center w-full md:justify-end md:mt-0">
            <div className="w-1/3 flex flex-col rounded overflow-hidden statshadow text-center text-yellow-600">
                <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-yellow-100 text-xl lg:text-3xl font-bold font-sans"><span className="mx-2"><Odometer value={mainData.currentStats.active} format="(,ddd)" /></span></div>
                <div className="py-1 w-full bg-yellow-200 text-sm lg:text-base font-semibold font-sans"><span className="mx-2 active">Active</span></div>
            </div> 
            <div className="w-1/3 mx-2 flex flex-col rounded overflow-hidden statshadow text-center text-green-600">
                <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-green-100 text-xl lg:text-3xl font-bold font-sans"><span className="mx-2"><Odometer value={mainData.currentStats.recovered} format="(,ddd)" /></span></div>
                <div className="py-1 w-full bg-green-200 text-sm lg:text-base font-semibold font-sans"><span className="mx-2 recovered">Recovered</span></div>
            </div> 
            <div className="w-1/3 flex flex-col rounded overflow-hidden statshadow text-center text-gray-600">
                <div className="h-16 pt-2 flex flex-auto items-center justify-center bg-gray-200 text-xl lg:text-3xl font-bold font-sans"><span className="mx-2"><Odometer value={mainData.currentStats.deaths} format="(,ddd)" /></span></div>
                <div className="py-1 w-full bg-gray-300 text-sm lg:text-base font-semibold font-sans"><span className="mx-2 deaths">Deaths</span></div>
            </div>
        </div>
    </div>
  );
}

export default InfoTile;


