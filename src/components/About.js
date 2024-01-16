import React from 'react'
import z from "../z.jfif"

export default function About() {


    return (
      <div className="col-lg-10">
       <section className=" pb-5 h-100 d-flex align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <div className="card  rounded-3 shadow-sm">
          <div className='d-flex justify-content-center'>
          <img className='rounded-circle mt-3' src={z} alt="avatar" width="175" height="175"/>
          </div>
       
        
          <div className="card-body px-4">
          <h5 className="display-6 card-title">About</h5>
          <p className="card-text ">Welcome to SkyNotes</p>
          <p className="card-text ">Manage your personal notes on the cloud and access them anytime.</p>
    <p className="card-text ">SkyNotes is a CRUD functionality project made using React, React Router, Node.js, Express, MongoDB, Mongoose, JWT, bcrypt</p>
    <p className="card-text"> Connect with me on LinkedIn</p>
    <a rel="noreferrer" href="https://www.linkedin.com/in/zishpanchal/" target="_blank" className="btn add">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        </div>
        
  
  )
}
