import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendEnquiry from './Admin/SendEnquiry'

const CarDetails = () => {
  const { id } = useParams()
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://priya-car-travels-api.onrender.com/cars/${id}`)
      .then((res) => {
        setCar(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h3 className="text-center p-5">Loading car details...</h3>
  }

  if (!car) {
    return <h3 className="text-center p-5 text-danger">Car not found</h3>
  }

  return (
    <div className="container p-5">
      <div className="row">

        <div className="col-lg-8">
          <img
            src={car.image}
            alt={car.name}
            className="img-fluid mb-4 rounded shadow"
          />

          <h2>{car.name}</h2>
          <p>{car.description}</p>

          <p className="btn btn-dark me-3">
            Model: {car.model || "N/A"}
          </p>

          <p className="btn btn-dark">
            ₹ {car.pricePerDay} / day
          </p>
        </div>

        <div className="col-lg-4">
          <SendEnquiry />
        </div>

      </div>
    </div>
  )
}

export default CarDetails
