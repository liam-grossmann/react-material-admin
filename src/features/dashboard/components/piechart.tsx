import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['North America', 'Western Europe', 'Eastern Europe', 'Middle East & Africa', 'Australasia'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 12, 5, 3, 2],
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
  return <Pie data={data} />;
}