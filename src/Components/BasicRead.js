import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BasicRead = () => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch Users Data
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.error("Error fetching users:", err));

        // Fetch Products Data
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="container p-5">
            <h1 className="text-center">Basic Read</h1>

            {/* Users Section */}
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th>Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="text-center">
                            <td>{user.name}</td>
                            <td>{user.company.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Products Section */}
            <div className="mt-5">
                <h2 className="text-center">Product List</h2>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    {products.map((product, index) => (
                        <div key={index} className="card p-3 shadow-sm" style={{ width: "200px" }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="card-img-top"
                                style={{ height: "150px", objectFit: "contain" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p><strong>Id:</strong> {product.id}</p>
                                <p><strong>Rate:</strong> {product.rating?.rate || "N/A"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BasicRead;
