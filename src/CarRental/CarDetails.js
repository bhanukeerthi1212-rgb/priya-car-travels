import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendEnquiry from './Admin/SendEnquiry'

const CarDetails = () => {
    const { id } = useParams()
    const [car, setCar] = useState(null)

    useEffect(() => {
        axios.get(`https://priya-car-travels-api.onrender.com/cars/${id}`)
            .then((res) => setCar(res.data))
            .catch((err) => console.log(err))
    }, [id])

    if (!car) {
        return <h3 className="text-center p-5">Loading car details...</h3>
    }

    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-lg-8'>
                    <h2>{car.carName}</h2>
                    <p>{car.description}</p>
                    <p className='btn btn-dark me-3'>Category: {car.category}</p>
                    <p className='btn btn-dark me-3'>Model: {car.model}</p>
                    <p className='btn btn-dark'>{car.pricePerDay}/- per day</p>
                </div>

                <div className='col-lg-4'>
                    <SendEnquiry />
                </div>
            </div>
        </div>
    )
}

export default CarDetails
