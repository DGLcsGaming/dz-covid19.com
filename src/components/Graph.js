import React from "react";
import {Doughnut, Line} from 'react-chartjs-2';

const infoTileData = {
	labels: [
		'Active',
		'Recovered',
		'Deaths'
	],
	datasets: [{
		data: [54, 12, 6],
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

const chartData = {
  labels: ['12-03', '13-03', '14-03', '15-03', '16-03', '17-03'],
  datasets: [
    {
      label: 'My First dataset',
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
      data: [27, 28, 38, 54, 60, 72]
    }
  ]
};

function Graph() {
  return (
    <div className="graph">
      <Doughnut id="doughnut" options= {{
    responsive: true,
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Chart.js Doughnut Chart'
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
              case 0: return currentValue + " Active (" +  percentage + "%)";break;
              case 1: return currentValue + " Recovered (" +  percentage + "%)";break;
              case 2: return currentValue + " Deaths (" +  percentage + "%)";break;
              default: return currentValue + " (" +  percentage + "%)";
            }  
          }
        }
      }
    }}  data={infoTileData} height={100} legend={{display: false}}/>
      <div className="title text-center">Daily New Cases</div>
      <Line id="dailynewcases" data={chartData} legend={{display: false}}/>
    </div>
  );
}

export default Graph;
