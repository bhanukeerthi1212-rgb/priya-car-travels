import React from 'react'
import useCallApi from './CallApi'

const Welcome = () => {

  // 🔥 Replace localhost → Render API
  const cars = useCallApi("https://priya-car-travels-api.onrender.com/cars");
  const services = useCallApi("https://priya-car-travels-api.onrender.com/services");
  const enquiries = useCallApi("https://priya-car-travels-api.onrender.com/enquiry");

  return (
    <div className='container'>
      <h1 className='text-center'>Welcome to Admin Dashboard</h1>

      <div className='row'>

        <div className='col-lg-4'>
          <div className='card'>
            <div className='card-body text-center'>
              <h5 className='card-title'>{cars.length}+</h5>
              <h5 className='card-title'>Cars</h5>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card'>
            <div className='card-body text-center'>
              <h5 className='card-title'>{enquiries.length}+</h5>
              <h5 className='card-title'>Enquiries</h5>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card'>
            <div className='card-body text-center'>
              <h5 className='card-title'>{services.length}+</h5>
              <h5 className='card-title'>Services</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome;
