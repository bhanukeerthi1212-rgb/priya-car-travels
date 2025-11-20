import axios from 'axios'
import React, { useState } from 'react'

const SendEnquiry = () => {
    const [name ,setName] =useState("")
    const [mobile ,setMobile] =useState("")
    const [email ,setEmail] =useState("")


    const submitHandler =(e)=>{
      e.preventDefault();

      axios.post("https://priya-car-travels-api.onrender.com/enquiry", {name,mobile,email})
      .then((res)=>alert("your enquiry sent"))
      .catch((err) => console.log(err))
      
    }
    
    return (
    <div>
        <h3>SendEnquiry</h3>
        <form onSubmit={submitHandler}>
        <input name='name' placeholder='Enter name' className='form-control mb-5' onChange = {(e)=>setName (e.target.value)}/>
        <input name='mobile' placeholder='mobile Number' className='form-control mb-5' onChange = {(e)=>setMobile (e.target.value)}/>
        <input name='email' placeholder='Email Address' className='form-control mb-5' onChange = {(e)=>setEmail (e.target.value)}/>
        <input type='submit' className='form-control mb-5'/>
        </form>
    </div>
  )
}

export default SendEnquiry
