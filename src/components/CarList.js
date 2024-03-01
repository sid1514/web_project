import React, { useEffect } from 'react';
import CarCard from './CarCard';
import './car.css'
import { Input,Dropdown} from 'semantic-ui-react';
import { useState } from 'react';
import WhyFrom from './WhyFrom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardSliders from './CardSlider';
import { selectAuth } from "./LoginSlice";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setNavigating } from './LoginSlice';
const CarList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favoriteCar,setFavCar]=useState([])
  const [selectCar,setSelectCar]=useState([])
  const [CarData,setCarData]=useState([])
  const dispatch=useDispatch();
  const { isAuthenticated, user } = useSelector(selectAuth);
  const [LoginUserData,setLoginUser]=useState(user)
  const[categoryFlag,setCategoryFlag]=useState(false)
  let nav=useNavigate()

  useEffect(()=>{
    fetch(`http://localhost:3001/getCarsData`)
    .then((res) => res.json())
    .then((temp) => setCarData(temp))
    .catch((e) => console.log(e))
  },[])
const filterCarsByCategory = (category) => {
  return CarData.filter((car) => {
    if (category === 'featured') {
      return ['BMW', 'Ford','McLaren','Mercedes-Benz', 'Ferrari','Lamborghini','Bugatti','Volvo'].includes(car.car_brand);
    } else if (category === 'used') {
      return ['Hyundai', 'Kia', 'Porsche', 'Jaguar','Subaru','toyota'].includes(car.car_brand);
    } 
    else if(category === 'upcoming'){
      return ['Honda', 'Toyota', 'Chevrolet', 'Nissan','Audi','Mazda','Lexus','Tesla'].includes(car.car_brand);
    }
    else {
      return true;
    }
  }).filter((car) => {
    return (
      car.car_brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.car_model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.car_price.toString().includes(searchTerm)
    )
  });
}; 
 
const handleCardClick=(car_brand)=>{
  
  setSelectCar(CarData.filter((c)=>c.car_brand.includes(car_brand)));
 // alert("ok")
 
 dispatch(setNavigating(true));
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
    const response = await axios.post(`${process.env.REACT_APP_cars_key}/favoriteCar`, {
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
      setCategoryFlag(true)
    };
    const vehicleType=[
      { key: '1', text: 'luxury', value: 'luxury' },
      { key: '2', text: 'sports', value: 'sports' },
      { key: '3', text: 'sedan', value: 'sedan' },
      { key: '4', text: 'Hybrid', value: 'Hybrid' },
    ]

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
  return (
<>
<div className='button-container'> 
  <button onClick={() => handleCategoryChange('featured')} className='b1'>Featured </button>
  <button onClick={() => handleCategoryChange('used')} className='b1'>Used </button>
  <button onClick={()=>handleCategoryChange('upcoming')} className='b1'> Upcoming </button>
  <button onClick={() => handleCategoryChange('all')}className='b1'>All </button>
  <button onClick={() => setCategoryFlag(false)}className='b1'>Resest</button>
  <div className='s_container'> 
    <Input placeholder='enter car, brand, price' value={searchTerm} icon='search'onChange={handleSearchInput}/>
    <button className='b2'onClick={() => handleCategoryChange('all')} >Search</button>
  </div>
  <aside className='select_brand' >
    <Dropdown className='brand_dropdwon'
      placeholder='Select Brand'
      fluid
      selection
      options={CarBrands}
      onClick={handleSearchInput}
    />
    <Dropdown className='brand_dropdwon'
      placeholder='Select type'
      fluid
      selection
      options={vehicleType}
      onClick={handleSearchInput}
    />
  </aside>
</div>
<span>{searchTerm}</span>
   
{ categoryFlag?   
<section className='cars_section3'>
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
    category={selectedCategory}
  />
    ))}
</section>:null }

<div className='featured-container' id='showCar'>
  <CardSliders SelectedCategory={'featured'} handleCardClick={handleCardClick} handleFavCar={handleFavCar}/> 
  <br></br>
  <CardSliders SelectedCategory={'used'} handleCardClick={handleCardClick} handleFavCar={handleFavCar}/>
  <CardSliders SelectedCategory={'upcoming'} handleCardClick={handleCardClick} handleFavCar={handleFavCar}/>     
</div>
   
<div style={{marginTop:'100px',padding:'10px'}}>
  <WhyFrom/>
</div>

    </>
  );
};

export default CarList;
