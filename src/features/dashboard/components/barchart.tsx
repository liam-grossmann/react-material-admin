import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Revenue',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Product Sales',
      data: [2000, 1800, 1400, 2400, 2800, 2500, 2100],
      backgroundColor: 'rgba(206, 228, 249, 0.5)',
    },
    {
      label: 'Subscriptions',
      data: [3000, 3500, 4200, 4300, 5000, 5600, 7800],
      backgroundColor: 'rgba(25, 118, 210, 0.5)',
    },
  ],
};

export const BarChart = () => {
  return <Bar options={options} data={data} />;
}



