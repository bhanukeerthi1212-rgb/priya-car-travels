import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Product = () => {
    const[Products ,setProducts]=useState([])
    useEffect(()=>{
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error fetching products:", err));
    })
    return (
    <div className='container p-5'>
        <h1 className='text-center'>product</h1>
        <div className='d-flex flex-wrap justify-content-center'>
            {
               Products.map(()=>())
            }
        </div>
    </div>
  )
}

export default Product