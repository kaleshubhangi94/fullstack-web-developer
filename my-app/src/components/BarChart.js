import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import '../styles/dashboard.css';

ChartJS.register(BarElement, CategoryScale, LinearScale);

function BarChart({ inventory }) {
  const chartData = inventory.reduce((acc, item) => {
    acc[item.make] = (acc[item.make] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(chartData),
    datasets: [
      {
        label: 'Vehicle Count',
        data: Object.values(chartData),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="bar-chart">
      <h3>Inventory Bar Chart</h3>
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
