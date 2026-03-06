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

      <div className="map-section animate-fade-in">
        <h2>Our Location</h2>
        <iframe 
          className="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.6531145484!2d75.3258!3d13.9140!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7d84fffff!2sSiddaganga%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1678000000" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;