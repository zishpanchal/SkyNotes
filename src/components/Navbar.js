import React, {useEffect, useContext} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import userContext from "../context/user/userContext";

export default function Navbar() {
  const context = useContext(userContext); 
  const {user,getUser} = context
  const navigate = useNavigate();
   let location = useLocation()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate("/Login")
  }
  useEffect(() => {
        getUser()
        // eslint-disable-next-line 
      }, [location]);

  return (
    <div className="col-lg-2 ps-0">
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{height:"100vh"}}>
    <Link className="fs-4 d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" to="/">SkyNotes</Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
        <Link className={`nav-link text-white ${location.pathname === '/'? 'active':''}`} aria-current="page" to="/">Home</Link>
       </li>
      <li className="nav-item">
        <Link className={`nav-link text-white ${location.pathname === '/About'? 'active':''}`} to="/About">About</Link>
        </li>
    </ul>
    <hr/>
    {user.name?
    (<div className="dropdown">
      {/* eslint-disable-next-line */}
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <div style={{width:"32px", height:"32px", backgroundColor:"darkslateblue"}} className="me-2 d-flex justify-content-center rounded-circle">
        <i className={"fa-solid fa-"+(user.name?(user.name[0]):"")+" my-auto"}></i>
        </div>
        <strong>{user.name}</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li ><Link to="/AddNote" className="dropdown-item" href="#">New note...</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><button onClick={handleLogout} className="dropdown-item" >Sign out</button></li>
      </ul>
    </div>):""}
  </div>
  </div>













  // <nav className="navbar bg-dark navbar-dark navbar-expand-lg" >
  //   <div className="container-fluid">
  //   <Link className="navbar-brand" to="/Login">Navbar</Link>
  //   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //       <li className="nav-item">
  //         <Link className={`nav-link ${location.pathname === '/'? 'active':''}`} aria-current="page" to="/">Home</Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link className={`nav-link ${location.pathname === '/About'? 'active':''}`} to="/About">About</Link>
  //       </li>
  //       <li className="nav-item dropdown">
  //         <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //           Dropdown
  //         </Link>
  //         <ul className="dropdown-menu">
  //           <li><Link className="dropdown-item" to="#">Action</Link></li>
  //           <li><Link className="dropdown-item" to="#">Another action</Link></li>
  //           <li><hr className="dropdown-divider"/></li>
  //           <li><Link className="dropdown-item" to="#">Something else here</Link></li>
  //         </ul>
  //       </li>
  //     </ul>
  //     <form className="d-flex" role="search">
  //       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  //       <button className="btn btn-outline-success" type="submit">Search</button>
  //     </form>
  //   </div>
  // </div>
  // </nav>
  )
}
