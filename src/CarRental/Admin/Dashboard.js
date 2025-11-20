import React, { useContext, useState } from 'react';
import Welcome from './Welcome';
import ViewEnquiries from './ViewEnquiries';
import AddCar from './AddCar'; 
import ViewCars from './ViewCars'; 
import AddService from './AddService'; 
import ViewServices from './ViewServices'; 
import { loginStatus } from '../../App';
import Login from './Login';

const Dashboard = () => {
  const [view, setView] = useState('');
  const [login , setLogin]= useContext(loginStatus)

  const DashboardView = () => {
    if (view === '') {
      return <Welcome />;
    } else if (view === 'viewEnquirie') {
      return <ViewEnquiries />;
    } else if (view === 'addCar') {
      return <AddCar />; // AddCar component
    } else if (view === 'viewCar') {
      return <ViewCars />; // ViewCars component
    } else if (view === 'addService') {
      return <AddService />; // AddService component
    } else if (view === 'viewService') {
      return <ViewServices />; // ViewServices component
    } else {
      return <h1>Invalid view</h1>;
    }
  };

 if (login){
  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-lg-3 bg-dark text-white p-4" style={{ overflowY: 'auto', minHeight: '80vh' }}>
          <h3 className='mb-3' onClick={() => setView('')}>Admin Dashboard</h3>
          <button className="btn btn-outline-light w-100" onClick={() => setView('addCar')}>Add Car</button>
          <button className="btn btn-outline-light w-100" onClick={() => setView('viewCar')}>View Cars</button>
          <button className="btn btn-outline-light w-100"onClick={() => setView('addService')}>Add Service</button>
          <button className="btn btn-outline-light w-100"onClick={() => setView('viewService')}>View Services</button>
          <button className="btn btn-outline-light w-100" onClick={() => setView('viewEnquirie')}>View Enquiries</button>
          <button  className="btn btn-danger w-100"onClick={() => setLogin(false)}>Logg out</button>
        </aside>
        <div className="col-lg-9" >{DashboardView()}</div>
      </div>
    </div>
  );
 }
 else {
  return <Login/>
 }
};

export default Dashboard;
