import React, { useEffect } from 'react';
import CarCard from './CarCard';
import './car.css'
import { Input} from 'semantic-ui-react';
import { useState } from 'react';
import WhyFrom from './WhyFrom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { selectAuth } from "./LoginSlice";
import { useSelector } from "react-redux";

const CarList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('all');
const [favoriteCar,setFavCar]=useState([])
const [selectCar,setSelectCar]=useState([])
const [CarData,setCarData]=useState([])
const { isAuthenticated, user } = useSelector(selectAuth);
const [LoginUserData,setLoginUser]=useState(user)

useEffect(()=>{
  fetch("http://localhost:4000/getCarsData")
  .then((res) => res.json())
  .then((temp) => setCarData(temp))
  .catch((e) => console.log(e))
},[])
const filterCarsByCategory = (category) => {
  return CarData.filter((car) => {
    if (category === 'featured') {
      return ['BMW', 'Mercedes-Benz', 'Ferrari','Lamborghini','Bugatti'].includes(car.car_brand);
    } else if (category === 'used') {
      return ['Hyundai', 'Kia', 'Porsche', 'Jaguar','toyota'].includes(car.car_brand);
    } else {
      return true;
    }
  }).filter((car) => {
    return (
      car.car_brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.car_model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.car_price.toString().includes(searchTerm)
    );
  });
}; 
let nav=useNavigate()
 

const handleCardClick=(car_brand)=>{
  
  setSelectCar(CarData.filter((c)=>c.car_brand.includes(car_brand)));
 // alert("ok")
 
 if(selectCar.length>0){
  sessionStorage.setItem("selectedcar",JSON.stringify(selectCar))
  nav('./BookCar')
 }
 
}
const handleFavCar=async(car_brand)=>{
  console.log(car_brand)
  setFavCar(CarData.filter((c)=>c.car_brand.includes(car_brand)));
  const userid=LoginUserData.userid
  console.log(userid)
  
  //console.log(favoriteCars)
  

  
  try {
    const response = await axios.post('http://localhost:4000/favoriteCar', {
      userid,
      favoriteCar:favoriteCar
    });

    console.log('Updated user:', response.data);
  } catch (error) {
    console.error('Error updating favorite cars:', error);
  }
 
  
}
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  }
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
  return (
    <>
   
  
   <div className='button-container'> 
    <button onClick={() => handleCategoryChange('featured')} className='b1'>
          Featured Cars
        </button>
        <button onClick={() => handleCategoryChange('used')} className='b1'>Used Cars</button>
        <button onClick={() => handleCategoryChange('all')}className='b1'>All Cars</button>
        <div className='s_container'> 
        <Input placeholder='enter car, brand, price' value={searchTerm} icon='search'
  onChange={handleSearchInput}/>
         <button className='b2'onClick={() => handleCategoryChange('all')} >Search</button>

        
       </div>
       <aside className='select_brand'>
         <select className='dropdown_brand'>
          <option>Ferrari</option>
          <option> BMW </option>
          <option> lamborgani </option>
          <option> Hyundai </option>
         </select>
        </aside>
    </div>
   
    <div className='searched-container'>
        {searchTerm}
       </div>
    
       <div className='featured-container'>
   {filterCarsByCategory(selectedCategory).map((car) => (
     <CarCard
     key={car.car_brand + car.car_model}
     car_image={car.car_image}
     car_brand={car.car_brand}
          car_model={car.car_model}
          car_price={car.car_price}
          number_of_seats={car.number_of_seats}
          Drive_Type={car.Drive_Type} transmission={car.transmission} year={car.year} fuel_type={car.fuel_type} doors={car.doors} Engine_size={car.Engine_size} cylinder={car.cylinder} color={car.color} handleFavCar={handleFavCar}
          handleCardClick={handleCardClick}
          />
          ))}


</div>
   
<div style={{marginTop:'100px',padding:'10px'}}>
  <WhyFrom/>
</div>

    </>
  );
};

export default CarList;
