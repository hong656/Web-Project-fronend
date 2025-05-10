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
    <section className="bg-primary text-white text-center py-5">
        <div className="container">
            <h1 className="display-4 fw-bold">Welcome to our School Supply Store</h1>
            <p className="lead">Build and manage by passonate students</p>
            <Link href="/auth" className="btn btn-light btn-lg mt-3">Get Started</Link>
        </div>
    </section>
    
    <section className="container text-center my-5">
        <h2 className="fw-bold">Awesome Features</h2>
        <div className="row mt-4">
            <div className="col-md-4">
                <Image src="/file.svg" alt="Feature 1" width={60} height={60}/>
                <h4 className="mt-3">Fast Performance</h4>
                <p>Optimized for speed and efficiency.</p>
            </div>
            <div className="col-md-4">
                <Image src="/window.svg" alt="Feature 2" width={60} height={60}/>
                <h4 className="mt-3">User Friendly</h4>
                <p>Intuitive and easy-to-use design.</p>
            </div>
            <div className="col-md-4">
                <Image src="/globe.svg" alt="Feature 3" width={60} height={60}/>
                <h4 className="mt-3">SEO Ready</h4>
                <p>Boost your search rankings with SEO.</p>
            </div>
        </div>
    </section>
    
    <section className="container my-5">
        <h2 className="fw-bold text-center mb-4">Featured Products</h2>
        
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
        
        {!loading && !error && products.length > 0 && (
          <div className="alert alert-info text-center" role="alert">
            No products found. Check back soon!
          </div>
        )}
        
        {!loading && !error && products.length > 0 && (
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100 shadow-sm hover-shadow transition">
                  <div className="text-center p-3">
                  <img 
                        src={typeof product.image === 'string' 
                            ? product.image 
                            : product.image ? URL.createObjectURL(product.image) : ''}
                        alt="Product" 
                        className="img-thumbnail shadow-sm" 
                        style={{width: "200px", height: "120px", objectFit: "cover"}}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    {product.type === 1 ? (
                      <span className="badge bg-info w-25">Writing Tool</span>
                    ) : product.type === 2 ? (
                      <span className="badge bg-success" style={{width: "120px"}} >Mathematical Tool</span>
                    ) : product.type === 3 ? (
                      <span className="badge bg-warning text-dark w-25">Paper Product</span>
                    ) : (
                      <span className="badge bg-secondary w-25">Uncategorized</span>
                    )}
                    <h5 className="card-title fw-bold mt-2">{product.title}</h5>
                    <p className="card-text flex-grow-1">{product.description || "No description available"}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fw-bold text-primary">
                        ${product.price}
                      </span>
                      <div className="btn btn-outline-primary">View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-4">
          <div className="btn btn-primary btn-lg">View All Products</div>
        </div>
      </section>
    
    <footer className="bg-dark text-light text-center py-4">
        <p className="mb-0">© 2025 Kov Songheng. All rights reserved.</p>
    </footer>
  </>
}