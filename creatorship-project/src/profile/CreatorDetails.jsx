import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backend_uri } from '../constants/Uri';
import { useNavigate } from 'react-router-dom';
import "./CreatorDetails.css";


const CreatorDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [expertise, setExpertise] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const[instagram, setInstagram]=useState('');
    const[twitter, setTwitter]=useState('');
    const [businesses, setBusinesses] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchBusinesses();
    }, []);
  
    const fetchBusinesses = async () => {
        const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('No token found');
          }
      const response = await axios.get(`${backend_uri}/business`, {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
      });
      setBusinesses(response.data);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('No token found');
          }
        await axios.post(`${backend_uri}/creator`, 
          { name, email, expertise, portfolio, instagram, twitter },
          { headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          } }
        );
        alert('Creator profile created');
      } catch (error) {
        console.error('Error creating business profile:', error.response ? error.response.data : error.message);
      }
    };
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        navigate('/login'); // Redirect to login page
    };
    
    const handleRequestEquity = async (businessId) => {
        const equity = prompt('Enter equity percentage to request:');
        if (equity) {
          try {
            const token = localStorage.getItem('token');
            await axios.put(
              `${backend_uri}/equity-request/requests/${businessId}`,
              { equity },
              {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                }
              }
            );
            alert('Equity request sent!');
          } catch (error) {
            console.error('Error sending equity request:', error);
            if (error.response) {
              alert(`Error: ${error.response.data.message}`);
            } else {
              alert('An error occurred while sending the request.');
            }
          }
        }
      };

  return (
    <div className="container"> {/* Use className directly */}
      <h2 className="title">Businesses To connect with</h2>
      {businesses.map(business => (
        <div key={business._id} className="businessCard">
          <h3 className="businessName">{business.name}</h3>
          <p className="businessInfo">
            <span className="label">Website:</span> {business.website}
          </p>
          <p className="businessInfo">
            <span className="label">Email ID:</span> {business.email}
          </p>
          <p className="businessInfo">
            <span className="label">Address:</span> {business.address}
          </p>
          <p className="businessInfo">
            <span className="label">Description:</span> {business.description}
          </p>
          <p className="businessInfo">
            <span className="label">Offer:</span> {business.offer}
          </p>
          <p className="businessInfo">
            <span className="label">Needs:</span> {business.needs}
          </p>
          <p className="businessInfo">
            <span className="label">Equity Offered:</span> {business.equityOffered}%
          </p>
          <p className="businessInfo">Status:
            <span className={`status ${business.status.charAt(0).toUpperCase() + business.status.slice(1)}`}>
              {business.status}
            </span>
            </p> 
          <button 
            className="button" 
            onClick={() => handleRequestEquity(business._id)}
          >
            Request Equity
          </button>
        </div>
      ))}
    </div>
  );
};



export default CreatorDetails;
