import React, {useState} from 'react'
import avatar from "../avatar.png"
import {Link, useNavigate} from 'react-router-dom';
require('dotenv').config()

export default function Login(props) {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
  let navigate = useNavigate()
  const handleSubmit = async (e)=>{
  e.preventDefault();
  const host = process.env.REACT_APP_HOST;
  const response = await fetch(host+"api/auth/login", {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: credentials.email, password: credentials.password})
  })
  const json = await response.json()
  console.log(json)
  if(json.success){
    //save the auth token and redirect
    localStorage.setItem('token', json.token);
    props.showAlert("success", "Successfully logged in")
    navigate("/")
  }else{
    props.showAlert("danger", json.error)
  }
 }
 const onChange = (e)=>{
  setCredentials({...credentials, [e.target.name]: e.target.value})
}

  return (
    <div className="col-lg-10">
        
<section className=" pb-5 h-100 d-flex align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <div className="card border border-light-subtle rounded-3 shadow-sm align-items-center">
        <img  src={avatar} alt="avatar" width="175" height="175"/>
        <h2 className="fs-6 fw-normal text-center text-secondary ">Sign in to your account</h2>
          <div className="card-body px-4">
            <form onSubmit={handleSubmit}>
              <div className="row gy-2 overflow-hidden">
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" value={credentials.email} id="email" onChange={onChange} placeholder="name@example.com" required/>
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" id="password" value={credentials.password} onChange={onChange}  placeholder="Password" required/>
                    <label htmlFor="password" className="form-label">Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid ">
                    <button className="btn btn-primary btn-lg" type="submit">Log in</button>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <p className="m-0 text-secondary text-center">Don't have an account? <Link to="/Signup" className="link-primary text-decoration-none">Sign up</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
