import React from 'react';
import './Dgraph.css';
import { Chart, plugins, registerables, scales } from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { Label } from 'recharts';
Chart.register(...registerables);

const Home = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'red',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return(
  <div className='charts'>
        <Line data={data} options={options} width={400}/>

      </div>
  )
}