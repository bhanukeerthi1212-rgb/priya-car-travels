import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    days: 1
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/car/${id}`)
      .then(res => setCar(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can post to backend or show confirmation
    alert(`Booking confirmed for ${formData.days} day(s)!`);
    navigate('/booking-success');
;
  };

  if (!car) return <div className="text-center mt-5">Loading car details...</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Booking: {car.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={car.image} alt={car.name} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Number</label>
              <input
                type="text"
                name="contact"
                className="form-control"
                required
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Number of Days</label>
              <input
                type="number"
                name="days"
                className="form-control"
                min="1"
                value={formData.days}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <strong>Total Cost: ₹{formData.days * car.pricePerDay}</strong>
            </div>

            <button type="submit" className="btn btn-success">Confirm Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
