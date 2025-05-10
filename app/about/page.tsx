import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      </Head>
      
      <div className="container-fluid py-5 bg-light">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            {/* Hero Section */}
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-primary mb-3">About My Project</h1>
              <div className="d-flex justify-content-center align-items-center mb-4">
                <Image 
                  src="/new-pfp.PNG" 
                  alt="Profile" 
                  className="rounded-circle border border-primary border-3 shadow-sm"
                  width={100}
                  height={100}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="fw-bold" >កូវ សុងហេង</h3>
              <h5 className="text-muted fs-5">Kov SongHeng</h5>
              <span className="badge bg-primary px-3 py-2 mt-2 fs-6" style={{ width: '100px'}}>Class E7</span>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h2 className="text-primary border-bottom border-primary pb-2 mb-4">Project Overview</h2>
                <p className="lead">
                  Welcome to my online school supply store, a comprehensive platform designed as part of my academic project.
                </p>
                <p>
                  This application empowers student employees with a complete management system. Students can create accounts, 
                  securely log in, and efficiently manage the entire product inventory through an intuitive interface that allows 
                  for adding, editing, deleting, and organizing products.
                </p>
                <p>
                  Built with a modern tech stack featuring Next.js for the frontend and PHP for the backend, 
                  the store provides a seamless experience for both administrators and customers. Our user-friendly 
                  interface ensures efficient inventory management while offering customers an enjoyable shopping experience.
                </p>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h2 className="text-primary border-bottom border-primary pb-2 mb-4">Functionality</h2>
                <p>
                    This website serves dual roles as a customer storefront and an administrative dashboard. As a regular user, you can browse product listings. Alternatively, by logging in or registering, authorized student employees can perform CRUD operations (Create, Read, Update, Delete) on the product catalog and view a list of other student administrators.
                </p>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h2 className="text-primary border-bottom border-primary pb-2 mb-4">Technology Stack</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                        <i className="bi bi-code-slash fs-4"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">Frontend</h5>
                        <p className="text-muted mb-0">Next.js, Bootstrap</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                        <i className="bi bi-database fs-4"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">Backend</h5>
                        <p className="text-muted mb-0">PHP, MySQL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h2 className="text-primary border-bottom border-primary pb-2 mb-4">Project Resources</h2>
                
                <h5 className="mb-3">Hosting Information</h5>
                <ul className="list-group mb-4">
                  <li className="list-group-item d-flex align-items-center border-start border-primary border-5">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="bi bi-hdd-rack fs-5 text-primary"></i>
                    </div>
                    <div>
                      <strong>Backend (PHP):</strong> AwardSpace
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center border-start border-primary border-5">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="bi bi-globe fs-5 text-primary"></i>
                    </div>
                    <div>
                      <strong>Frontend (Next.js):</strong> Vercel
                    </div>
                  </li>
                </ul>

                <h5 className="mb-3">Source Code</h5>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center border-start border-primary border-5">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="bi bi-github fs-5 text-primary"></i>
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
                  </li>
                  <li className="list-group-item d-flex align-items-center border-start border-primary border-5">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="bi bi-github fs-5 text-primary"></i>
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
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-primary text-white p-4 rounded-3 shadow">
              <h3 className="mb-3">Thank you for visiting!</h3>
              <p className="mb-0">
                If you have any questions or would like to learn more about this project, 
                please don&apos;t hesitate to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;