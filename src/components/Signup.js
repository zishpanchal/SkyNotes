import React, {useState} from 'react'
import signup from "../signup.png"
import {useNavigate} from 'react-router-dom';

export default function Signup(props) {
    const [credentials, setCredentials] = useState({name: "",email: "", password: ""}) 
    let navigate = useNavigate()
    const handleSubmit = async (e)=>{
        const {name, email, password} = credentials;
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email, password})
        })
        const json = await response.json()
        console.log(json)
        if(json.success){
          props.showAlert("success", "Successfully created your account")
          //save the auth token and redirect
          localStorage.setItem('token', json.token);
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
        <img  src={signup} alt="avatar" width="175" height="175"/>
        <h2 className="fs-6 fw-normal text-center text-secondary ">Sign up to create an account</h2>
          <div className="card-body px-4">
            <form onSubmit={handleSubmit}>
              <div className="row gy-2 overflow-hidden">
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="name" className="form-control" name="name" value={credentials.name} id="name" onChange={onChange} placeholder="Firstname Lastname" minLength={3} required/>
                    <label htmlFor="name" className="form-label">Name</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" value={credentials.email} id="email" onChange={onChange} placeholder="name@example.com" required/>
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" id="password" value={credentials.password} onChange={onChange}  placeholder="Password" minLength={5} required/>
                    <label htmlFor="password" className="form-label">Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid ">
                    <button className="btn btn-primary btn-lg" type="submit">Sign up</button>
                  </div>
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
