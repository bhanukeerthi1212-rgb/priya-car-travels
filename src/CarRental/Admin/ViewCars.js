import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewCars = () => {
    const [cars, setCars] = useState([]);
    const [carName, setCarName] = useState('');
    const [model, setModel] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [category, setCategory] = useState('');
    const [description,setDescription] = useState('');
    const [id, setId] = useState('');

    // Fetch cars from the backend
    useEffect(() => {
        axios.get("https://priya-car-travels-api.onrender.com/cars")
            .then((res) => setCars(res.data))
            .catch((err) => console.log(err));
    }, []);

    // Delete a car
    const deleteCar = (carId) => {
        axios.delete(`https://priya-car-travels-api.onrender.com/cars/${carId}`)
            .then(() => {
                alert("Car deleted successfully!");
                setCars(cars.filter((car) => car.id !== carId));
            })
            .catch((err) => console.log(err));
    };

    // Fetch a single car record for editing
    const getOneCar = (carId) => {
        axios.get(`https://priya-car-travels-api.onrender.com/cars/${carId}`)
            .then((res) => {
                setCarName(res.data.carName);
                setModel(res.data.model);
                setPricePerDay(res.data.pricePerDay);
                setCategory(res.data.category);
                setDescription(res.data.description);
                setId(res.data.id);
            })
            .catch((err) => console.log(err));
    };

    // Update car details
    const updateCar = (e) => {
        e.preventDefault();
        axios.put(`https://priya-car-travels-api.onrender.com/cars/${id}`, {
            id,
            carName,
            model,
            pricePerDay,
            category,
            description,
        })
            .then(() => {
                alert("Car updated successfully!");
                window.location.reload(); 
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container p-5">
            <h2>View Cars</h2>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Car Name</th>
                        <th>Model</th>
                        <th>Price Per Day</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => (
                        <tr key={index}>
                            <td>{car.carName}</td>
                            <td>{car.model}</td>
                            <td>{car.pricePerDay}</td>
                            <td>{car.category}</td>
                            <td>{car.description}</td>
                            <td>
                                <button
                                    onClick={() => getOneCar(car.id)}
                                    data-bs-target="#update"
                                    data-bs-toggle="modal"
                                    className="btn btn-primary me-3"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteCar(car.id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            <div className="modal fade" id="update">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Update Car Details</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateCar}>
                                <input
                                    name="carName"
                                    placeholder="Car Name"
                                    value={carName}
                                    className="form-control mb-3"
                                    onChange={(e) => setCarName(e.target.value)}
                                />
                                <input
                                    name="model"
                                    placeholder="Model"
                                    value={model}
                                    className="form-control mb-3"
                                    onChange={(e) => setModel(e.target.value)}
                                />
                                <input
                                    name="pricePerDay"
                                    placeholder="Price Per Day"
                                    type="number"
                                    value={pricePerDay}
                                    className="form-control mb-3"
                                    onChange={(e) => setPricePerDay(e.target.value)}
                                />
                                <input
                                    name="category"
                                    placeholder="Category"
                                    value={category}
                                    className="form-control mb-3"
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                                <button type="submit" className="btn btn-success w-100">
                                    Update Car
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewCars;
