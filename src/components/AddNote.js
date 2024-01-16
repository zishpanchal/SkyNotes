import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { Link,useNavigate } from "react-router-dom";

export default function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    props.showAlert("success","Note successfully added!")
    navigate('/');
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-lg-10">
      <div className="row m-auto">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4 my-4 text-white">New Note</h1>
        <Link to="/" className="btn text-white cancel btn-outline-danger ">
        <i className="fa-solid fa-xmark"/> Cancel
        </Link>
      </div>
      </div>
      <div className="row m-auto">
      <div
        className="card p-2 border-light-subtle rounded-3 shadow-sm"
        style={{  height: "100%" }}
      >
        <div className="form-floating d-flex justify-content-between">
          <input
            style={{height: "72px"}}
            onChange={onChange}
            type="text"
            className="form-control form-control-lg fs-1 fw-lighter  border-0 focus-ring focus-ring-light d-inline-flex"
            id="title"
            name="title"
            placeholder="title"
          />
          <label htmlFor="title" className="form-label col-form-label-lg">
            Title
          </label>
          <div style={{width: "26px"}}>
            <i
              onClick={handleClick}
              className="fa-solid fa-circle-plus fa-xl"
              style={{ color: "#4d77bb" }}
            ></i>
          </div>
        </div>
        
        <div className="mb-3 form-floating" style={{ height: "67.9vh" }}>
          <textarea
            onChange={onChange}
            className="form-control border-0 focus-ring focus-ring-light fs-4 fw-lighter"
            id="description"
            name="description"
            style={{ height: "103%", borderRadius: "0" }}
            placeholder="description"
          ></textarea>
          <label htmlFor="description" className="form-label col-form-label-lg">
            Description
          </label>
        </div>
      </div>
      </div>
    </div>
  );
}
