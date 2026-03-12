import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <style>
        {`
          * { box-sizing: border-box; }
          body { 
            margin: 0; 
            min-width: 320px; 
            min-height: 100vh; 
            background-color: #ffffff !important; 
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(50px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes glowTitle {
            0% { text-shadow: 0 0 10px rgba(0,0,0,0.1); }
            50% { text-shadow: 0 0 25px rgba(0,0,0,0.3); }
            100% { text-shadow: 0 0 10px rgba(0,0,0,0.1); }
          }
          @keyframes pulseMap {
            0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2); }
            70% { box-shadow: 0 0 0 15px rgba(0, 0, 0, 0); }
            100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
          }
          @keyframes floatEffect {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          .grand-contact-container {
            font-family: 'Segoe UI', system-ui, sans-serif;
            min-height: 100vh;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            overflow: hidden;
            width: 100%;
          }

          .grand-card {
            background: #ffffff;
            border-radius: 20px;
            border: 2px solid #000000;
            padding: 3rem;
            width: 100%;
            max-width: 1100px;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
            animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            color: #000000;
            position: relative;
          }

          @media (max-width: 768px) {
            .grand-card { grid-template-columns: 1fr; gap: 2.5rem; padding: 2rem; }
          }

          .left-panel { animation: slideInRight 1s ease-out 0.3s both; }
          .right-panel { animation: slideInRight 1s ease-out 0.5s both; }

          .grand-title {
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            animation: glowTitle 3s infinite ease-in-out;
            line-height: 1.1;
            color: #000000;
          }

          .grand-subtitle {
            color: #444444;
            margin-bottom: 2.5rem;
            font-size: 1.1rem;
            line-height: 1.6;
          }

          .contacts-box {
            background: #000000;
            color: #ffffff;
            padding: 1.5rem 2rem;
            border-radius: 15px;
            margin-bottom: 2.5rem;
            animation: floatEffect 4s infinite ease-in-out;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .contacts-box:hover {
            transform: scale(1.03) translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.25);
          }

          .person {
            margin-bottom: 1.2rem;
            padding-bottom: 1.2rem;
            border-bottom: 1px solid #333333;
          }
          .person:last-child {
            margin-bottom: 0; padding-bottom: 0; border-bottom: none;
          }

          .person-name {
            font-weight: 900;
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 0.3rem;
            color: #ffffff;
          }

          .person-phone {
            font-size: 1.3rem;
            color: #dddddd;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .map-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: #000000;
            color: #ffffff;
            text-decoration: none;
            padding: 1.2rem;
            border-radius: 50px;
            font-weight: 900;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            animation: pulseMap 2s infinite;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            border: 2px solid #000000;
            width: 100%;
          }

          .map-button:hover {
            background: #ffffff;
            color: #000000;
            border-color: #000000;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            animation: none;
          }

          .feedback-title {
            font-size: 2.2rem;
            margin-bottom: 2rem;
            font-weight: 900;
            border-bottom: 3px solid #000000;
            padding-bottom: 0.5rem;
            display: inline-block;
            color: #000000;
          }

          .input-group { margin-bottom: 1.5rem; position: relative; }

          .input-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: #000000;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 0.9rem;
          }

          .grand-input {
            width: 100%;
            padding: 1.2rem;
            background: #f9f9f9;
            border: 2px solid #cccccc;
            border-radius: 10px;
            color: #000000;
            font-size: 1.1rem;
            transition: all 0.3s ease;
          }

          .grand-input:focus {
            outline: none;
            border-color: #000000;
            background: #ffffff;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
          }

          .grand-submit {
            background: #000000;
            color: #ffffff;
            border: 2px solid #000000;
            padding: 1.2rem;
            border-radius: 10px;
            font-weight: 900;
            font-size: 1.2rem;
            cursor: pointer;
            width: 100%;
            transition: all 0.4s ease;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-top: 1rem;
          }

          .grand-submit:hover {
            background: #ffffff;
            color: #000000;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            transform: translateY(-2px);
          }

          .success-message {
            background: #000000;
            color: #ffffff;
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
            text-align: center;
            animation: slideInRight 0.5s ease-out;
            font-weight: 900;
            font-size: 1.1rem;
          }
        `}
      </style>

      <div className="grand-contact-container">
        <div className="grand-card">
          
          <div className="left-panel">
            <h1 className="grand-title">Contact Us</h1>
            <p className="grand-subtitle">
              We're here to assist you. Connect directly with our representatives or navigate to our location via GPS mapping.
            </p>

            <div className="contacts-box">
              <div className="person">
                <div className="person-name">SNEHA MS</div>
                <div className="person-phone">
                  <span style={{fontSize: '1.5rem'}}>📱</span> 70195 13706
                </div>
              </div>
              <div className="person">
                <div className="person-name">RITHESH LAL RAJPUTH</div>
                <div className="person-phone">
                  <span style={{fontSize: '1.5rem'}}>📱</span> 63645 57621
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/cUSctRrCvzH6zt5g7?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-button"
            >
               Open GPS Map 🗺️
            </a>
          </div>

          <div className="right-panel">
            <h2 className="feedback-title">Give Feedback</h2>
            
            {submitted && (
              <div className="success-message">
                ✓ Thank you! We have received your feedback.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input 
                  type="text" 
                  className="grand-input" 
                  placeholder="Enter your name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input 
                  type="email" 
                  className="grand-input" 
                  placeholder="Enter your email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="input-group">
                <label className="input-label">Your Message</label>
                <textarea 
                  className="grand-input" 
                  rows="4" 
                  placeholder="Tell us what's on your mind..." 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button type="submit" className="grand-submit">
                Submit Feedback
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}