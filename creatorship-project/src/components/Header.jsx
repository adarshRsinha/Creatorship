// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', title: 'Home' },
  { path: '/create-creator', title: 'Creators' },
  { path: '/create-business', title: 'Businesses' },
  { path: '/contact', title: 'Contact' },
];

const Header = () => {

  return (
    <header className="header">
      <div className="logo">
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/p1xp0Nj/logo.png" alt="logo" border="0"/></a>
      </div>
      <div className="navbar">
          <ul className="nav">
            {navItems.map(({ path, title }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="list"
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      <div className="auth-buttons">
        <Link to='/account'><button className="login">Login</button></Link>
        <button className="signup">Try Creatorship free</button>
      </div>
    </header>
  );
};

export default Header;

      {/* <nav className="nav">
        <a href="#products">Home</a>
        <a href="#solutions">Businesses</a>
        <a href="#resources">Creators</a>
        <a href="#pricing">Contact</a>
      </nav> */}