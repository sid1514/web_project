import React from 'react';
import { Card, Icon,Image,Label,Button } from 'semantic-ui-react';
import './car.css';

import { useEffect } from 'react';



import { useState } from 'react';
const CarCard = ({car_image,car_brand,car_model,car_price,number_of_seats,Drive_Type,transmission,year,fuel_type,Engine_size,doors,cylinder,color,handleFavCar,handleCardClick}) => {
 

  
  let [owner,setOwner]=useState('1');
  

  

  
  const [featured, setFeatured] = useState(false);
useEffect(()=>{
  
  if(car_brand === 'Hyundai' || car_brand === 'Kia' || car_brand === 'Porsche'|| car_brand==='Lamborghini'|| car_brand==='Jaguar' || car_brand==='toyota'){
    setOwner('2nd Owner')
  }else{
    setOwner('1st Owner')
  }
})
  useEffect(() => {
    if (car_brand === 'Ferrari' || car_brand === 'BMW' || car_brand === 'Mercedes-Benz'|| car_brand==='Lamborghini'|| car_brand==='Bugatti') {
      setFeatured(true);
    }
  }, [car_brand]);

 
  return (
    <>
  
     
  { featured?
  <div >

  <div className='carcard_container' onClick={()=>{handleCardClick(car_brand)}}>
    

   
    <Card >
      <Image src={car_image} wrapped ui={false}  width={200} height={300}/>
      <Card.Content>
       <Card.Header>{car_brand}</Card.Header>
        <Card.Meta>{car_model}</Card.Meta>
        <Card.Description>
         price :{car_price} $
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       
        <span style={{display:'flex',justifyContent:'space-between'}}>

<a>
{number_of_seats} <Icon name='user' />
</a> <a>  {owner}</a>
</span>
       
        
      </Card.Content>

      <div style={{dsiplay:'flex'}}>

      <Label as='a' color='red' width={30} tag>
          Featured
         </Label>
    
      </div>
    </Card>
   
    </div>
    <Button className='addToFavButton' labelPosition='left' onClick={()=>handleFavCar(car_brand)}><Icon name='heart' color='red' size='large'/></Button>
  </div>:
    <div>

    <div className='carcard_container' onClick={()=>{handleCardClick(car_brand)}}>
   
    <Card >
      <Image src={car_image} wrapped ui={false}  width={200} height={300}/>
      <Card.Content>
       <Card.Header>{car_brand}</Card.Header>
        <Card.Meta>{car_model}</Card.Meta>
        <Card.Description>
         price :{car_price} $
        </Card.Description>
      </Card.Content>
      <Card.Content extra >
      <span style={{display:'flex',justifyContent:'space-between'}}>
      <a >
      {number_of_seats} <Icon name='user' />
      </a> 
      <a>{owner}</a>
      </span>
   
    
      </Card.Content>
      
    </Card>
   
    </div>
    <Button className='addToFavButton' labelPosition='left' onClick={()=>handleFavCar(car_brand)}><Icon name='heart' color='red' size='large'/></Button>
    </div>
} 
   
  
  </>
  )
  }
  export default CarCard;
  