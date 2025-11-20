import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-4 mb-8 mx-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">About Us</h1>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          <strong>Priya Travels</strong> is a trusted name in the travel industry, offering seamless and reliable transportation across India. 
          Our mission is to make every journey memorable by ensuring convenience, safety, and affordability for our valued customers.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
          <p className="text-base leading-relaxed mb-4 text-gray-700">
            To be the most trusted travel partner, connecting people with their destinations through impeccable service.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h2>
          <p className="text-base leading-relaxed text-gray-700">
            To redefine travel in India by offering innovative and customer-centric solutions that make every journey easy and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
