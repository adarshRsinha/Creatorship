import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { backend_uri } from '../constants/Uri';
import axios from "axios";
import './CreatorForm.css';

const CreatorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [expertise, setExpertise] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const[instagram, setInstagram]=useState('');
  const[twitter, setTwitter]=useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
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
        navigate('/creator-details');
      } catch (error) {
        console.error('Error creating creator profile:', error);
    alert(`Error creating creator profile: ${error.message}`);
      }
    };

  return (
    <>
    <div className="content-wrapper">
        <div className="image-content1">
        <a href="https://ibb.co/48bzMFH"><img src="https://i.ibb.co/Byhbjf9/monetizing-content-6918852-1280-1.jpg" alt="monetizing-content-6918852-1280-1" border="0"/></a>
        </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Creator Details</h4>
              <p className="card-description">
                Tell us about your skills and experience!
              </p>
              <form className="forms-sample" onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <p className="card-description">Contact Details</p>
                  <div className="row">
                    <div className="col-md-6">
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
                  <div className="form-group">
                    <label htmlFor="exampleInputPortfolio">Expertise</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPortfolio"
                      placeholder="Expertise"
                      name="expertise"
                      value={expertise}
                      onChange={(e) => setExpertise(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPortfolio">Portfolio</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPortfolio"
                      placeholder="Portfolio URL"
                      name="portfolio"
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea2">Instagram</label>
                    <textarea
                      className="form-control"
                      id="exampleTextarea2"
                      rows="4"
                      name="instagram"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea2">Twitter</label>
                    <textarea
                      className="form-control"
                      id="exampleTextarea2"
                      rows="4"
                      name="twitter"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="button" className="btn btn-light" onClick={() => navigate('/creator-details')}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorForm;
