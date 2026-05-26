import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Vanilla CSS', 'TailwindCSS', 'Framer Motion']
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Authentication']
    },
    {
      title: 'Tools & Cloud Services',
      skills: ['Amazon Web Services (AWS)', 'Razorpay Integration', 'Git & GitHub', 'Vite', 'Postman']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-panel">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items badge-cloud">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge glass-panel">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
