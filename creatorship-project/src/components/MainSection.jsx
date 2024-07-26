// src/components/MainSection.js
import React, {useEffect, useState} from 'react';
import ImageSlider from './ImageSlider';
import { Link, useNavigate } from 'react-router-dom';
import './MainSection.css';
// import { useEffect } from 'react';

const MainSection = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mainSection = document.querySelector('.main-section');
    mainSection.classList.add('enter');
    // Check local storage for user type when the app loads
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
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
        {userType ? (
            userType === 'creator' ? (
              <Link to='/business-details'>
                <button className="cta-button">Find Business</button>
              </Link>
            ) : (
              <Link to='/creator-details'>
                <button className="cta-button">Find Creator</button>
              </Link>
            )
          ) : (
            <Link to='/register'>
              <button className="cta-button">Try Creatorship free</button>
            </Link>
        )}
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
