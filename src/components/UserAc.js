import { useState } from 'react';
import './UserAc.css';
import { Button, Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import CarCard from './CarCard';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout } from './LoginSlice';
import { selectAuth } from "./LoginSlice";
import { useSelector } from "react-redux";

const UserAc=()=>{
  const [BookedCars,setBookedCars]=useState(false)
  const [Favourite,setfavourite]=useState(false)
  const [AccountInfo,setAccountInfo]=useState(false)
  const[favCarData,setFavCarData]=useState([]);
  const[bookedCarDetails,setBookedCarDetails]=useState([]);
  const { isAuthenticated, user } = useSelector(selectAuth);
  const dispatch=useDispatch()
  const nav=useNavigate()
 
   
    useEffect(() => {
      if(isAuthenticated==false){
        nav('/')
      }
      try {
        const userid=user.userid
      
        fetch(`https://turbotraderapi.onrender.com/getFavoriteCar/${userid}`)
          .then((res) => res.json())
          .then((temp) => {
            
            if (temp.length === 0) {
          
              console.log('Favorite car list is empty');
            } else {
              setFavCarData(temp);
            }
          })
          .catch((e) => console.log(e));
        
      } catch (error) {
        
        console.error('Error fetching favorite cars:', error);
      }
    }, []);
    

    useEffect(() => {
      try {
        const userid=user.userid
        fetch(`https://turbotraderapi.onrender.com/getBookedCar/${userid}`)
          .then((res) => res.json())
          .then((temp) => {setBookedCarDetails(temp) })
          .catch((e) => console.log(e));
      } catch (error) {
        console.error('Error fetching booked cars:', error);
      }
    }, []);
    if(bookedCarDetails==null){
      setBookedCarDetails(false)
    }
   
   console.log(bookedCarDetails)
    const handleSignOut=()=>{
      dispatch(logout());
       nav('/')
    }
const selectedButton=(clickedButton)=>{
    switch (clickedButton) {
        case 'BookedCars':
          setBookedCars(true)
          setfavourite(false)
          setAccountInfo(false)
          break;
        case 'Favourite':
         setfavourite(true)
         setBookedCars(false)
         setAccountInfo(false)
          break;
        case 'AccountInfo':
         setAccountInfo(true)
         setBookedCars(false)
         setfavourite(false)
          break;
        default:
            setAccountInfo(true)
          
      }
    }

    const cancelTestDrive=()=>{
      if(bookedCarDetails){
        try{
          const userid=user.userid;
        axios.post(`https://turbotraderapi.onrender.com/cancelBookedCar`,{
          userid:userid
        })}catch(e){
          console.log(e)
        }
      }
      window.location.reload();
    }

    return(
  <>
    <div className='main_userAc'>
      <div className='user_container'>
        <table>
        <tr>
          <td>
            <button onClick={() => selectedButton('BookedCars')}>Booked cars</button>
            <button onClick={() => selectedButton('Favourite')}>Favourite</button>
            <button onClick={() => selectedButton('AccountInfo')}>Account info</button>
            <button onClick={handleSignOut}>Sign out</button>
          </td>     
        </tr>    
        <tr>
           <td>
              <div className='userAcContainer'>
                { 
                BookedCars? 
                <div className='bookedCar_Container'>
                  <h1>your booked cars</h1>
                  <h4 style={{color:'aqua'}}> {bookedCarDetails.car_brand}</h4>
                  
                  { bookedCarDetails?
                    <CarCard
                    key={bookedCarDetails.car_brand + bookedCarDetails.car_model}
                    car_image={bookedCarDetails.car_image}
                    car_brand={bookedCarDetails.car_brand}
                    car_model={bookedCarDetails.car_model}
                    car_price={bookedCarDetails.car_price}
                    number_of_seats={bookedCarDetails.number_of_seats}
                    Drive_Type={bookedCarDetails.Drive_Type} transmission={bookedCarDetails.transmission} year={bookedCarDetails.year} fuel_type={bookedCarDetails.fuel_type} doors={bookedCarDetails.doors} Engine_size={bookedCarDetails.Engine_size} cylinder={bookedCarDetails.cylinder} color={bookedCarDetails.color} 
                    />
                    
                  :<h2>"No booked car here"</h2>
                      
                  }
                 {bookedCarDetails? <Button color='red' onClick={cancelTestDrive}> cancel test drive</Button> :null}
                </div>:null
                  
                }

                { 
                  Favourite? 
                  <div className='favorietCarContainer'>
                    <h2>Your favorite List</h2>          
                    {
                      favCarData.length>0?(
                      favCarData.map((car) => (
                      <CarCard
                      key={car.car_brand + car.car_model}
                      car_image={car.car_image}
                      car_brand={car.car_brand}
                      car_model={car.car_model}
                      car_price={car.car_price}
                      number_of_seats={car.number_of_seats}
                      Drive_Type={car.Drive_Type} transmission={car.transmission} year={car.year} fuel_type={car.fuel_type} doors={car.doors} Engine_size={car.Engine_size} cylinder={car.cylinder} color={car.color} 
                      />
                      ))): <h2>"No favorite car"</h2>
                    }     
                  </div>:null
                }
                {
                  AccountInfo ? 
                  ( 
                    <div className='user_Info'>
                     <label style={{color:'white',fontSize:'20'}}>Name:</label><h3 style={{color:'white'}}> {user.username}</h3>
                     <br></br>
                     <label style={{color:'white'}}>Phone Number: </label><h3 style={{color:'white'}}>{user.phoneNumber}</h3>
                     <br></br>
                      <label style={{color:'white'}}>Email: </label><h3 style={{color:'white'}}> {user.userEmail}</h3>
                    </div>
                  ):null
                  
                }

                
              </div>
            </td>
          </tr> 
        </table>   
      </div>
        <div className='profile_image'>
          <Icon name='user' size='massive' color='white'></Icon>
        </div>
    </div>
</>
    )
}
export default UserAc;