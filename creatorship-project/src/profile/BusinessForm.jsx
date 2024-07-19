import React, { useState } from 'react';
import './BusinessForm.css';

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    website: '',
    email: '',
    phone: '',
    creatorReq: '',
    address: '',
    description: '',
    helpReq: ''
  });

  const { website, email, phone, creatorReq, address, description, helpReq } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
    <div className="content-wrapper">
      <div className="image-content1">
      <a href="https://ibb.co/HHk3tPG"><img src="https://i.ibb.co/bK8DsvN/businessform.jpg" alt="businessform" border="0"/></a>
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
                <div className="form-group">
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
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
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
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputCity1">Organization based on</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={onChange}
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
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea2">How creators can help you?</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea2"
                    rows="4"
                    name="helpReq"
                    value={helpReq}
                    onChange={onChange}
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
    </>
  );
};

export default BusinessForm;
