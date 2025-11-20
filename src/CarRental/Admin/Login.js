import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginStatus } from '../../App';

const Login = () => {

    const [Details,setDetails] = useState({});
    const navigate = useNavigate()
    const [login , setLogin] = useContext(loginStatus)

    const changeData =(e) =>{
        setDetails({...Details ,[e.target.name]: e.target.value})
    }

    const submitHandler =(e) =>{
        e.preventDefault();
        console.log(Details);

        const {username,password} = Details;

        if(username==="Bhanukeerthi" && password==="bhanu123"){
            setLogin(true);       // FIRST fix
            navigate("/Dashboard"); // SECOND fix
        }
        else{
            alert("invalid credentials")
        }
    }

    return (
    <div className='container p-5'>
        <div className='col-lg-6 shadow p-5 mx-auto'>
             <h3 className='text-center'>Admin Login</h3>
             <form onSubmit={submitHandler}>
                <input type='text' name='username' onChange={changeData} placeholder='username' className='form-control mb-3'/>
                <input type='password' name='password'  onChange={changeData} placeholder='password' className='form-control mb-3'/>
                <input type='Submit' className='form-control mb-3 btn btn-success'/>
             </form>
        </div>
    </div>
  )
}

export default Login;
