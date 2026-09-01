// components/Projects.jsx
import React from 'react';
import Ecommerce from '../assets/images/Ecommerce.jpg';
import Booking from '../assets/images/Booking.jpg';
import Blog from '../assets/images/Blog.jpg';
import CloudKitchen from '../assets/images/cloudkitchen.jpg';

const projects = [
    { title: "E-commerce Platform", tech: "Laravel + React", img: Ecommerce ,link:'https://github.com/htoo31772-os/ecommerce.git'},
    { title: "Medical Booking", tech: "Laravel + React", img: Booking ,link:'https://github.com/htoo31772-os/careBooking'},
    { title: "Personal Blog", tech: "Laravel + React", img: Blog ,link:'https://github.com/htoo31772-os/tech-blog-frontend.git'},
    { title: "Clouc Kitchen", tech: "Laravel + React", img: CloudKitchen ,link:'https://github.com/htoo31772-os/Cloud-Kitchen.git'}
];

const Projects = () => {
    return (
        <section id="projects" className="py-5 bg-white" data-aos="fade-up">
            <div className="container py-5">
                {/* Adjusted Header Design */}
                <div className="mb-5">
                    <span className="text-primary fw-bold text-uppercase tracking-wider">| FEATURED PROJECTS SHOWCASE</span>
                    <div className="bg-primary mt-2" style={{ width: '60px', height: '4px' }}></div>
                </div>

                <div className="row g-4">
                    {projects.map((proj, idx) => (
                        <div className="col-md-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="card h-100 border-0 shadow-sm project-card">
                                <div className="overflow-hidden">
                                    <img src={proj.img} className="card-img-top project-img" alt={proj.title} />
                                </div>
                                <div className="card-body p-4">
                                    <h5 className="fw-bold">{proj.title}</h5>
                                    <p className="text-primary small fw-semibold mb-3">{proj.tech}</p>
                                    <a className='btn btn-sm btn-dark px-3' href={proj.link}>GitHub</a>
                                    
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