import React from 'react'
import { Chart,registerables, scales } from 'chart.js'
import { Line } from 'react-chartjs-2'
import './graph.css';
Chart.register(...registerables);

const Graph=()=> {
    const data={
        labels:['Mon','Tues','Wed','Thu','Fri','Sat','Sun'],
        datasets:[
            {
                label: "DAY",
                borderwidth:2,
                data:[12,24,35,46,58,67,33],
            },
            {
                label:"MONTH",
                borderwidth:2,
                data:[1,18,54,37,86,43,56],
            },
            {
                label:"YEAR",
                borderwidth:2,
                data:[30,56,45,67,24,22,45],
            },
        ],
         
    };
    const options={
        scales:{
            y:{
                beginAtZero:true,
                
            },
        },
    };
  return (
    <div className='chart'>
        <Line data={data} options={options} width={600}/>
    </div>
  );
};

export default Graph