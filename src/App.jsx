import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FiGithub, FiLinkedin, FiTwitter, FiChevronUp } from 'react-icons/fi';
import './App.css';

function App() {
  React.useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Contact /></div>
      </main>
      
      <footer className="footer glass-panel">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3 className="text-gradient">Soju Saji</h3>
            <p className="text-secondary">MERN Stack Developer</p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/Sojusaji" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/soju-saji/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="#" el="noopener noreferrer" aria-label="Twitter"><FiTwitter /></a>
          </div>
          
          <div className="footer-bottom">
            <p className="text-secondary">
              © {new Date().getFullYear()} Soju Saji. Built with React & Vanilla CSS.
            </p>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
              <FiChevronUp />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
