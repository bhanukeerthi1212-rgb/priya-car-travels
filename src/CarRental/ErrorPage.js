import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImage from '../CarRental/Admin/Error.jpg'; 

const ErrorPage = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
       <img src={errorImage} alt="Error 404" className="w-full max-w-md h-64 object-cover rounded-lg mt-5"  />
  
      <p className="text-lg text-gray-700 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={handleBackToHome}
        className='button '
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
