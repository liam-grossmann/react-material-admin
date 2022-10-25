import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { blue } from '@mui/material/colors';

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
  labels: ['NA', 'WE', 'EE', 'ME&A', 'AP'],
  datasets: [
    {
      data: [19450, 12120, 5431, 2956, 1902],
      backgroundColor: [
        blue[800],
        blue[600],
        blue[400],
        blue[200],
        blue[100],
      ],
      borderColor: [
        blue[900],
        blue[700],
        blue[500],
        blue[300],
        blue[100],
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie options={options}  data={data} />;
}
