import React from 'react';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [],
  datasets: [
    {
      label: "Resultados",
      data: [],
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
      borderColor: 'rgba(0, 0, 255, 1)',
      borderWidth: 2,
    },
  ],
};


const RadarGraph = ({ results }) => {
  Object.keys(results).forEach((emotion) => {
    if (!data.labels.includes(results[emotion].name)) {
      data.labels.push(results[emotion].name);
      data.datasets[0].data.push(results[emotion].value);
    }
  })
  
  return (<Radar data={data} />);
}



export default RadarGraph;