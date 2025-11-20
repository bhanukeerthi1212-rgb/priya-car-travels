import axios from 'axios';
import React, { useState } from 'react';

const AddCar = () => {
    const [carName, setCarName] = useState('');
    const [model, setModel] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        // Data to be sent to the backend
        const carData = {
            carName,
            model,
            pricePerDay,
            categories,
            description,
        };

        axios.post("https://priya-car-travels-api.onrender.com/cars", carData)
            .then((res) => alert("Car added successfully!"))
            .catch((err) => console.error("Error adding car:", err));
    };

    return (
        <div className="container p-5">
            <h3 className='text-center'>Add a New Car</h3>
            <form onSubmit={submitHandler}>
                <input
                    name="carName"
                    placeholder="Car Name"
                    className="form-control mb-3"
                    onChange={(e) => setCarName(e.target.value)}
                />
                <input
                    name="model"
                    placeholder="Model"
                    className="form-control mb-3"
                    onChange={(e) => setModel(e.target.value)}
                />
                <input
                    name="pricePerDay"
                    placeholder="Price Per Day"
                    type="number"
                    className="form-control mb-3"
                    onChange={(e) => setPricePerDay(e.target.value)}
                />
                <input
                    name="categories"
                    placeholder="Categories (e.g., SUV, Sedan)"
                    className="form-control mb-3"
                    onChange={(e) => setCategories(e.target.value)}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    className="form-control mb-3"
                    rows="4"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="submit"
                    value="Add Car"
                    className="btn btn-primary w-100"
                />
            </form>
        </div>
    );
};

export default AddCar;
