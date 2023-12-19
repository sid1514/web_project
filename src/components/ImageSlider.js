import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Create a CSS file for styling



const HomeImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slide_image = [
    'img_1.jpg',
    'img_2.jpg',
    'img_3.jpg','img_4.jpg'
    
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % slide_image.length);
    }, 2000); // Change the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [slide_image.length]);

  return (
    <div className='image-slider ' >
     <img src={slide_image[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className='img1'/>
      
    </div>
  );
};

export default HomeImageSlider;
