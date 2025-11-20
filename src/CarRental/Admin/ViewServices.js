import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewServices = () => {
    const [services, setServices] = useState([]);
    const [serviceName, setServiceName] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [id, setId] = useState('');

    const API = "https://priya-car-travels-api.onrender.com/services";

    // Fetch all services
    useEffect(() => {
        axios.get(API)
            .then((res) => setServices(res.data))
            .catch((err) => console.log(err));
    }, []);

    // Delete a service
    const deleteService = (serviceId) => {
        axios.delete(`${API}/${serviceId}`)
            .then(() => {
                alert("Service deleted successfully!");
                setServices(services.filter((service) => service.id !== serviceId));
            })
            .catch((err) => console.log(err));
    };

    // Fetch single service for edit
    const getOneService = (serviceId) => {
        axios.get(`${API}/${serviceId}`)
            .then((res) => {
                setServiceName(res.data.serviceName);
                setServiceType(res.data.serviceType);
                setServicePrice(res.data.servicePrice);
                setServiceDescription(res.data.serviceDescription);
                setId(res.data.id);
            })
            .catch((err) => console.log(err));
    };

    // Update service
    const updateService = (e) => {
        e.preventDefault();

        axios.put(`${API}/${id}`, {
            id,
            serviceName,
            serviceType,
            servicePrice,
            serviceDescription,
        })
            .then(() => {
                alert("Service updated successfully!");
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container p-5">
            <h2>View Services</h2>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, index) => (
                        <tr key={index}>
                            <td>{service.serviceName}</td>
                            <td>{service.serviceType}</td>
                            <td>{service.servicePrice}</td>
                            <td>{service.serviceDescription}</td>
                            <td>
                                <button
                                    onClick={() => getOneService(service.id)}
                                    data-bs-target="#update"
                                    data-bs-toggle="modal"
                                    className="btn btn-primary me-3"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteService(service.id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Update Modal */}
            <div className="modal fade" id="update">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Update Service Details</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateService}>
                                <input
                                    placeholder="Service Name"
                                    value={serviceName}
                                    className="form-control mb-3"
                                    onChange={(e) => setServiceName(e.target.value)}
                                />
                                <input
                                    placeholder="Service Type"
                                    value={serviceType}
                                    className="form-control mb-3"
                                    onChange={(e) => setServiceType(e.target.value)}
                                />
                                <input
                                    placeholder="Service Price"
                                    type="number"
                                    value={servicePrice}
                                    className="form-control mb-3"
                                    onChange={(e) => setServicePrice(e.target.value)}
                                />
                                <textarea
                                    placeholder="Service Description"
                                    value={serviceDescription}
                                    className="form-control mb-3"
                                    rows="4"
                                    onChange={(e) => setServiceDescription(e.target.value)}
                                />

                                <button type="submit" className="btn btn-success w-100">
                                    Update Service
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewServices;
