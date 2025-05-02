"use client"

import React, { useEffect } from "react";
import { myAppHook } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ProductType {
    id?: number;
    name: string;
    address?: string;
    year: number;
    email?: number;
}

const Students: React.FC = () => {

    const { isloading, authToken } = myAppHook();
    const router = useRouter();
    const [products, setProducts] = React.useState<ProductType[]>([]);

    //check authToken
    useEffect(() => {
        if(!authToken){
            router.push("/auth");
            return;
        }

        fetchAllProducts();
    }, [authToken, isloading] )

    //list all products
    const fetchAllProducts = async() => {
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get.php`)
            setProducts(response.data);
        }catch(error){
            console.log(`Error fetching products: ${error}`)
        }
    }

  return<>
        <div className="container-fluid py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="fw-bold text-primary mb-1">Student Directory</h2>
                            <p className="text-muted">This store is run 100% by the students of this university</p>
                        </div>
                    </div>
                    
                    <div className="card border-0 shadow-lg rounded-3 overflow-hidden">
                        <div className="card-header bg-primary p-0">
                            <div className="d-flex justify-content-between align-items-center p-3">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-people-fill text-white fs-4 me-2"></i>
                                    <h5 className="text-white mb-0 fw-bold">Student List </h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="badge bg-white text-primary rounded-pill px-3 py-2 fw-bold">
                                        <i className="bi bi-person-badge me-1"></i>
                                        {products?.length || 0} Students
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="ps-4 py-3">
                                                <div className="text-uppercase text-muted small fw-bold">ID</div>
                                            </th>
                                            <th className="py-3">
                                                <div className="text-uppercase text-muted small fw-bold">Name</div>
                                            </th>
                                            <th className="py-3">
                                                <div className="text-uppercase text-muted small fw-bold">Email</div>
                                            </th>
                                            <th className="py-3">
                                                <div className="text-uppercase text-muted small fw-bold">Year</div>
                                            </th>
                                            <th className="py-3">
                                                <div className="text-uppercase text-muted small fw-bold">Address</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-top-0">
                                        {products.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="text-center py-5">
                                                    <div className="py-5">
                                                        <div className="mb-3">
                                                            <i className="bi bi-people text-muted display-1"></i>
                                                        </div>
                                                        <h4 className="text-muted mb-3">No Students Found</h4>
                                                        <p className="text-muted mb-4">Get started by adding students to the directory</p>
                                                        <button className="btn btn-primary rounded-pill px-4">
                                                            <i className="bi bi-plus-circle me-2"></i> Add First Student
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            products.map((singleProduct, index) => (
                                                <tr key={index} className="border-bottom">
                                                    <td className="ps-4">
                                                        <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 fw-bold">
                                                            #{singleProduct.id}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar me-3 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: "42px", height: "42px"}}>
                                                                <span className="fw-bold">{singleProduct.name.charAt(0).toUpperCase()}</span>
                                                            </div>
                                                            <div>
                                                                <div className="fw-bold">{singleProduct.name}</div>
                                                                <div className="small text-muted d-md-none">Student</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <i className="bi bi-envelope text-muted me-2"></i>
                                                            <span>{singleProduct.email}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {singleProduct.year === 1 ? (
                                                            <span className="badge bg-info">Year 1</span>
                                                        ) : singleProduct.year === 2 ? (
                                                            <span className="badge bg-success">Year 2</span>
                                                        ) : singleProduct.year === 3 ? (
                                                            <span className="badge bg-warning text-dark">Year 3</span>
                                                        ) : singleProduct.year === 4 ? (
                                                            <span className="badge bg-danger">Year 4</span>
                                                        ) : (
                                                            <span className="badge bg-secondary">Uncategorized</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <i className="bi bi-geo-alt text-muted me-2"></i>
                                                            <span>{singleProduct.address}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        {products.length > 0 && (
                            <div className="card-footer bg-white border-top-0 py-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="text-muted small">
                                        Showing <span className="fw-bold">{products.length}</span> students
                                    </div>
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination pagination-sm mb-0">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default Students;