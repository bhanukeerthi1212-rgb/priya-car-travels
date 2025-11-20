import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {
    const [enquiries, setEnq] = useState([])
    const [name ,setName] = useState("")
    const [mobile ,setMobile] = useState("")
    const [email ,setEmail] = useState("")
    const [id , setId] = useState("")

    useEffect(() =>{
        axios.get("https://priya-car-travels-api.onrender.com/enquiry")
        .then((res)=> setEnq(res.data))
        .catch((err)=> console.log(err))
    },[])
    
    const deleteEnq = (enqId) => {
        axios.delete(`https://priya-car-travels-api.onrender.com/enquiry/${enqId}`)
        .then(()=>alert("Enquiry deleted"))
        .catch((err)=> console.log(err))
    }

    const getOnerecord =(enqId)=>{
        axios.get(`https://priya-car-travels-api.onrender.com/enquiry/${enqId}`)
        .then((res)=>{
            setName(res.data.name)
            setMobile(res.data.mobile)
            setEmail(res.data.email)
            setId(res.data.id)
        })
        .catch((err)=>console.log(err))
    }

    const updateEnq =(e)=>{
        e.preventDefault();
        axios.put(`https://priya-car-travels-api.onrender.com/enquiry/${id}`,{
            id,name,mobile,email
        })
        .then(()=> alert("Enquiry updated"))
        .catch((err)=>console.log(err))
    }

    return (
    <div className='container p-5'>
        <h2>View Enquiries</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    enquiries.map((enq , index)=>{
                        return(
                            <tr key={index}>
                                <td>{enq.name}</td>
                                <td>{enq.mobile}</td>
                                <td>{enq.email}</td>
                                <td>
                                    <button 
                                      onClick={()=>getOnerecord(enq.id)} 
                                      data-bs-target="#update" 
                                      data-bs-toggle="modal" 
                                      className='btn btn-primary me-3'>
                                      Edit
                                    </button>
                                    <button 
                                      onClick={()=> deleteEnq(enq.id)} 
                                      className='btn btn-danger'>
                                      Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <div className='modal fade' id='update'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5>Update Enquiry</h5>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={updateEnq}>
                            <input name='name' placeholder='Enter name'
                                value={name}
                                className='form-control mb-3'
                                onChange = {(e)=>setName (e.target.value)}
                            />
                            <input name='mobile' placeholder='Mobile Number'
                                value={mobile}
                                className='form-control mb-3'
                                onChange = {(e)=>setMobile (e.target.value)}
                            />
                            <input name='email' placeholder='Email Address'
                                value={email}
                                className='form-control mb-3'
                                onChange = {(e)=>setEmail (e.target.value)}
                            />
                            <input type='submit' className='btn btn-success w-100' />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ViewEnquiries
