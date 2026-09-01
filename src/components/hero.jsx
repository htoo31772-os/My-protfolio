// components/Hero.jsx
import React from 'react';
import Typewriter from 'typewriter-effect'; 
import myImage from '../assets/images/myImage4.jpg';

const Hero = () => {
  return (
    <header className="hero-section py-5 bg-dark text-white overflow-hidden">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 text-start" data-aos="fade-right">
            <h1 className="display-3 fw-bold mb-3">Hi, I'm <span className="text-primary">Mg Mg Htoo</span></h1>
            <div className="h2 mb-4 text-info">
              <Typewriter
                options={{
                  strings: ['Full-stack Developer', 'Laravel Enthusiast', 'React Expert'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="lead mb-5 text-secondary">
              Crafting high-performance web applications with modern technologies. 
              I build scalable backends and interactive frontends.
            </p>
            <div className="d-flex gap-3">
              <a href="#projects" className="btn btn-primary btn-lg px-4">View Projects</a>
              <a href="/My_CV.pdf" download="My_CV.pdf" className="btn btn-outline-light btn-lg px-4">Download CV</a>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0 text-center" data-aos="fade-left">
            <img 
              src={myImage} 
              alt="Developer" 
              className="img-fluid rounded-circle shadow-lg border border-primary border-4"
              style={{ maxWidth: '350px' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;