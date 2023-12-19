import'./Home.css';
import { Container, Dropdown } from "semantic-ui-react";
import {useState} from 'react';
import {Button} from "semantic-ui-react";

import CarData from './CarData';
const SearchCar=()=>{
  
    const [filteredCarsData,setFilteredcars]=useState();
    const options = [
        { key: 'BMW', text: 'BMW', value: 'BMW' },
        { key: 'Mercedes-Benz', text: 'Mercedes-Benz', value: 'Mercedes-Benz' },
        { key: 'Audi', text: 'Audi', value: 'Audi' },
        { key: 'Jaguar', text: 'Jaguar', value: 'Jaguar' },
        // Add more options as needed
      ];
      const handleSearch = () => {
        //Filter the car data based on selectedOption, minPrice, and maxPrice
       filteredCarsData = CarData.filter(car => {
       const meetsBrandCriteria = selectedOption === '' || car['car brand'] === selectedOption;
        const meetsMinPriceCriteria = minPrice === null || car['car price'] >= minPrice;
         const meetsMaxPriceCriteria = maxPrice === null || car['car price'] <= maxPrice;
        return meetsBrandCriteria && meetsMinPriceCriteria && meetsMaxPriceCriteria;
          
       });};
      const [selectedOption, setSelectedOption] = useState('');
    
      const handleDropdownChange = (event, v) => {
        setSelectedOption(v.value);
      };
      
      const minPriceOptions = [
        { key: '0', text: '0', value: 0 },
        { key: '10000', text: '1,00,000', value: 10000 },
        { key: '20000', text: '2,00,000', value: 20000 },
        // Add more options as needed
      ];
    
      const maxPriceOptions = [
        { key: '10000', text: '1,00,000', value: 10000 },
        { key: '20000', text: '2,00,000', value: 20000 },
        { key: '30000', text: '3,00,000', value: 30000 },
        // Add more options as needed
      ];
    
      const [minPrice, setMinPrice] = useState(null);
      const [maxPrice, setMaxPrice] = useState(null);
    
      const handleMinPriceChange = (event, v) => {
        setMinPrice(v.value);
      };
    
      const handleMaxPriceChange = (event, v) => {
        setMaxPrice(v.value);
      };
      return(<>
      <div className="search-container">
      
      <Dropdown
        placeholder="Select Car"
        fluid
        selection
        options={options}
        value={selectedOption}
        onChange={handleDropdownChange}
     
      />
        <Dropdown
        placeholder="Min Price"
        fluid
        selection
        options={minPriceOptions}
        value={minPrice}
        onChange={handleMinPriceChange}
      />
      <Dropdown
        placeholder="Max Price"
        fluid
        selection
        options={maxPriceOptions}
        value={maxPrice}
        onChange={handleMaxPriceChange}
      />
      
      <Button id="search_button" inverted color='teal' onClick={handleSearch}>Search</Button>
      
      </div>
      <div>
    
     </div> 
      
      </>)
}
export default SearchCar;