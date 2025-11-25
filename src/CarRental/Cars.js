import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Cars.css";   // ✅ CSS import

const Cars = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://priya-car-travels-api.onrender.com/car") // ✅ correct API
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container p-5">
            <h1 className="text-center mb-5 premium-title">
                {data.length} + Cars Available
            </h1>

            <div className="row">
                {data.map((car, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="car-card">

                            <img
                                src={car.image}
                                className="card-img-top car-img"
                                alt={car.name}
                            />

                            <div className="card-body text-center">
                                <h5 className="car-name">{car.name}</h5>

                                <p className="price-text">
                                    ₹ {car.pricePerDay} / day
                                </p>

                                <div className="d-flex gap-2 justify-content-center">
                                    <NavLink to={`/carDetails/${car.id}`}>
                                        <button className="btn btn-primary btn-sm action-btn">
                                            Know more
                                        </button>
                                    </NavLink>

                                    <NavLink to={`/book/${car.id}`}>
                                        <button className="btn btn-success btn-sm action-btn">
                                            Book Now
                                        </button>
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
