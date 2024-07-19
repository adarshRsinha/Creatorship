import React, { useState } from 'react';
import './CreatorForm.css';

const CreatorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    portfolio: '',
    bio: '',
    availability: ''
  });

  const { name, email, phone, expertise, portfolio, bio, availability } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // Handle form submission
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
                  <label htmlFor="exampleSelectExpertise">Expertise</label>
                  <select
                    className="form-control"
                    id="exampleSelectExpertise"
                    name="expertise"
                    value={expertise}
                    onChange={onChange}
                  >
                    <option value="Youtuber">Youtuber</option>
                    <option value="Social Media Influencer">Social Media Influencer</option>
                    <option value="Website content writer">Website content writer</option>
                    <option value="Blogger">Blogger</option>
                    <option value="Video Creator">Video Creator</option>
                    <option value="Photographer">Photographer</option>
                  </select>
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
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea1">Bio</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea1"
                    rows="4"
                    name="bio"
                    value={bio}
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea2">Availability</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea2"
                    rows="4"
                    name="availability"
                    value={availability}
                    onChange={onChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-light">Cancel</button>
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
