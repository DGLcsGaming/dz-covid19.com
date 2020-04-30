import React, { useContext } from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { currentStatsContext } from "../contexts/currentStatsContext";
import { dailyStatsContext } from "../contexts/dailyStatsContext";
import { WilayasContext, wilayasContext } from "../contexts/wilayasContext";
import Flickity from "react-flickity-component";
import { useTranslation } from "react-i18next";
import "chartjs-plugin-datalabels";
import Modal from "react-modal";

function Graph() {
  const { t } = useTranslation();
  const [currentStats, setCurrentStats] = useContext(currentStatsContext);
  const [dailyStats, setDailyStats] = useContext(dailyStatsContext);
  const [wilayas, setWilayas] = useContext(wilayasContext);
  const infoTileData = {
    labels: [t("General.Active"), t("General.Recovered"), t("General.Deaths")],
    datasets: [
      {
        data: [currentStats.active, currentStats.recovered, currentStats.deaths],
        backgroundColor: ["#eeb34e", "#38a169", "#718096"],
        hoverBackgroundColor: ["#eeb34e", "#38a169", "#718096"],
      },
    ],
  };
  // Preparing Wilayas data
  const wilayaslabels = [];
  const newCasesData = [];
  const newDeathsData = [];
  var filteredWilayas = wilayas.filter((wilaya) => wilaya.new_cases > 0);
  filteredWilayas.sort((a, b) => b.new_cases - a.new_cases);
  filteredWilayas.forEach((wilaya) => {
    wilayaslabels.push(wilaya.name);
    newCasesData.push(wilaya.new_cases);
  });

  // Preparing Daily Cases data
  const labels = [];
  const data = [];
  dailyStats.forEach((day) => {
    var customDate = new Date(day.date);
    labels.push(customDate.getMonth() + 1 + "-" + customDate.getDate());
    data.push(day.confirmed);
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: t("Graph.NewCases"),
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data,
      },
    ],
  };
  return (
    <div className="graph">
      {/* <Modal
        isOpen={false}
        /* onRequestClose={() => setModalIsOpen(false)} 
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 99999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "100vh",
            paddingRight: "10vw",
            paddingLeft: "10vw",
          },
        }}
        contentLabel="Notification"> */}
      <Flickity
        options={{
          adaptiveHeight: true,
          wrapAround: true,
          autoPlay: 3000,
          pauseAutoPlayOnHover: true,
          selectedAttraction: 0.2,
          friction: 0.8,
        }}>
        <div className="slider-item">
          <div className="title text-center">{t("Graph.NewCasesPerWilaya")}</div>
          <Bar
            height={250}
            data={{
              datasets: [
                {
                  label: "حالات جديدة",
                  backgroundColor: "#de3700",
                  data: newCasesData,
                },
              ],
              labels: wilayaslabels,
            }}
            options={{
              plugins: {
                datalabels: {
                  display: true,
                  color: "black",
                  font: {
                    weight: "bold",
                  },
                  align: "end",
                  anchor: "end",
                },
              },
              scales: {
                xAxes: [
                  {
                    ticks: {
                      autoSkip: false,
                      maxRotation: 75,
                      minRotation: 45,
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      beginAtZero: true,
                      suggestedMax: filteredWilayas.length !== 0 ? filteredWilayas[0].new_cases + 1 : 0,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className="slider-item">
          <div className="title text-center">{t("Graph.Daily")}</div>
          <Line
            id="dailynewcases"
            height={150}
            data={chartData}
            options={{
              plugins: {
                datalabels: {
                  display: false,
                },
              },
              scales: {
                xAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxRotation: 90,
                      minRotation: 0,
                    },
                  },
                ],
              },
            }}
            legend={{ display: false }}
          />
        </div>
        <div className="slider-item">
          <div className="title text-center">{t("Graph.Distribution")}</div>
          <Doughnut
            /* height={150} */
            id="doughnut"
            options={{
              plugins: {
                datalabels: {
                  display: false,
                },
              },
              responsive: true,
              legend: {
                position: "bottom",
              },
              title: {
                display: false,
                text: "",
              },
              animation: {
                animateScale: true,
                animateRotate: true,
              },
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                      return previousValue + currentValue;
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percentage = Math.floor((currentValue / total) * 100 + 0.5);
                    switch (tooltipItem.index) {
                      case 0:
                        return currentValue + ` ${t("General.Active")} (` + percentage + "%)";
                      case 1:
                        return currentValue + ` ${t("General.Recovered")} (` + percentage + "%)";
                      case 2:
                        return currentValue + ` ${t("General.Deaths")} (` + percentage + "%)";
                      default:
                        return currentValue + " (" + percentage + "%)";
                    }
                  },
                },
              },
            }}
            data={infoTileData}
            /* height={100} */
            legend={{ display: true }}
          />
        </div>
      </Flickity>
      {/*  </Modal> */}
    </div>
  );
}

export default Graph;
