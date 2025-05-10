"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <>
      <section className="hero-section text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Our Services</h1>
          <p className="lead fs-4 mb-0">Comprehensive solutions for all your educational supply needs</p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="section-title text-center">What We Offer</h2>
              <p className="lead text-muted">Our school supply store provides a range of services designed to meet the needs of students and educators alike.</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mx-auto mb-4">
                    <i className="bi bi-truck fs-3 text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Delivery Services</h4>
                  <p className="text-muted mb-3">We offer fast and reliable delivery services to ensure you get your supplies when you need them.</p>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Same-day delivery on campus</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Next-day delivery within city limits</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Nationwide shipping available</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mx-auto mb-4">
                    <i className="bi bi-box-seam fs-3 text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Bulk Orders</h4>
                  <p className="text-muted mb-3">Special pricing and handling for large orders to support classrooms and schools.</p>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Discounted rates for bulk purchases</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Custom packaging options</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Dedicated account manager</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mx-auto mb-4">
                    <i className="bi bi-people fs-3 text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Student Discounts</h4>
                  <p className="text-muted mb-3">Special pricing programs to make education more affordable for students.</p>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>10% off with valid student ID</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Loyalty program for repeat customers</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Special promotions during back-to-school season</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mx-auto mb-4">
                    <i className="bi bi-pencil-square fs-3 text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Custom Orders</h4>
                  <p className="text-muted mb-3">Need something specific? We can source special items for your unique requirements.</p>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Personalized stationery</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Custom notebook designs</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Special order international products</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mx-auto mb-4">
                    <i className="bi bi-gift fs-3 text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Gift Services</h4>
                  <p className="text-muted mb-3">Perfect for recognizing academic achievements or special occasions.</p>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Gift wrapping service</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Curated gift baskets for students</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Personalized gift messages</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mx-auto mb-4">
                    <i className="bi bi-headset fs-3 text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Customer Support</h4>
                  <p className="text-muted mb-3">Our friendly student staff is always ready to assist with your questions and needs.</p>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Live chat support</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Email and phone assistance</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Product recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image 
                src="/multi-pencil.png" 
                alt="Colorful School Supplies" 
                width={600} 
                height={400} 
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title mb-4">How It Works</h2>
              <div className="d-flex mb-4">
                <div className="me-4">
                  <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <span className="fw-bold">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="fw-bold">Browse Our Catalog</h4>
                  <p>Explore our extensive collection of high-quality school supplies.</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="me-4">
                  <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <span className="fw-bold">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="fw-bold">Place Your Order</h4>
                  <p>Select your items and choose your preferred delivery option.</p>
                </div>
              </div>
              
              <div className="d-flex">
                <div className="me-4">
                  <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <span className="fw-bold">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="fw-bold">Receive Your Supplies</h4>
                  <p>Get your order delivered right to your doorstep or pick it up in-store.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">Browse our catalog and find the perfect supplies for your educational journey.</p>
          <Link href="/" className="btn btn-light btn-lg px-4">
            <i className="bi bi-shop me-2"></i>Shop Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage; 