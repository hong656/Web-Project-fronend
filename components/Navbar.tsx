"use client"

import Link from "next/link";
import { myAppHook } from "@/context/AppProvider";

const Navbar = () => {
    const {logout, authToken} = myAppHook();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
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
                                            className="btn btn-light ms-2" 
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;