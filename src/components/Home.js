
import'./Home.css';
import CarList from "./CarList";

import {  Icon, Input } from "semantic-ui-react";
import HomeImageSlider from './ImageSlider';

import NavBar from './NavBar';
const Home=()=>{
  
  
  
    return(
        <>
        <NavBar/>
      
        <div>
        
       
        
        <div className="Home">
        <div className="select_area" >
          <Input placeholder="type your area" icon='location' size='mini' ></Input>
         <Icon name="location arrow" size="large" color='teal' onClick={()=>{alert("hello")}} />
        </div>
        <div  className="info-container">
        <span><HomeImageSlider/></span>
        <span>
       
<p style={{width:"500px",paddingLeft:"50px",paddingTop:"100px",fontSize:'50px'}}>
Rev up your dreams with <b>Turbo Trader !</b>
</p>
        </span>
        
     
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