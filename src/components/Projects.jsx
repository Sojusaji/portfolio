import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';
import embWebp from "../assets/project-images/homepage-emb-rolledgold .webp";
import embPng from '../assets/project-images/homepage-emb-rolledgold.png';
import embAdminDashBoardPng from "../assets/project-images/emb-superadmin-dashboard.png";
import embAdminDashBoardWebp from "../assets/project-images/emb-superadmin-dashboard.webp";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Embroidery & Ornament E-Commerce',
      description: 'A full-stack MERN application built for a custom embroidery business. Features secure payment processing via Razorpay, complete admin dashboard for order management, and cloud hosting on AWS.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'AWS'],
      images: {
        webp: embWebp,
        png: embPng
      },
      liveLink: '#',
      githubLink: 'https://github.com/Sojusaji/embroidery-frontend'
    },
    {
      id: 2,
      title: 'Admin Dashboard Analytics & Backend Api ',
      description: 'A comprehensive, data-rich interface providing actionable business insights. Features interactive charts tracking total orders, sales performance, and profit/loss trends, alongside granular analytics identifying top-selling products and regional sales distribution.',
      techStack: ['React', 'Recharts', 'TailwindCSS', 'Node.js'],
      images: {
        webp: embAdminDashBoardWebp,
        png: embAdminDashBoardPng
      },
      liveLink: '#',
      githubLink: 'https://github.com/Sojusaji/embroidery-server'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          Active <span className="text-gradient">Builds</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card glass-panel" key={project.id}>
              <div className="project-image">
                <picture>
                  <source srcSet={project.images.webp} type="image/webp" />
                  <img src={project.images.png} alt={project.title}
                    onError={(e) => console.log("PNG fallback failed:", e.target.src)} />
                </picture>

                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="icon-btn" aria-label="Live Site"><FiExternalLink /></a>
                    <a href={project.githubLink} className="icon-btn" aria-label="GitHub"><FiGithub /></a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc text-secondary">{project.description}</p>

                <div className="tech-tags">
                  <span className="tech-tag status-badge">🚀 In Active Development</span>
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
