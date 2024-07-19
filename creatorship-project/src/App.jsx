import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BusinessForm from './profile/BusinessForm';
import CreatorForm from './profile/CreatorForm';
import Home from './profile/Home';
import Contact from "./profile/ContactForm";
import Footer from './components/Footer';
import LoginSignup from './profile/LoginSignup';
import './App.css';

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create-business" element={<BusinessForm />} />
        <Route path="/create-creator" element={<CreatorForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
