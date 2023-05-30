import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const colors = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FF00FF", // Magenta
  "#FFFF00", // Yellow
  // Add more colors as needed
];

const ChartComponent = () => {
  const [covidAll, setCovidAll] = useState([]);
  const [covidCountries, setCovidCountries] = useState([]);
  const [covidHistorical, setCovidHistorical] = useState([]);
  const [label, setLabelData] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]);
  const [dataSet, setDataSet] = useState([
    {
      label: "Dataset 1",
      data: Array.from({ length: 7 }).map(() => Math.random() * 1000),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: Array.from({ length: 7 }).map(() => Math.random() * 1000),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ]);
  const [data, setData] = useState({ labels: label, datasets: dataSet });
  //   const [data, setData] = useState({
  //     labels: ["January", "February", "March", "April", "May", "June", "July"],
  // datasets: [
  //   {
  //     label: "Dataset 1",
  //     data: Array.from({ length: 7 }).map(() => Math.random() * 1000),
  //     borderColor: "rgb(255, 99, 132)",
  //     backgroundColor: "rgba(255, 99, 132, 0.5)",
  //   },
  //   {
  //     label: "Dataset 2",
  //     data: Array.from({ length: 7 }).map(() => Math.random() * 1000),
  //     borderColor: "rgb(53, 162, 235)",
  //     backgroundColor: "rgba(53, 162, 235, 0.5)",
  //   },
  // ],
  //   });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all?limit=10")
      .then((res) => (res ? res.json() : {}))
      .then((json) => setCovidAll(json));
    fetch("https://disease.sh/v3/covid-19/countries?limit=10")
      .then((res) => (res ? res.json() : {}))
      .then((json) => setCovidCountries(json));
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all&limit=10")
      .then((res) => (res ? res.json() : {}))
      .then((json) => setCovidHistorical(json));
  }, []);
  useEffect(() => {
    if (Object.keys(covidHistorical).length != 0) {
      const dts = Object.values(covidHistorical).map((item, i) => ({
        label: Object.keys(covidHistorical)[i],
        data: Object.values(covidHistorical.cases),
        borderColor: colors[i],
        backgroundColor: colors[i],
      }));
      const lbl = Object.values(covidHistorical.cases);
      setLabelData(lbl);
      setDataSet(dts);
      setData({ labels: lbl, datasets: dts });
    }
  }, [covidHistorical]);

  return (
    <div className="w-1/2 mx-auto">
      {data && <Line options={options} data={data} />}
    </div>
  );
};

export default ChartComponent;
