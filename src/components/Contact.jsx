import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Placeholder credentials, to be replaced by the user in production
    // Register at emailjs.com to get these keys
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setStatus('success');
          formRef.current.reset();
      }, (error) => {
          setStatus('error');
          console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
        <div className="contact-wrapper">
          <div className="contact-info glass-panel">
            <h3>Contact Information</h3>
            <p className="text-secondary mb-4">
              I'm currently looking for entry-level MERN stack developer opportunities. Feel free to reach out!
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FiMail /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:your.email@example.com" className="text-secondary">your.email@example.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><FiPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <p className="text-secondary">+91 00000 00000</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><FiMapPin /></div>
                <div>
                  <h4>Location</h4>
                  <p className="text-secondary">Available for Remote / Relocation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container glass-panel">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input type="text" id="user_name" name="user_name" required placeholder="John Doe" className="form-control" />
              </div>
              
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input type="email" id="user_email" name="user_email" required placeholder="john@example.com" className="form-control" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows="5" placeholder="How can I help you?" className="form-control"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : <><FiSend /> Send Message</>}
              </button>
              
              {status === 'success' && (
                <div className="form-status success">Message sent successfully! I will get back to you soon.</div>
              )}
              {status === 'error' && (
                <div className="form-status error">Oops! Something went wrong. Please try again later.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
