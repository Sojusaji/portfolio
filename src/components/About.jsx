import React from 'react';
import { FiCode, FiSmartphone, FiZap } from 'react-icons/fi';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FiCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code is my top priority.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices, from mobile to desktop.'
    },
    {
      icon: <FiZap />,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency to ensure the best user experience.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-text animate-fade-in">
          <h2 className="section-title text-left">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-secondary">
            I am a passionate MERN Stack Developer with a strong foundation in building dynamic and responsive web applications. My journey in tech is driven by a curiosity for how things work and a desire to create tools that make a difference.
          </p>
          <p className="text-secondary">
            With experience in React, Node.js, and cloud services like AWS, I focus on bridging the gap between complex backend logic and intuitive frontend design. I thrive in collaborative environments and am always eager to learn new technologies.
          </p>
        </div>
        
        <div className="about-values">
          {values.map((value, index) => (
            <div key={index} className="value-card glass-panel animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="value-icon">{value.icon}</div>
              <div className="value-content">
                <h3>{value.title}</h3>
                <p className="text-secondary text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
