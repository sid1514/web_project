import { Icon, Label } from 'semantic-ui-react';
import './CardSlider.css';
import CarCard from './CarCard';
import { useState,useEffect,useRef } from 'react';
const Card_Slider =({SelectedCategory,handleCardClick,handleFavCar})=>{
    const [Cars,setCars]=useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_cars_key}/getCarsData`)
        .then((res) => res.json())
        .then((temp) => setCars(temp))
        .catch((e) => console.log(e))
      },[])
      let [scrollcard,setscrollcard]=useState(0);
    const containerRef = useRef();

    const handlescrollLeft=()=>{
         containerRef.current.scrollLeft -= 500;
    }

    const handlescrollRight=()=>{
        containerRef.current.scrollLeft += 500;
        console.log("hello")
    }

    const filterCarsByCategory = (category) => {
        return Cars.filter((car) => {
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
          );
        });
      };
    return(
     
       <div className='main-slider-contianer1'>
       {SelectedCategory=='used'?<Label as='a' color='yellow'  style={{height:"40px",width:'120px',margin:'20px'}} tag> <h4>{SelectedCategory}</h4> </Label>: <Label as='a' color={SelectedCategory=='featured'? 'red':'green'}  style={{height:"40px",width:'120px',margin:'20px'}} tag> <h4>{SelectedCategory}</h4> </Label> }
       <button className="slider-icon-left" onClick={(e)=>handlescrollLeft(e)}> <Icon name='chevron left'  size='large'/></button>
             <div className="slider" style={{scrollLeft:scrollcard}} ref={containerRef}>  
             {
                filterCarsByCategory(SelectedCategory).map((car) => (
                    <div className="slider-card" key={car.car_brand + car.car_model}>
                      <CarCard
                        car_image={car.car_image}
                        car_brand={car.car_brand}
                        car_model={car.car_model}
                        car_price={car.car_price}
                        number_of_seats={car.number_of_seats}
                        Drive_Type={car.Drive_Type}
                        transmission={car.transmission}
                        year={car.year}
                        fuel_type={car.fuel_type}
                        doors={car.doors}
                        Engine_size={car.Engine_size}
                        cylinder={car.cylinder}
                        color={car.color}
                        handleCardClick={handleCardClick}
                        handleFavCar={handleFavCar}
                      />
             </div>))
             }
             </div>
             <button className="slider-icon-right" onClick={(e)=>handlescrollRight(e)} > 
              <Icon name='chevron right' size='large'/>
              </button>
       </div>
       
      
    )
}

export default Card_Slider;