// CarDetailsComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import './Bookcar.css'
import {  Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

import { selectAuth } from "./LoginSlice";
import { useSelector } from "react-redux";
const BookCar = ()=>{
  let nav=useNavigate();
 
let [price,setPrice]=useState(null);
let[carname,setcarName]=useState();
let [featureFlag,setfeatureFlag]=useState(false)
const [bookFlag,setBookFlag]=useState(false)
let[carModel,setCarModel]=useState();


const { isAuthenticated, user } = useSelector(selectAuth);
 
const [selectCar,setselectCar]=useState(JSON.parse(sessionStorage.getItem("selectedcar")))
setInterval(function(){
  if(carname=="Toyota"|| carname=="Honda"){
    setfeatureFlag(true)
  }
},1000)


const handleBookButton=async()=>{
  
   if (isAuthenticated) {
      const userid = user.userid;
    const bookedCar = selectCar[0];
        const response = await axios.post('http://localhost:4000/bookedCar', {
          userid: userid,
          bookedCar: bookedCar
        });
       
        setBookFlag(true);
        alert("car booked");
      } else{
        nav('/');
        alert("You have to login first");
      }
       
     
}



  return (
    <>
   <div className='main_bookCar'>
    <div className='bookcar_container'>
     <h1> Book Your Car </h1>
       
      {selectCar ? (
        <div className='selected_carContainer'>
          <div className='bookcar_image'> <img src= {selectCar[0].car_image} width={500} height={400}/>  </div>
          <p style={{fontSize:'20px'}}>{carname=selectCar[0].car_brand} {carModel=selectCar[0].car_model}</p>
          <p>Price <Icon name='dollar sign'></Icon> {price=selectCar[0].car_price}  {selectCar[0].number_of_seats}<Icon name='user'></Icon></p>
          
        </div>
      ) : (
        <p>No car selected.</p>
      )}
    { selectCar? <div className='cars_details'>
     <h4> details </h4>
        <p>Make: <h5>{selectCar[0].car_brand} </h5></p>
        <p> color:<h5>{selectCar[0].color}</h5> </p>
        <p> Model:<h5>{selectCar[0].car_model}</h5>  </p>
        <p> Drive Type: <h5>{selectCar[0].Drive_Type} <Icon name='life ring'></Icon></h5> </p>
        <p>transmission:<h5>{selectCar[0].transmission} <Icon name='cogs'></Icon></h5>  </p>
        <p>year:<h5> {selectCar[0].year} </h5></p>
        <p>Fuel Type:<h5>{selectCar[0].fuel_type}<Icon name='fuel'></Icon></h5>  </p>
        <p> Engine Size:<h5> {selectCar[0].Engine_size} </h5> </p>
        <p>Doors:<h5>{selectCar[0].doors}</h5>  </p>
        <p>Cylinder: <h5>{selectCar[0].cylinder}</h5> </p> 
       
      </div> :null}
      <div style={{color:'black',padding:10,paddingLeft:20}}>
        <h1>Features for your car</h1>
        <div >
          <table>
            <tr><td>Power Steering {featureFlag?(<Icon name='check'></Icon>):(<Icon name='x'></Icon>)}</td> <td>Power Windows Front {featureFlag?<Icon name='check'></Icon>:<Icon name='x'></Icon>}</td></tr>
            <tr><td>Anti Lock Braking System {featureFlag?<Icon name='check'></Icon>:<Icon name='x'></Icon>}</td> <td>Air Conditioner {featureFlag?<Icon name='check'></Icon>:<Icon name='x'></Icon>}</td></tr>
            <tr><td>Driver Airbag {featureFlag?<Icon name='check'></Icon>:<Icon name='x'></Icon>}</td> <td>Passenger AirBag {featureFlag?<Icon name='check'></Icon>:<Icon name='x'></Icon>}</td></tr>
            <tr><td>Fog Light-Font {featureFlag?<Icon name='check'></Icon>:<Icon name='x'></Icon>}</td> <td>Alloy Wheels {featureFlag?<Icon name='check'></Icon>:<Icon name='x'></Icon>}</td></tr>
             <tr><td>Multi-function Steering Wheel {featureFlag?<Icon name='check'></Icon>:<Icon name='x'></Icon>}</td> </tr>
          </table>
        </div>
      </div>
    </div>
    <div className='payment_details'>
     <div className='seg_pay'>

          <h1>{carname} {carModel}</h1>
          <p><h3 className='fakeprice'>{price+1000}$</h3><h1 style={{color:'red'}}> {price} $</h1></p>
          
          <button className="book_button" onClick={handleBookButton}>BOOK YOUR TEST DRIVE NOW</button>
     </div>
     
          <div className='seg_pay'>
          {bookFlag?  <h3>contact below for booking </h3> :null}
           
          <h2 style={{color:'black'}}>contacts us</h2>
          <p style={{color:'black'}}><Icon name='phone'></Icon> (555) 555-5555</p>
        <a href="https://api.whatsapp.com/send/?phone=1233456789&text&type=phone_number&app_absent=0">
           <h3  style={{color:'green'}}><Icon name='whatsapp' size='large' > chat via whatsapp </Icon></h3> </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p><h5>share: </h5> <a href='https://www.facebook.com/login/'><Icon name='facebook' size='large'></Icon></a> <Icon name='twitter' size='large'></Icon></p>
          </div></div>
    </div>
      
    </>
  );
};

export default BookCar;