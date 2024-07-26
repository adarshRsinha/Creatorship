import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BusinessForm from './profile/BusinessForm';
import CreatorForm from './profile/CreatorForm';
import Home from './profile/Home';
import Contact from "./profile/ContactForm";
import Footer from './components/Footer';
import LoginSignup from './profile/LoginSignup';
import Register from "./profile/Register";
import BusinessDetails from "./profile/BusinessDetails";
import BusinessProfile from './profile/BusinessProfile';
import CreatorDetails from "./profile/CreatorDetails";
import CreatorProfile from './profile/CreatorProfile';
import EquityRequest from './profile/EquityRequest';
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
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/business-details" element={<BusinessDetails />} />
          <Route path="/business-profile" element={<BusinessProfile />} />
          <Route path="/creator-details" element={<CreatorDetails />} />
          <Route path="/creator-profile" element={<CreatorProfile />} />
          <Route path="/equity-requests" element={<EquityRequest/>} />
        </Routes>
        <Footer />
    </Router>
    </>
  );
};

export default App;
