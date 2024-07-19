import React from 'react';
import './ContactForm.css'; // Assuming you have a CSS file for styling

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, send data to backend or handle state changes
  };

  return (
    <div className='cont2'>
        <div className='main-cont2'>
            <div className='conten2t'>
                <div className='para2'>
                <h1>Contact Us</h1>
                <p>Fill out the form below to get in touch with us.</p>
                </div>
            </div>
            <div className='form-container2'>
                <form onSubmit={handleSubmit} className='contact-form2'>
                <div className='form-group2'>
                    <label htmlFor='name'>First Name:</label>
                    <input type='text' id='name' name='name' required />
                </div>
                <div className='form-group2'>
                    <label htmlFor='name'>Last Name:</label>
                    <input type='text' id='name' name='name' required />
                </div>
                <div className='form-group2'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' required />
                </div>
                <div className='form-group2'>
                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' name='message' rows='4' required></textarea>
                </div>
                <button type='submit' className='submit-button2'>Submit</button>
                </form>
            </div>
        </div>
        <div className='hand-img'>
        <a href="https://ibb.co/yRpsWXw"><img src="https://i.ibb.co/VNxB2t7/handshake-4002834-1280.jpg" alt="handshake-4002834-1280" border="0"/></a>
        </div>
    </div>
  );
};

export default ContactForm;
