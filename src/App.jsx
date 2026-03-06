import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <h1 className="contact-title animate-fade-in">Contact Us</h1>
        <p className="contact-subtitle animate-slide-up">Get in touch with us for any inquiries or collaborations</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info animate-slide-left">
          <div className="info-item">
            <h3>Email</h3>
            <p>info@nmit.edu</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 123 456 7890</p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>Siddaganga Institute of Technology<br />
            Tumkur, Karnataka - 572103</p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link animate-bounce">Facebook</a>
            <a href="#" className="social-link animate-bounce">Twitter</a>
            <a href="#" className="social-link animate-bounce">LinkedIn</a>
          </div>
        </div>
        
        <form className="contact-form animate-slide-right" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="animate-input-focus"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="animate-input-focus"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="animate-input-focus"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn animate-pulse">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;