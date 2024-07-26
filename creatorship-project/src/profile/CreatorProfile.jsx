import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backend_uri } from '../constants/Uri';
import './CreatorProfile.css';

function CreatorProfile() {
    const [profiles, setProfiles] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      expertise: '',
      portfolio: '',
      instagram: '',
      twitter: ''
    });
  
    useEffect(() => {
      fetchProfiles();
    }, []);
  
    const fetchProfiles = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get(`${backend_uri}/creator/creator-profile`, {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          } 
        });
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e, id) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.put(`${backend_uri}/creator/creator-profile/${id}`, formData, {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          } 
        });
        setProfiles(profiles.map(profile => profile._id === id ? response.data : profile));
        setIsEditing(null);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    };
  
    const handleDelete = async (id) => {
      if (window.confirm('Are you sure you want to delete this profile?')) {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('No token found');
          }
          await axios.delete(`${backend_uri}/creator/creator-profile/${id}`, {
            headers: { 
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            } 
          });
          setProfiles(profiles.filter(profile => profile._id !== id));
        } catch (error) {
          console.error('Error deleting profile:', error);
        }
      }
    };
  
  
    return (
  
      <div className="container">
        <h2 className="title">Creator Profiles</h2>
        {profiles.map(profile => (
          <div key={profile._id} className="profileCard">
            {isEditing === profile._id ? (
              <form onSubmit={(e) => handleSubmit(e, profile._id)} className="form">
                <input 
                  className="input"
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Name" 
                  required 
                />
                <textarea 
                  className="textarea"
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="Email Id" 
                  required 
                />
                <textarea 
                  className="textarea"
                  name="expertise" 
                  value={formData.expertise} 
                  onChange={handleInputChange} 
                  placeholder="expertise" 
                  required 
                />
                <textarea 
                  className="textarea"
                  name="portfolio" 
                  value={formData.portfolio} 
                  onChange={handleInputChange} 
                  placeholder="Portfolio URL" 
                  required 
                />
                <textarea 
                  className="textarea"
                  name="instagram" 
                  value={formData.instagram} 
                  onChange={handleInputChange} 
                  placeholder="Instagram URL" 
                  required 
                />
                <textarea 
                  className="textarea"
                  name="twitter" 
                  value={formData.twitter} 
                  onChange={handleInputChange} 
                  placeholder="Twitter URL" 
                  required 
                />
                <div>
                  <button type="submit" className="button">Save Changes</button>
                  <button type="button" onClick={() => setIsEditing(null)} className="cancelButton">Cancel</button>
                </div>
              </form>
            ) : (
              <div>
                <p className="profileInfo"><span className="label">Name:</span> {profile.name}</p>
                <p className="profileInfo"><span className="label">Email:</span> {profile.email}</p>
                <p className="profileInfo"><span className="label">Expertise:</span> {profile.expertise}</p>
                <p className="profileInfo"><span className="label">Portfolio:</span> {profile.portfolio}</p>
                <p className="profileInfo"><span className="label">Instagram:</span> {profile.instagram}</p>
                <p className="profileInfo"><span className="label">Twitter:</span> {profile.twitter}</p>
                <button 
                  onClick={() => {
                    setIsEditing(profile._id);
                    setFormData(profile);
                  }} 
                  className="button"
                >
                  Edit Profile
                </button>
                <button 
                  onClick={() => handleDelete(profile._id)} 
                  className="button deleteButton"
                >
                  Delete Profile
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default CreatorProfile;