// src/components/MainSection.js
import React, {useEffect} from 'react';
import './MainSection.css';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

const MainSection = () => {
  useEffect(() => {
    const mainSection = document.querySelector('.main-section');
    mainSection.classList.add('enter');
  }, []);
  return (
    <div className="main-section">
    <section className="section">
      <div className="text-content">
        <b>
          <h1>Get More Done with Creatorship</h1>
          </b>
        <p>
          Platform that empowers creators and businesses to establish mutually
          beneficial partnerships through equity. Helping Businesses & Brands articulate & achieve their vision.
        </p>
        <Link to='/account' className="cta-button">Try Creatorship free</Link>
      </div>
    </section>
      <div className="image-content">
        <ImageSlider />
        {/* <a href="https://ibb.co/8XYkrqN"><img src="https://i.ibb.co/4J1k8zK/work-5382501-640.jpg" alt="work-5382501-640" border="0"/></a> */}
      </div>
    </div>
    
  );
};

export default MainSection;
