// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { useAuth } from '../contexts/AuthProvider';

// const navItems = [
//   { path: '/', title: 'Home' },
//   { path: '/create-creator', title: 'Creators' },
//   { path: '/create-business', title: 'Businesses' },
//   { path: '/contact', title: 'Contact' },
// ];

const Header = () => {

  // const { isAuthenticated, logout } = useAuth();
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for user type when the app loads
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const handleLogout = () => {
    setUserType(null);
    localStorage.removeItem('userType');
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    // <header className="header">
    //   <div className="logo">
    //   <a href="https://imgbb.com/"><img src="https://i.ibb.co/p1xp0Nj/logo.png" alt="logo" border="0"/></a>
    //   </div>
    //   <div className="navbar">
    //       <ul className="nav">
    //         {navItems.map(({ path, title }) => (
    //           <li key={path}>
    //             <NavLink
    //               to={path}
    //               className="list"
    //             >
    //               {title}
    //             </NavLink>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   <div className="auth-buttons">
    //   {userType ? (
    //       <button type="button" onClick={handleLogout} className="login">Logout</button>
    //     ) : (
    //       <>
    //         <Link to='/login'><button className="login">Login</button></Link>
    //         <Link to='/register'><button className="signup">Try Creatorship free</button></Link>
    //       </>
    //     )}
    //   </div>
    // </header>

    <header className="header">
      <div className="logo">
        <a href="https://imgbb.com/"><img src="https://i.ibb.co/p1xp0Nj/logo.png" alt="logo" border="0" /></a>
      </div>
      <div className="navbar">
        <ul className="nav">
          <li>
            <NavLink to="/" className="list">Home</NavLink>
          </li>
          {userType === 'creator' && (
            <>
              <li>
                <NavLink to="/create-business" className="list">Business</NavLink>
              </li>
              <li>
                <NavLink to="/creator-profile" className="list">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="list">Contact</NavLink>
              </li>
            </>
          )}
          {userType === 'business' && (
            <>
              <li>
                <NavLink to="/create-creator" className="list">Creator</NavLink>
              </li>
              <li>
                <NavLink to="/business-details" className="list">Business</NavLink>
              </li>
              {/* <li>
                <NavLink to="/business-dashboard" className="list">Business Dashboard</NavLink>
              </li> */}
              <li>
                <NavLink to="/business-profile" className="list">Profile</NavLink>
              </li>
            </>
          )}
          {!userType && (
            <>
              <li>
                <NavLink to="/register" className="list">Creator</NavLink>
              </li>
              <li>
                <NavLink to="/register" className="list">Business</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="list">Contact</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="auth-buttons">
        {userType ? (
          <button type="button" onClick={handleLogout} className="logout">Logout</button>
        ) : (
          <>
            <Link to='/login'><button className="login">Login</button></Link>
            <Link to='/register'><button className="signup">Try Creatorship free</button></Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;