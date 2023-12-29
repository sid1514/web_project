import React from 'react';
import { Card, Icon,Image,Label,Button } from 'semantic-ui-react';
import './car.css';

import { useEffect } from 'react';

import { useState } from 'react';
const CarCard = ({car_image,car_brand,car_model,car_price,number_of_seats,handleFavCar,handleCardClick,category}) => {
 

  
  let [owner,setOwner]=useState('1');
  
  const [featured, setFeatured] = useState(false);
useEffect(()=>{
  
  if(category=='used'){
    setOwner('2nd Owner')
  }else if(category=='featured' && owner!='2nd Owner'){
    setFeatured(true);
  }
  else{
    setOwner('1st Owner')
  }
})
 

 
  return (
    <>
  
     
  
  <div >

  <div className='carcard_container' onClick={()=>{handleCardClick(car_brand)}}>
    

   
    <Card >
      <Image src={car_image} wrapped ui={false}  width={250} height={300}/>
      <Card.Content>
       <Card.Header>{car_brand}</Card.Header>
        <Card.Meta>{car_model}</Card.Meta>
        <Card.Description>
         price :{car_price} $
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       
        <span style={{display:'flex',justifyContent:'space-between'}}>

<p><h5> 
{ number_of_seats } <Icon name='user' />
  {owner}</h5></p>
</span>
       
        
      </Card.Content>

      <div style={{dsiplay:'flex'}}>

     
    
      </div>
    </Card>
   
    </div>
    <Button className='addToFavButton' labelPosition='left' onClick={()=>handleFavCar(car_brand)}><Icon name='heart' color='red' size='large'/></Button>
  </div>

   
  
  </>
  )
  }
  export default CarCard;
  