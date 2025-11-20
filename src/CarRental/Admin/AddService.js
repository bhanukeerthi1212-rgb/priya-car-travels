import axios from 'axios';
import React, { useState } from 'react';

const AddService = () => {
    const [serviceName, setServiceName] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const serviceData = {
            serviceName,
            serviceType,
            servicePrice,
            serviceDescription,
        };

        axios.post("https://priya-car-travels-api.onrender.com/services", serviceData)
            .then((res) => alert("Service added successfully!"))
            .catch((err) => console.error("Error adding service:", err));
    };

    return (
        <div className="container p-5">
            <h3>Add a New Service</h3>
            <form onSubmit={submitHandler}>
                <input
                    name="serviceName"
                    placeholder="Service Name"
                    className="form-control mb-3"
                    onChange={(e) => setServiceName(e.target.value)}
                    value={serviceName}
                />
                <input
                    name="serviceType"
                    placeholder="Service Type"
                    className="form-control mb-3"
                    onChange={(e) => setServiceType(e.target.value)}
                    value={serviceType}
                />
                <input
                    name="servicePrice"
                    placeholder="Service Price"
                    type="number"
                    className="form-control mb-3"
                    onChange={(e) => setServicePrice(e.target.value)}
                    value={servicePrice}
                />
                <textarea
                    name="serviceDescription"
                    placeholder="Service Description"
                    className="form-control mb-3"
                    rows="4"
                    onChange={(e) => setServiceDescription(e.target.value)}
                    value={serviceDescription}
                />
                <button type="submit" className="btn btn-primary w-100">
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddService;
