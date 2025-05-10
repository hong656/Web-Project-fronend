"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      <section className="hero-section text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">About My Project</h1>
          <p className="lead fs-4 mb-0">Learn more about the School Supply Store project</p>
        </div>
      </section>
      
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            {/* Profile Section */}
            <div className="text-center mb-5">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <Image 
                  src="/new-pfp.PNG" 
                  alt="Profile" 
                  className="rounded-circle border border-primary border-3 shadow"
                  width={120}
                  height={120}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="fw-bold" >កូវ សុងហេង</h3>
              <h5 className="fs-5 mb-3">Kov SongHeng</h5>
              <span className="badge bg-primary px-3 py-2 fs-6">Class E7</span>
            </div>

            <div className="card border-0 shadow mb-4">
              <div className="card-body p-4">
                <h2 className="section-title">Project Overview</h2>
                <p className="lead">
                  Welcome to my online school supply store, a comprehensive platform designed as part of my academic project.
                </p>
                <p className="text-muted">
                  This application empowers student employees with a complete management system. Students can create accounts, 
                  securely log in, and efficiently manage the entire product inventory through an intuitive interface that allows 
                  for adding, editing, deleting, and organizing products.
                </p>
                <p className="text-muted">
                  Built with a modern tech stack featuring Next.js for the frontend and PHP for the backend, 
                  the store provides a seamless experience for both administrators and customers. Our user-friendly 
                  interface ensures efficient inventory management while offering customers an enjoyable shopping experience.
                </p>
              </div>
            </div>

            <div className="card border-0 shadow mb-4">
              <div className="card-body p-4">
                <h2 className="section-title">Functionality</h2>
                <p className="text-muted">
                  This website serves dual roles as a customer storefront and an administrative dashboard. As a regular user, you can browse product listings. Alternatively, by logging in or registering, authorized student employees can perform CRUD operations (Create, Read, Update, Delete) on the product catalog and view a list of other student administrators.
                </p>
              </div>
            </div>

            <div className="card border-0 shadow mb-4">
              <div className="card-body p-4">
                <h2 className="section-title">Technology Stack</h2>
                <div className="row g-4 mt-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-3">
                        <i className="bi bi-code-slash fs-4 text-primary"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1">Frontend</h5>
                        <p className="text-muted mb-0">Next.js, Bootstrap</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-3">
                        <i className="bi bi-database fs-4 text-primary"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1">Backend</h5>
                        <p className="text-muted mb-0">PHP, MySQL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow mb-4">
              <div className="card-body p-4">
                <h2 className="section-title">Project Resources</h2>
                
                <h5 className="fw-bold mb-3 mt-4">Hosting Information</h5>
                <div className="list-group mb-4">
                  <div className="list-group-item border-0 d-flex align-items-center bg-light rounded mb-2">
                    <div className="feature-icon me-3" style={{width: "40px", height: "40px"}}>
                      <i className="bi bi-hdd-rack fs-4 text-primary"></i>
                    </div>
                    <div>
                      <strong>Backend (PHP):</strong> AwardSpace
                    </div>
                  </div>
                  <div className="list-group-item border-0 d-flex align-items-center bg-light rounded">
                    <div className="feature-icon me-3" style={{width: "40px", height: "40px"}}>
                      <i className="bi bi-globe fs-4 text-primary"></i>
                    </div>
                    <div>
                      <strong>Frontend (Next.js):</strong> Vercel
                    </div>
                  </div>
                </div>

                <h5 className="fw-bold mb-3">Source Code</h5>
                <div className="list-group">
                  <div className="list-group-item border-0 d-flex align-items-center bg-light rounded mb-2">
                    <div className="feature-icon me-3" style={{width: "40px", height: "40px"}}>
                      <i className="bi bi-github fs-4 text-primary"></i>
                    </div>
                    <div>
                      <strong>Backend Repository:</strong><br />
                      <a href="https://github.com/hong656/Web-Project" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-decoration-none">
                        github.com/hong656/Web-Project
                      </a>
                    </div>
                  </div>
                  <div className="list-group-item border-0 d-flex align-items-center bg-light rounded">
                    <div className="feature-icon me-3" style={{width: "40px", height: "40px"}}>
                      <i className="bi bi-github fs-4 text-primary"></i>
                    </div>
                    <div>
                      <strong>Frontend Repository:</strong><br />
                      <a href="https://github.com/hong656/Web-Project-fronend" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-decoration-none">
                        github.com/hong656/Web-Project-fronend
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary text-white p-4 rounded shadow text-center">
              <h3 className="fw-bold mb-3">Thank you for visiting!</h3>
              <p className="mb-3">
                If you have any questions or would like to learn more about this project, 
                please don&apos;t hesitate to reach out.
              </p>
              <Link href="/" className="btn btn-light px-4 py-2">
                <i className="bi bi-house-door me-2"></i>Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;