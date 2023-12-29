
import'./Home.css';
import CarList from "./CarList";

import {  Icon, Input ,Dropdown, Button} from "semantic-ui-react";
import HomeImageSlider from './ImageSlider';
import { useState } from 'react';
import NavBar from './NavBar';
const Home=({ onChange })=>{
  
  const priceOptions = [
    { key: '1', text: '$10000 - $20000', value: '10000 - 20000' },
    { key: '2', text: '$21000 - $30000', value: '21000 - $30000' },
    { key: '3', text: '$31000 - $40000', value: '31000 - $40000' },
    { key: '4', text: '$41000+', value: '41000' },
  ];
  
 
    const [selectedPrice, setSelectedPrice] = useState(null);
  
    const handlePriceChange = (e, { value }) => {
      setSelectedPrice(value);
      if (onChange) {
        onChange(value);
      }
    }
  
   
    return(
        <>
      
        <div style={{margin:'10px'}}>
        
        
       
        
        <div className="Home">
        <div className="select_area" >
          <Input placeholder="type your area" icon='location' size='mini' id="select_areaInput"></Input>
         <Icon name="location arrow" size="large" color='teal' onClick={()=>{alert("hello")}} />
        </div>
        <div  className="info-container">
        <span style={{paddingTop:'30px',width:'800px'}}><HomeImageSlider/></span>
        <span>
       
<p style={{width:"450px",paddingLeft:"50px",paddingTop:"80px",fontSize:'70px',color:"white"}}>
Rev up your dreams with <b style={{fontFamily:'revert-layer',color:'black',backgroundColor:'Background'}}>Turbo Trader!</b>
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