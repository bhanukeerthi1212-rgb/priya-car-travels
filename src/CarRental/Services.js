import React from "react";
import "./Services.css";  // IMPORT THIS

const Services = () => {
  const data = [
    {
      name: "Local and Outstation Car Rentals",
      description:
        "Reliable, chauffeur-driven car rentals for city commutes, airport transfers, and long-distance journeys.",
    },
    {
      name: "Corporate Travel Solutions",
      description:
        "Streamlined transportation services tailored for efficiency and professionalism.",
    },
    {
      name: "Group Travel Services",
      description:
        "Comfortable vehicles for family vacations, school trips, or large group outings.",
    },
    {
      name: "Tour Packages",
      description:
        "Explore India's beautiful destinations with curated travel packages.",
    },
    {
      name: "Luxury Travel Services",
      description:
        "Premium vehicles for weddings, events, or special occasions.",
    },
    {
      name: "Event Transportation",
      description:
        "Seamless transportation solutions for weddings and corporate events.",
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Premium Services</h1>

      <div className="services-grid">
        {data.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
