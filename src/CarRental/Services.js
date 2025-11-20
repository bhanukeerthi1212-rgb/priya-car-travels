import React from 'react'

const Services = () => {
    const data =[
        {
          name: "Local and Outstation Car Rentals",
          description: "Reliable, chauffeur-driven car rentals for city commutes, airport transfers, and long-distance journeys. Choose from a diverse fleet to match your travel needs."
        },
        {
          name: "Corporate Travel Solutions",
          description: "Streamlined transportation services for businesses, including employee commutes, event logistics, and VIP car rentals. Tailored for efficiency and professionalism."
        },
        {
          name: "Group Travel Services",
          description: "Comfortable and spacious vehicles like tempo travelers and buses for family vacations, school trips, or group outings. Perfect for large groups."
        },
        {
          name: "Tour Packages",
          description: "Explore India's stunning destinations with curated travel packages designed for families, solo travelers, or groups. Includes sightseeing, transport, and stays."
        },
        {
          name: "Luxury Travel Services",
          description: "Premium vehicles for weddings, events, or special occasions, ensuring an elegant and memorable travel experience."
        },
        {
          name: "Event Transportation",
          description: "Seamless transportation solutions for weddings, corporate events, and celebrations. Timely and organized service for hassle-free logistics."
        }
      ];
      
      return (
        <div className='container p-5'>
            <h1 className='text-center mb-5'>Services</h1>
            <div className='row'>
              {
                data.map((Service,index)=>{
                  return (
                    <div key={index} className='col-md-4 mb-5'>
                        <div className='card p-3 h-100'>
                          <h5 className='text-center'>{Service.name}</h5>
                          <p>{Service.description}</p>
                        </div>
                   </div>
                  )
                })
              }
            </div>
        </div>
      )
    } 
    

export default Services