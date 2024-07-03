import React from 'react';
import './home.css';
import { Chart, plugins, registerables, scales } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(...registerables);

const Home = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sensor',
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
 
    return (
    
    <div className='main-values'>
      <div className='top'>
      <div className='lam'>
      <div className='cir'></div>
      <div className='sensor1'>
        <div className='tem1'> Temperature
          Sensor1
          <div className='stick1'></div>
        </div>
       </div>
        
       <div className='sensor2'>
       <div className='tem2'> Temperature
          Sensor2
          <div className='stick2'></div>
        </div>
       </div>
       <div className='sensor3'>
       <div className='tem3'> Temperature
          Sensor3
        <div className='stick3'></div>
        </div>
       </div>
        <div className='sensor4'>
        <div className='tem4'> Temperature
          Sensor4
          <div className='stick4'></div>
        </div>
        </div>
       <div className='sensor5'>
       <div className='tem5'> Temperature
          Sensor5
          <div className='stick5'></div>
        </div>
       </div>
      <div className='linee'></div>
      <div className='emptyy'></div>
      </div>
      <div className='value-items'>
        <div className='value'>
          <h3 className='a1'>sensor1</h3>
          <h3 className='a2'>43</h3>
        </div>
        <div className='value'>
          <h3 className='a1'>sensor2</h3>
          <h3 className='a2'>54</h3>
        </div>
        <div className='value'>
          <h3 className='a1'>sensor3</h3>
          <h3 className='a2'>98</h3>
        </div>
        <div className='value'>
          <h3 className='a1'>sensor4</h3>
          <h3 className='a2'>67</h3>
        </div>
        <div className='value'>
          <h3 className='a1'>sensor5</h3>
          <h3 className='a2'>67</h3>
        </div>
        </div>
      </div>
      
      <div className='charts' style={{'backgroundColor': '#9DB2BF', 'width':'1000px'}}>
        <Line data={data} options={options} width={800} height={250}/>
      </div>
  
    </div>
  );
}
// };

export default Home;
