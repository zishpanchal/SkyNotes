import React,{useContext} from "react";
import Notes from "./Notes";
import { Link } from "react-router-dom";
import userContext from "../context/user/userContext";

export default function Home(props) {
  const context = useContext(userContext); 
  const {user} = context
  
    return (
    <div className="col-lg-10">
      <div className="row m-auto">
      <div className="d-flex justify-content-between align-items-center">
      <h1 className="display-4 my-4 text-white ">Welcome {user.name}</h1>
        <Link to="/AddNote" className="btn btn-outline-light"><i className="fa-solid fa-plus"/> New Note</Link>
      </div>
      </div>
      <div className="row" >
      <Notes showAlert={props.showAlert}/>
      </div>
    </div>
  );
}
