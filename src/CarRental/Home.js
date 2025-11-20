import React from 'react';
import mainBanner from "./assets/luxurious-car-parked-highway-with-illuminated-headlight-sunset.jpg";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section 
      className="d-flex align-items-center text-white" 
      style={{
        backgroundImage: `url(${mainBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="container-fluid">
        <div className="row justify-content-end" style={{ marginLeft: '80px', marginTop: "20px" }}>
          <div className="col-lg-6">
            <h1 className="display-4 h1">
              Your Journey Begins Here<br />Experience Seamless Travel with <span className="text-danger">Priya</span> Travels
            </h1>
            <p className='text-black fs-5 mt-3'>
              Effortless Travel, Unmatched Comfort – Your Perfect Ride Awaits with Priya Travels
            </p>
            <div className="mt-4">
              <NavLink to="/About">
                <button className="btn btn-primary me-3">Know More</button>
              </NavLink>
              <NavLink to="/Cars">
                <button className="btn btn-danger">Book Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
