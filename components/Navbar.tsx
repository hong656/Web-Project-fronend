"use client"

import Link from "next/link";
import { myAppHook } from "@/context/AppProvider";
import { useState, useEffect } from "react";

const Navbar = () => {
    const {logout, authToken} = myAppHook();
    const [darkMode, setDarkMode] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Initialize dark mode from localStorage on component mount
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
        if (savedDarkMode) {
            document.documentElement.classList.add('dark-mode');
        }
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    };

    // Toggle fullscreen
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container">
                <Link className="navbar-brand fw-bold d-flex align-items-center" href="/">
                    <i className="bi bi-book me-2"></i>
                    School Supply Store
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                            authToken ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link px-3" href="/">
                                            <i className="bi bi-house-door me-1"></i> Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link px-3" href="/services">
                                            <i className="bi bi-gear me-1"></i> Services
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link px-3" href="/about">
                                            <i className="bi bi-info-circle me-1"></i> About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link px-3" href="/dashboard">
                                            <i className="bi bi-speedometer2 me-1"></i> Dashboard
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link px-3" href="/students">
                                            <i className="bi bi-people me-1"></i> Students
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-light ms-2" onClick={logout}>
                                            <i className="bi bi-box-arrow-right me-1"></i> Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link px-3" href="/">
                                            <i className="bi bi-house-door me-1"></i> Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link px-3" href="/services">
                                            <i className="bi bi-gear me-1"></i> Services
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link px-3" href="/about">
                                            <i className="bi bi-info-circle me-1"></i> About
                                        </Link>
                                    </li>    
                                    <li className="nav-item position-relative">
                                        <Link 
                                            className="btn btn-light ms-2 pt-2" 
                                            href="/auth"
                                        >
                                            <i className="bi bi-box-arrow-in-right me-1"></i> Login
                                        </Link>
                                        <div className="position-absolute mt-1 bg-light rounded shadow p-2 text-primary" 
                                            style={{
                                                display: 'none', 
                                                width: 'max-content', 
                                                minWidth: '180px',
                                                zIndex: 1000,
                                                left: '50%',
                                                transform: 'translateX(-50%)'
                                            }}
                                        >
                                            Log in to manage products
                                        </div>
                                        <style jsx>{`
                                            .nav-item:hover div {
                                            display: block !important;
                                            }
                                        `}</style>
                                    </li>
                                </>
                            )
                        }
                        {/* Dark mode toggle button */}
                        <li className="nav-item ms-2">
                            <button 
                                className="btn btn-light pt-2" 
                                onClick={toggleDarkMode}
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? 
                                    <i className="bi bi-sun-fill"></i> : 
                                    <i className="bi bi-moon-fill"></i>
                                }
                            </button>
                        </li>
                        {/* Fullscreen toggle button */}
                        <li className="nav-item ms-2">
                            <button 
                                className="btn btn-light pt-2" 
                                onClick={toggleFullscreen}
                                aria-label="Toggle fullscreen"
                            >
                                {isFullscreen ? 
                                    <i className="bi bi-fullscreen-exit"></i> : 
                                    <i className="bi bi-fullscreen"></i>
                                }
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;