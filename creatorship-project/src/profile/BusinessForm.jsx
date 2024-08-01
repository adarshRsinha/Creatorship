import React, { useState } from 'react';
import axios from 'axios';
import { backend_uri } from '../constants/Uri';
import { useNavigate } from 'react-router-dom';
import './BusinessForm.css';

const BusinessForm = () => {
  // const [formData, setFormData] = useState({
  //   website: '',
  //   companyName: '',
  //   email: '',
  //   address: '',
  //   description: '',
  // });

  const [name, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [needs, setNeeds] = useState('');
  const [equityOffered, setEquityOffered] = useState('');
 
  const navigate=useNavigate();

  const onSubmit = async (e) => {
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
        navigate('/business-details');
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

  return (
    <div className='body-form'>
    <div className="content-wrapper">
      <div className="image-content1">
      <a><img src="https://i.ibb.co/bK8DsvN/businessform.jpg" alt="businessform" border="0"/></a>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Business Details</h4>
              <p className="card-description">
              Fill the form below so that we help you connect to creators in
              your niche
              </p>
              <form className="forms-sample" onSubmit={onSubmit}>
                {/* <div className="form-group">
                  <label htmlFor="exampleInputName1">Company Website</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Website"
                    name="website"
                    value={website}
                    onChange={onChange}
                  />
                </div> */}
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Company Website</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Website"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <p className="card-description">Contact Details</p>
                <div className="row">
                  <div className="col-md-6">
                  <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Company Name</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          value={name}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Email address</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="form-group">
                  <label htmlFor="exampleSelectGender">Type of creator you want</label>
                  <select
                    className="form-control"
                    id="exampleSelectGender"
                    name="creatorReq"
                    value={creatorReq}
                    onChange={onChange}
                  >
                    <option value="Youtuber">Youtuber</option>
                    <option value="Soical Media Influencer">Social Media Influencer</option>
                    <option value="Website content writer">Website content writer</option>
                    <option value="Blogger">Blogger</option>
                    <option value="Video Creators">Video Creators</option>
                    <option value="Photographer">Photographer</option>
                  </select>
                </div> */}
                <div className="form-group">
                  <label htmlFor="exampleInputCity1">Organization based on</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea1">What you do?</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea1"
                    rows="4"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea2">How creators can help you?</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea2"
                    rows="4"
                    name="needs"
                    value={needs}
                    onChange={(e) => setNeeds(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea2">Equity Offer</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea2"
                    rows="4"
                    name="equityOffer"
                    value={equityOffered}
                    onChange={(e) => setEquityOffered(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                <button className="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BusinessForm;
