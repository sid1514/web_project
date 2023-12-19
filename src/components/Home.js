
import'./Home.css';
import CarList from "./CarList";
import { useState,useEffect } from 'react';

import HomeImageSlider from './ImageSlider';
import Routing from '../Routing';
import NavBar from './NavBar';
const Home=()=>{
  
  
  
    return(
        <>
        <NavBar/>
      
        <div>
        <div className="Home">
        <HomeImageSlider/>
        <div  className="info-container">
        <h1 className="headline" > "Welcome to Turbo Traders" </h1>


      <p>
      "Rev up your dreams with Turbo Trader - Where Every Ride Begins a New Adventure!"
      </p>
      <p>
      Fuel your passion for precision with Turbo Trader. Where every car is a masterpiece, and every deal is turbocharged for your satisfaction.


      </p>
      </div>
      
      </div>
     <div className="cars-container">
      
      <CarList/>
      </div>
      </div>
      
        </>
    )
}
export default Home;