import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const BookingSuccess = () => {
  return (
    <div className="container text-center mt-5">
      <div className="animate__animated animate__zoomIn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Success"
          style={{ width: '150px' }}
        />
        <h2 className="mt-4 text-success">Booking Confirmed!</h2>
        <p className="lead">Thank you for booking with Priya Car Travels 🚗</p>
        <Link to="/Cars" className="btn btn-primary mt-3">
          Back to Cars
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
