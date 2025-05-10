"use client";

import Image from "next/image"; 
import Link from "next/link";
import { useState, useEffect } from 'react';
import api from '@/lib/axios';
import React from "react";
import './products.css';

interface ProductType {
    id?: number;
    title: string;
    description?: string;
    price?: number;
    type?: number;
    image?: string | File | null;
}

export default function Home() {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async() => {
      setLoading(true);
      try {
        const response = await api.get(`/get-products.php`);
        setProducts(response.data.products);
        setError(null);
      } catch(error) {
        console.log(`Error fetching products: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  return<>
    <section className="hero-section text-white text-center">
        <div className="container">
            <h1 className="display-3 fw-bold mb-3">Welcome to our School Supply Store</h1>
            <p className="lead fs-4 mb-4">Quality educational supplies for students, by students</p>
            <Link href="/auth" className="btn btn-light btn-lg px-4 py-2 shadow">
              <i className="bi bi-arrow-right-circle me-2"></i>Get Started
            </Link>
        </div>
    </section>
    
    <section className="container py-5">
        <h2 className="section-title text-center mb-5">Our Services</h2>
        <div className="row g-4">
            <div className="col-md-4">
                <div className="feature-card text-center">
                    <div className="feature-icon mx-auto">
                        <i className="bi bi-lightning-charge fs-3 text-primary"></i>
                    </div>
                    <h4 className="fw-bold">Fast Delivery</h4>
                    <p className="text-muted">Get your supplies delivered quickly to your classroom or home.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-card text-center">
                    <div className="feature-icon mx-auto">
                        <i className="bi bi-star fs-3 text-primary"></i>
                    </div>
                    <h4 className="fw-bold">Quality Products</h4>
                    <p className="text-muted">We source only the best quality educational supplies for our customers.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-card text-center">
                    <div className="feature-icon mx-auto">
                        <i className="bi bi-wallet2 fs-3 text-primary"></i>
                    </div>
                    <h4 className="fw-bold">Student Discounts</h4>
                    <p className="text-muted">Special pricing for students to make education more affordable.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section className="bg-light py-5">
        <div className="container">
            <h2 className="section-title text-center mb-5">Featured Products</h2>
            
            {loading && (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading products...</p>
              </div>
            )}
            
            {error && (
              <div className="alert alert-danger text-center" role="alert">
                {error}
              </div>
            )}
            
            {!loading && !error && products.length === 0 && (
              <div className="alert alert-info text-center" role="alert">
                No products found. Check back soon!
              </div>
            )}
            
            {!loading && !error && products.length > 0 && (
              <div className="row g-4">
                {products.map((product) => (
                  <div className="col-md-4 mb-4" key={product.id}>
                    <div className="card h-100 product-card">
                      <div className="text-center p-3">
                      <img 
                            src={typeof product.image === 'string' 
                                ? product.image 
                                : product.image ? URL.createObjectURL(product.image) : ''}
                            alt={product.title} 
                            className="product-img rounded shadow-sm" 
                            style={{width: "100%", height: "200px", objectFit: "cover"}}
                        />
                      </div>
                      <div className="card-body d-flex flex-column">
                        {product.type === 1 ? (
                          <span className="badge bg-info mb-2">Writing Tool</span>
                        ) : product.type === 2 ? (
                          <span className="badge bg-success mb-2">Mathematical Tool</span>
                        ) : product.type === 3 ? (
                          <span className="badge bg-warning text-dark mb-2">Paper Product</span>
                        ) : (
                          <span className="badge bg-secondary mb-2">Uncategorized</span>
                        )}
                        <h5 className="card-title fw-bold">{product.title}</h5>
                        <p className="card-text flex-grow-1 text-muted">{product.description || "No description available"}</p>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <span className="fw-bold fs-5 text-primary">
                            ${product.price}
                          </span>
                          <button className="btn btn-outline-primary">
                            <i className="bi bi-eye me-1"></i>View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="text-center mt-5">
              <Link href="/products" className="btn btn-primary btn-lg px-4">
                <i className="bi bi-grid me-2"></i>View All Products
              </Link>
            </div>
        </div>
      </section>
      
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title mb-4">Why Choose Us?</h2>
              <p className="lead mb-4">We&apos;re not just another school supply store. We&apos;re students ourselves, understanding exactly what you need.</p>
              
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="bi bi-check-circle-fill text-success fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold">Student-Run Business</h5>
                  <p className="text-muted">Our store is managed by students, for students.</p>
                </div>
              </div>
              
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="bi bi-check-circle-fill text-success fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold">Affordable Prices</h5>
                  <p className="text-muted">We offer competitive prices on all school supplies.</p>
                </div>
              </div>
              
              <div className="d-flex">
                <div className="me-3">
                  <i className="bi bi-check-circle-fill text-success fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold">Quality Guaranteed</h5>
                  <p className="text-muted">All our products are carefully selected for quality and durability.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rounded shadow-lg overflow-hidden">
                <Image 
                  src="/stacked-books.jpeg" 
                  alt="School Supplies" 
                  width={600} 
                  height={400} 
                  className="img-fluid"
                  style={{objectFit: "cover", width: "100%", height: "100%"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    
    <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="fw-bold mb-3">School Supply Store</h5>
              <p className="text-muted">Quality educational supplies for students, by students.</p>
              <div className="d-flex mt-3">
                <a href="#" className="text-light me-3"><i className="bi bi-facebook fs-5"></i></a>
                <a href="#" className="text-light me-3"><i className="bi bi-twitter-x fs-5"></i></a>
                <a href="#" className="text-light me-3"><i className="bi bi-instagram fs-5"></i></a>
              </div>
            </div>
            <div className="col-md-2 mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link href="/" className="text-muted text-decoration-none">Home</Link></li>
                <li className="mb-2"><Link href="/about" className="text-muted text-decoration-none">About</Link></li>
                <li className="mb-2"><Link href="/services" className="text-muted text-decoration-none">Services</Link></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Products</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Writing Tools</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Mathematical Tools</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Paper Products</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="fw-bold mb-3">Contact</h6>
              <ul className="list-unstyled">
                <li className="mb-2 text-muted"><i className="bi bi-geo-alt me-2"></i>123 School St, City</li>
                <li className="mb-2 text-muted"><i className="bi bi-telephone me-2"></i>(123) 456-7890</li>
                <li className="mb-2 text-muted"><i className="bi bi-envelope me-2"></i>info@schoolsupply.com</li>
              </ul>
            </div>
          </div>
          <hr className="my-4 bg-secondary" />
          <div className="text-center text-muted">
            <p className="mb-0">© 2025 Kov Songheng. All rights reserved.</p>
          </div>
        </div>
    </footer>
  </>
}