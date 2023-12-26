
import'./Home.css';
import CarList from "./CarList";

import {  Icon, Input ,Dropdown} from "semantic-ui-react";
import HomeImageSlider from './ImageSlider';

import NavBar from './NavBar';
const Home=()=>{
  
  
  const CarBrands = [
    {
      key: 'BMW',
     
      value: 'BMW',
      image: { avatar: true, src: 'https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png' },
    },
    {
      key: 'Mercedees',
     
      value: 'Mercedees',
      image: { avatar: true, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png' },
    },
    {
      key: 'Mclaren',
    
      value: 'Mclaren',
      image: { avatar: true, src: 'https://pngimg.com/d/Mclaren_PNG47.png' },
    },
    {
      key: 'Ferrari',
      
      value: 'Ferrari',
      image: { avatar: true, src: 'https://i.pinimg.com/originals/cd/36/19/cd3619f9e171f176bf0774017147170d.png' },
    },
    {
      key: 'Jaguar',
    
      value: 'Jaguar',
      image: { avatar: true, src: 'https://i.pinimg.com/originals/9b/a4/c2/9ba4c2b21c708bfd2bee16a90ad766aa.jpg' },
    },
    {
      key: 'Lamborgani',
    
      value: 'Lamborgani',
      image: { avatar: true, src: 'https://w7.pngwing.com/pngs/509/1013/png-transparent-lamborghini-aventador-car-logo-lamborghini-emblem-logo-car.png' },
    },
  ]
    return(
        <>
      
        <div>
        <NavBar/>
        
       
        
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
        <Dropdown className='brand_dropdwon'
    placeholder='Select Brand'
    fluid
    selection
    options={CarBrands}
    
  />
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