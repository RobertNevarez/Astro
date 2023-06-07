import React, { useState } from 'react';
import './Carousel.css';


const carouselimages = [
 "./IMG_0908.jpg",
 "./IMG_0909.jpg",
 "./IMG_0910.jpg",
 "./IMG_0911.jpg",
 "./IMG_0912.jpg",
 "./IMG_0913.jpg",
 "./IMG_0914.jpg",
 "./IMG_0915.jpg",
 "./IMG_0916.jpg",
 "./IMG_0917.jpg",
 "./IMG_0918.jpg",
 "./IMG_0919.jpg",
 "./IMG_0920.jpg",
];

function Carousel  ()  {

   
  const [slideIndex, setSlideIndex] = useState(0);
  
  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % carouselimages.length);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + carouselimages.length) % carouselimages.length);
  };

  return (
   
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
    
    {carouselimages.map((image, index) => (
          <img key={index} src={image} />
        ))}
      
      </div>
      <button className='carousel-control prev' onClick={prevSlide}>
       Prev
      </button>
      <button className='carousel-control next' onClick={nextSlide}>
        Next
      </button>
  
    </div>

  );
};

export default Carousel

