import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass-panel">
            <span className="badge-dot"></span> Available for Work
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Soju Saji</span><br />
            MERN Stack Developer
          </h1>
          
          <p className="hero-description text-secondary">
            I build modern, scalable, and user-friendly web applications. With practical experience in React, Node.js, AWS, and secure payment integrations like Razorpay, I turn complex problems into elegant solutions.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#" className="btn btn-outline">
              Download Resume
            </a>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="GitHub"><FiGithub /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="#" className="social-icon" aria-label="Twitter"><FiTwitter /></a>
            <a href="#contact" className="social-icon" aria-label="Email"><FiMail /></a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel profile-card">
            <div className="profile-image-placeholder">
              {/* This can be replaced with an actual image via URL or import */}
              <div className="avatar-circle">SS</div>
            </div>
            
            <div className="tech-stack-floating">
              <span className="tech-badge react">React</span>
              <span className="tech-badge node">Node.js</span>
              <span className="tech-badge mongo">MongoDB</span>
              <span className="tech-badge aws">AWS</span>
               <span className="tech-badge express">Express.js</span>
            </div>
            
            <div className="card-info">
              <h3>Passionate Developer</h3>
              <p className="text-secondary text-sm">Building Next-Gen Web Apps</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
