"use client"

import React, { useEffect } from "react";
import { myAppHook } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

interface ProductType {
    id?: number;
    title: string;
    description?: string;
    price?: number;
    type?: number;
    file?: string;
    image?: File | null;
}

const Dashboard: React.FC = () => {

    const { isloading, authToken } = myAppHook();
    const router = useRouter();
    const fileRef = React.useRef<HTMLInputElement>(null);
    const [products, setProducts] = React.useState<ProductType[]>([]);
    const [isEdit, setIsEdit] = React.useState<boolean>(false);
    const [formData, setFormData ] = React.useState<ProductType>({
        title: "",
        description: "",
        price: 0,
        type: 1,
        file: "",
        image: null,
    });

    //check authToken
    useEffect(() => {
        if(!authToken){
            router.push("/auth");
            return;
        }

        fetchAllProducts();
    }, [authToken, isloading] )

    //On change event
    const handleOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            setFormData({
                ...formData,
                image: e.target.files[0],
                file: URL.createObjectURL(e.target.files[0]),
            })
        }else{
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            })
        }
    }

    //Form Submit
    const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            if(isEdit){
                // Edit Operation
                const formPayload = new FormData();
                formPayload.append("id", formData.id?.toString() || "");
                formPayload.append("title", formData.title);
                formPayload.append("description", formData.description || "");
                formPayload.append("price", formData.price?.toString() || "");
                formPayload.append("type", formData.type?.toString() || "");
                formPayload.append("_method", "PUT");

                if (formData.image && formData.image instanceof File) {
                    formPayload.append("image", formData.image);
                }

                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/update-product.php`,
                    formPayload,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                fetchAllProducts();
                toast.success(response.data.message);
            }else{
                // Add Operation
                const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/create-product.php`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                
                if(response.data.status){
                    toast.success(response.data.message);
                    setFormData({
                        title: "",
                        description: "",
                        price: 0,
                        type: 1,
                        file: "",
                        image: null,
                    });
                    if(fileRef.current){
                        fileRef.current.value = "";
                    }
                }

                fetchAllProducts();
            }
        }catch(error){
            console.log("Error submitting form", error);
        }
    }

    //list all products
    const fetchAllProducts = async() => {
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-products.php`)
            setProducts(response.data.products);
        }catch(error){
            console.log(`Error fetching products: ${error}`)
        }
    }

    //delete product
    const handleDeleteProduct = async(id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try{
                    const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/delete-product.php`, {
                        data: { id },
                    })
                    if(response.data.status){
                        toast.success(response.data.message);
                        fetchAllProducts();
                    }
                }catch(error){
                    console.log("Error deleting product", error);
                    toast.error("Error deleting product");
                }
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
            }
        });
    }

  return<>
        <div className="container-fluid py-4 bg-light">
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card shadow border-0">
                        <div className="card-header bg-primary d-flex justify-content-between text-white py-3">
                            <h4 className="mb-0 fw-bold">{ isEdit ? "Edit" : "Add" } School Product</h4>
                            {isEdit && (
                            <button 
                                className="btn btn-sm bg-success" 
                                onClick={() => {
                                    setFormData({
                                        title: "",
                                        description: "",
                                        price: 0,
                                        type: 1,
                                        file: "",
                                    })
                                    setIsEdit(false);
                                }}
                            >
                                Add Product
                            </button>
                            )}
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={ handleFormSubmit }>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Product Title</label>
                                    <input 
                                        className="form-control border-secondary" 
                                        name="title" 
                                        placeholder="Enter product title" 
                                        value={formData.title}
                                        onChange={ handleOnChangeEvent }
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Description</label>
                                    <input 
                                        className="form-control border-secondary" 
                                        name="description" 
                                        placeholder="Product description" 
                                        value={formData.description}
                                        onChange={ handleOnChangeEvent }
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Price ($)</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-secondary text-white">$</span>
                                        <input 
                                            className="form-control border-secondary" 
                                            name="price" 
                                            placeholder="0.00" 
                                            type="number" 
                                            value={formData.price}
                                            onChange={ handleOnChangeEvent }
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Type</label>
                                    <select 
                                        className="form-select border-secondary" 
                                        name="type" 
                                        value={formData.type}
                                        onChange={ handleOnChangeEvent }
                                        required
                                    >
                                        <option value="1">Writing Tool</option>
                                        <option value="2">Mathematical Tool</option>
                                        <option value="3">Paper Product</option>
                                    </select>
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Product Image</label>
                                    {formData.file && 
                                        <div className="text-center border rounded p-3 mb-3 bg-white">
                                            <img 
                                                src={formData.file} 
                                                alt="Preview" 
                                                id="bannerPreview" 
                                                className="img-fluid rounded shadow-sm" 
                                                style={{maxHeight: "150px"}} 
                                            />
                                        </div>
                                    }
                                    <input 
                                        className="form-control border-secondary" 
                                        type="file" 
                                        ref={fileRef}
                                        onChange={ handleOnChangeEvent }
                                        id="bannerInput"
                                    />
                                </div>
                                
                                <div className="d-grid mt-4">
                                    <button 
                                        className="btn btn-primary btn-lg fw-bold shadow-sm" 
                                        type="submit">
                                        <i className="bi bi-plus-circle me-2"></i> { isEdit ? "Update" : "Add" } Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card shadow border-0">
                        <div className="card-header bg-primary text-white py-3 d-flex justify-content-between align-items-center">
                            <h4 className="mb-0 fw-bold">School Product List</h4>
                            <span className="badge bg-white text-primary rounded-pill px-3 py-2">
                                {products.length} Items
                            </span>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="ps-4">ID</th>
                                            <th>Title</th>
                                            <th>Type</th>
                                            <th>Banner</th>
                                            <th>Cost</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="text-center py-5">
                                                    <div className="py-4">
                                                        <div className="display-6 text-muted mb-3">No Products Found</div>
                                                        <p>Add your first product to get started</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            products.map((singleProduct, index) => (
                                                <tr key={index}>
                                                    <td className="ps-4">
                                                        <span className="badge bg-secondary rounded-pill">
                                                            {singleProduct.id}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="fw-bold">{singleProduct.title}</div>
                                                        <small className="text-muted">
                                                            {singleProduct.description?.substring(0, 60)}
                                                            {singleProduct.description && singleProduct.description.length > 60 ? '...' : ''}
                                                        </small>
                                                    </td>
                                                    <td>
                                                        {singleProduct.type === 1 ? (
                                                            <span className="badge bg-info">Writing Tool</span>
                                                        ) : singleProduct.type === 2 ? (
                                                            <span className="badge bg-success">Mathematical Tool</span>
                                                        ) : singleProduct.type === 3 ? (
                                                            <span className="badge bg-warning text-dark">Paper Product</span>
                                                        ) : (
                                                            <span className="badge bg-secondary">Uncategorized</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {singleProduct.image ? (
                                                            <img 
                                                                src={singleProduct.image} 
                                                                alt="Product" 
                                                                className="img-thumbnail shadow-sm" 
                                                                style={{width: "120px", height: "70px", objectFit: "cover"}}
                                                            />
                                                        ) : (
                                                            <span className="badge bg-warning text-dark">No image</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <span className="fw-bold text-primary">
                                                            ${singleProduct.price}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2">
                                                            <button 
                                                                className="btn btn-outline-primary btn-sm" 
                                                                onClick={() => {
                                                                    setFormData({
                                                                        id: singleProduct.id,
                                                                        title: singleProduct.title,
                                                                        type: singleProduct.type,
                                                                        description: singleProduct.description,
                                                                        price: singleProduct.price,
                                                                        file: singleProduct.image,
                                                                    })
                                                                    setIsEdit(true);
                                                                }}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                             className="btn btn-outline-danger btn-sm"
                                                             onClick={() => handleDeleteProduct(singleProduct.id!)}
                                                             >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default Dashboard;