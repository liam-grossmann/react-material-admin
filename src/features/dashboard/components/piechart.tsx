import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Customers by Region',
    },
  },
};

export const data = {
  labels: ['North America', 'Western Europe', 'Eastern Europe', 'Middle East & Africa', 'Australasia'],
  datasets: [
    {
      data: [19450, 12120, 5431, 2956, 1902],
      backgroundColor: [
        'rgba(20, 94, 168, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(25, 118, 210, 0.5)',
        'rgba(108, 173, 237, 0.3)',
        'rgba(206, 228, 249, 0.2)',
      ],
      borderColor: [
        'rgba(20, 94, 168, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(25, 118, 210, 1)',
        'rgba(108, 173, 237, 1)',
        'rgba(206, 228, 249, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie options={options}  data={data} />;
}
