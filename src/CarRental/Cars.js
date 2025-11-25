import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Cars = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://priya-car-travels-api.onrender.com/car")
    // ← FIXED API
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container p-5">
            <h1 className="text-center mb-5">{data.length} + Cars</h1>

            <div className="row">
                {data.map((car, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card custom-border">

                            <img 
                                src={car.image} 
                                className="card-img-top"
                                alt={car.name}
                            />

                            <div className="card-body">
                                <h5 className="card-title">{car.name}</h5>
                                <p className="card-text">
                                    <strong>Price per day:</strong> {car.pricePerDay}
                                </p>

                                <div className="d-flex gap-2">
                                    <NavLink to={`/carDetails/${car.id}`}>
                                        <button className="btn btn-primary">Know more</button>
                                    </NavLink>

                                    <NavLink to={`/book/${car.id}`}>
                                        <button className="btn btn-success">Book Now</button>
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Cars;
