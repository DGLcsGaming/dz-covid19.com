import React, {useContext} from "react";
import {Doughnut, Line} from 'react-chartjs-2';
import { mainDataContext } from "../contexts/mainDataContext";
import Flickity from "react-flickity-component";

function Graph() {
  const [mainData, setMainData] = useContext(mainDataContext);
  const infoTileData = {
    labels: [
      'Active',
      'Recovered',
      'Deaths'
    ],
    datasets: [{
      data: [mainData.currentStats.active, mainData.currentStats.recovered, mainData.currentStats.deaths],
      backgroundColor: [
      '#eeb34e',
      '#38a169',
      '#718096'
      ],
      hoverBackgroundColor: [
      '#eeb34e',
      '#38a169',
      '#718096'
      ]
    }]
  };
  // Preparing data
  const labels = [];
  const data= [];
  mainData.dailyStats.forEach(day => {
    labels.push(day.date);
    data.push(day.confirmed);
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: 'New Cases Today',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data
      }
    ]
  };
  return (
    <div className="graph">
      <Doughnut id="doughnut" options= {{
    responsive: true,
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: ''
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.floor(((currentValue/total) * 100)+0.5);   
            switch (tooltipItem.index)   {
              case 0: return currentValue + " Active (" +  percentage + "%)";
              case 1: return currentValue + " Recovered (" +  percentage + "%)";
              case 2: return currentValue + " Deaths (" +  percentage + "%)";
              default: return currentValue + " (" +  percentage + "%)";
            }  
          }
        }
      }
    }}  data={infoTileData} height={100} legend={{display: false}}/>
        <Flickity options={{adaptiveHeight: false, wrapAround: true, autoPlay: 3000, pauseAutoPlayOnHover: true, selectedAttraction: 0.2, friction: 0.8}}>
          <div className="slider-item">
            <div className="title text-center">Daily New Cases</div>
            <Line id="dailynewcases" data={chartData} legend={{display: false}}/>
          </div>
          <div className="slider-item">
            <div className="title text-center">Daily New Cases</div>
            <Line id="dailynewcases" data={chartData} legend={{display: false}}/>
          </div>
        </Flickity>
    </div>
  );
}

export default Graph;
