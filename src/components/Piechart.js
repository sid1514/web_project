import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Input, Button } from 'semantic-ui-react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = () => {
  let [Cname, setCname] = useState('');
  let [dataPoints, setDataPoints] = useState([]);
let [Flag,setFlag]=useState(false)
  const carData = [
    { id: 1, car_model: "bmw", price: 100000, quantity: 42 },
    { id: 2, car_model: "odi", price: 100000, quantity: 12 },
    { id: 3, car_model: "mercedes", price: 100000, quantity: 23 },
    { id: 4, car_model: "jaguar", price: 400000, quantity: 12 }
  ];

  const updateDataPoints = (name) => {
    const newDataPoints = carData.map(car => ({
      label: car.car_model,
      y: car[name],
    }));
    setDataPoints(newDataPoints);
  }

  const handleGetCol = () => {
    let k = Object.keys(carData[0]);
    if (k.includes(Cname)) {
      updateDataPoints(Cname);
      localStorage.setItem("cid", Cname);
    } else {
      alert("Enter correct name");
    }
    setFlag(!Flag)
  }

  return (
    <>
      <br />
     
      <div className='key-container'>
        <input placeholder='Enter key' onChange={(e) => { setCname(e.target.value) }} style={{padding:10}}/>
        <br></br>
        <Button onClick={handleGetCol} inverted color={'blue'} style={{margin:10,height:50,width:100}}>Generate Chart</Button>
      </div>
      <div style={{ width: '420px' }}>
       { Flag? <CanvasJSChart options={{
          title: {
            text: "Car Quantity Distribution"
          },
          data: [{
            type: "pie",
            dataPoints: dataPoints
          }]
        }} /> :null }
      </div>
     
    </>
  );
}

export default PieChart;
