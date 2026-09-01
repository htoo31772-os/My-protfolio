// components/Skills.jsx
import React from 'react';

const skillData = {
  frontend: [
    { name: 'REACT', color: '#61dafb' },
    { name: 'JS', color: '#f7df1e' },
    { name: 'BOOTSTRAP', color: '#7952b3' }
  ],
  backend: [
    { name: 'LARAVEL', color: '#ff2d20' },
    { name: 'PHP', color: '#777bb4' },
    { name: 'NODE.JS', color: '#339933' }
  ],
  tools: [
    { name: 'MYSQL', color: '#00758f' },
    { name: 'VITE', color: '#646cff' },
    { name: 'GIT', color: '#f05032' }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light" data-aos="fade-up">
      <div className="container py-5">
        {/* Strategy Header: | TECHNICAL SKILL MATRIX */}
        <div className="mb-5 text-center">
          <span className="text-primary fw-bold text-uppercase tracking-wider">| TECHNICAL SKILL MATRIX</span>
          <div className="bg-primary mx-auto mt-2" style={{ width: '60px', height: '4px' }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Frontend Category */}
          <div className="col-lg-4" data-aos="fade-right">
            <div className="skill-card p-4 h-100 shadow-sm bg-dark text-white rounded-4 border-0">
              <div className="mb-4 d-flex flex-column align-items-start">
                <i className="bi bi-window-sidebar me-2 text-info h2"></i>
                <h4 className="fw-bold mb-0">Frontend</h4>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {skillData.frontend.map(skill => (
                  <span key={skill.name} className="badge rounded-pill px-3 py-2" 
                        style={{ backgroundColor: skill.color, color: '#000' }}>{skill.name}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Category */}
          <div className="col-lg-4" data-aos="fade-up">
            <div className="skill-card p-4 h-100 shadow-sm bg-dark text-white rounded-4 border-0">
              <div className="mb-4 d-flex flex-column align-items-start">
                <i className="bi bi-server me-2 text-danger h2"></i>
                <h4 className="fw-bold mb-0">Backend</h4>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {skillData.backend.map(skill => (
                  <span key={skill.name} className="badge rounded-pill px-3 py-2" 
                        style={{ backgroundColor: skill.color, color: '#fff' }}>{skill.name}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Database & Tools Category */}
          <div className="col-lg-4" data-aos="fade-left">
            <div className="skill-card p-4 h-100 shadow-sm bg-dark text-white rounded-4 border-0">
              <div className="mb-4 d-flex flex-column align-items-start">
                <i className="bi bi-tools me-2 text-success h2"></i>
                <h4 className="fw-bold mb-0">Database & Tools</h4>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {skillData.tools.map(skill => (
                  <span key={skill.name} className="badge rounded-pill px-3 py-2" 
                        style={{ backgroundColor: skill.color, color: '#fff' }}>{skill.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;