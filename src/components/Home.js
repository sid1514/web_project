
import'./Home.css';
import CarList from "./CarList";

import {  Icon, Input } from "semantic-ui-react";
import HomeImageSlider from './ImageSlider';
import { useSelector } from "react-redux";


const Home=()=>{
  const auth = useSelector((state) => state.auth);

 
    return(
<>
     
<div style={{margin:'10px'}}>
  <div className="Home">
    <div className="select_area" >
      <Input placeholder="type your area" icon='location' size='mini' id="select_areaInput"></Input>
      <Icon name="location arrow" size="large" color='teal' onClick={()=>{alert("hello")}} />
    </div>
      <div  className="info-container">
        <span ><HomeImageSlider/></span>
        <span>
          <p style={{width:"50vh",paddingLeft:"5vh",paddingTop:"8vh",fontSize:'7vh',color:"white"}}>
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