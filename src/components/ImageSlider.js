import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Create a CSS file for styling



const HomeImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slide_image = [
    
    'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1690202583/autoexpress/2023/07/Best%20luxury%20cars%20-%20July%202023%20header.jpg',
    'https://boit.club/cdn/shop/articles/Your_paragraph_text_5.png?v=1690794931&width=1100','https://i.etsystatic.com/21338436/r/il/c5264c/2516326213/il_570xN.2516326213_6290.jpg'
    
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % slide_image.length);
    }, 3000); // Change the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [slide_image.length]);

  return (
    <div className='image-slider ' >
     <img src={slide_image[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className='img1'/>
      
    </div>
  );
};

export default HomeImageSlider;
