// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  "https://i.ibb.co/4J1k8zK/work-5382501-640.jpg",
  "https://i.ibb.co/frKdD8R/people-1979261-1280.jpg",
  // Add more image URLs here
  
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          {index === currentIndex && (
            <img src={image} alt={`Slide ${index}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
