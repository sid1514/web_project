
import'./Home.css';
import CarList from "./CarList";

import {  Icon, Input ,Dropdown} from "semantic-ui-react";
import HomeImageSlider from './ImageSlider';

import NavBar from './NavBar';
const Home=()=>{
  
  
  
   
    return(
        <>
      
        <div>
        
        
       
        
        <div className="Home">
        <div className="select_area" >
          <Input placeholder="type your area" icon='location' size='mini' id="select_areaInput"></Input>
         <Icon name="location arrow" size="large" color='teal' onClick={()=>{alert("hello")}} />
        </div>
        <div  className="info-container">
        <span><HomeImageSlider/></span>
        <span>
       
<p style={{width:"450px",paddingLeft:"50px",paddingTop:"100px",fontSize:'40px',color:"black"}}>
Rev up your dreams with <b>Turbo Trader !</b>
</p>
        </span>
        
        <span className='select_car_' >
       
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