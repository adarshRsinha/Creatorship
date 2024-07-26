import React, {useEffect, useState} from 'react'
import "./Simple.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Simple = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mainCont = document.querySelector('.main-cont');
    mainCont.classList.add('enter');
    // Check local storage for user type when the app loads
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const handleDashboardClick = () => {
    if (userType === 'creator') {
      navigate('/creator-details');
    } else if (userType === 'business') {
      navigate('/business-details');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='main-cont'>
      <div className='content'>
        <div className='para'>
          <h1>Your work, everywhere you are</h1>
          <p>The app is open source and your work are saved to an open format, so you'll always have access to them and also the organizations.</p>
        </div>
        <a className='img2' href="https://ibb.co/b3F7342"><img src="https://i.ibb.co/26S56zs/ai-generated-8762055-1280.webp" alt="ai-generated-8762055-1280" border="0"/></a>
      </div>
      <div className='main-image'>
      <a className='img1' href="https://ibb.co/xJSJ2FW"><img src="https://i.ibb.co/qkMkDJK/startup-3267505-960-720.jpg" alt="startup-3267505-960-720" border="0"/></a>
      {/* <button onClick={navigateToBusinessForm} className="fibus-button">Create Business</button> */}
      {localStorage.getItem('token') ? (
          <button className="fibus-button" onClick={handleDashboardClick}>Dashboard</button>
        ) : (
          <Link to='/register' className="fibus-button">Dashboard</Link>
        )}
          
      </div>
    </div>
  )
}

export default Simple;
