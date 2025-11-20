import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cars from './Cars';
import Services from './Services';
import Contact from './Contact';
import Login from './Admin/Login';
import Dashboard from './Admin/Dashboard';
import CarDetails from './CarDetails';
import ErrorPage from './ErrorPage';
import BookingPage from './Admin/BookingPage';
import BookingSuccess from './Admin/BookingSuccess';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/admin' element={<Login />} />
      <Route path='/Cars' element={<Cars />} />
      <Route path='/carDetails/:id' element={<CarDetails />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/book/:id' element={<BookingPage />} />
      <Route path='/booking-success' element={<BookingSuccess />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default Routing;
