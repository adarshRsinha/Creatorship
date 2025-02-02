import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {backend_uri} from '../constants/Uri';
import { useNavigate } from 'react-router-dom';
import './BusinessDetails.css';

const BusinessDetails = () => {
    const [name, setCompanyName] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [offer, setOffer] = useState('');
    const [needs, setNeeds] = useState('');
    const [equityOffered, setEquityOffered] = useState('');
    const [creators, setCreators] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();
  
    useEffect(() => {
      fetchCreators();
    }, []);
  
    const fetchCreators = async () => {
        const token = localStorage.getItem('token');
      const response = await axios.get(`${backend_uri}/creator`, {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          } 
      });
      setCreators(response.data);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('No token found');
          }
          const response = await axios.post(`${backend_uri}/business`, 
            { name, website, email, address, description, needs, equityOffered },
            { 
              headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              } 
            }
          );
          console.log('Business creation response:', response.data);
          alert('Business profile created');
        } catch (error) {
          console.error('Error creating business profile:', error.response ? error.response.data : error.message);
          if (error.response && error.response.status === 401) {
            alert('Authentication failed. Please log in again.');
            // Redirect to login page
            navigate('/login');
          } else {
            alert('An error occurred while creating the profile');
          }
        }
      };
      // const handleShareEquity = async (creatorId) => {
      //   const equity = prompt('Enter equity percentage to share:');
      //   if (equity) {
      //     try {
      //       const token = localStorage.getItem('token');
      //       await axios.put(`${backend_uri}/equity-request/creator/${creatorId}`, 
      //         { equity },
      //         { headers: { 
      //           'Authorization': `Bearer ${token}`,
      //           'Content-Type': 'application/json'
      //         }  }
      //       );
      //       alert('Equity share request sent!');
      //     } catch (error) {
      //       console.error('Error sending equity share request:', error);
      //     }
      //   }
      // };

      const handleShareEquity = async (creatorId, creatorEmail) => {
        const equityInput = prompt('Enter equity percentage to share:');
        const equity = parseFloat(equityInput); // Convert input to a number

        if (isNaN(equity) || equity < 0 || equity > 100) {
            alert('Please enter a valid equity percentage between 0 and 100.');
            return;
        }

        if (equityInput) {
            setLoading(true); // Start loading state
            try {
                const token = localStorage.getItem('token');
                await axios.put(`${backend_uri}/equity-request/creator/${creatorId}`,
                    { equity },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );
                alert('Equity share request sent!');

                // Navigate to email client
                window.location.href = `mailto:${creatorEmail}?subject=Equity Share Request&body=Dear Creator,%0D%0A%0D%0AI would like to request an equity share of ${equity}% in your business.%0D%0A%0D%0AThank you!`;

            } catch (error) {
                console.error('Error sending equity share request:', error);
                alert('An error occurred while sending the request.');
            } finally {
                setLoading(false); // End loading state
            }
        }
    };
    return (
        <div className="container">
            <h2 className="title">Creators to connect with</h2>
            {creators.map((creator) => (
                <div key={creator._id} className="creatorCard">
                    <h3 className="creatorName">{creator.name}</h3>
                    <p className="creatorInfo">
                        <span className="label">Email:</span> {creator.email}
                    </p>
                    <p className="creatorInfo">
                        <span className="label">Expertise:</span> {creator.expertise}
                    </p>
                    <p className="creatorInfo">
                        <span className="label">Portfolio:</span> {creator.portfolio}
                    </p>
                    <p className="creatorInfo">
                        <span className="label">Instagram:</span> {creator.instagram}
                    </p>
                    <p className="creatorInfo">
                        <span className="label">Twitter:</span> {creator.twitter}
                    </p>
                    <button
                        className="button"
                        onClick={() => handleShareEquity(creator._id, creator.email)}
                    >
                        Share Equity
                    </button>
                </div>
            ))}
        </div>
    );
  }

  export default BusinessDetails;