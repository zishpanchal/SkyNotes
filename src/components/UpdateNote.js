import React, {useState, useContext} from 'react'
import noteContext from '../context/notes/noteContext';

export default function UpdateNote(props) {
    const context = useContext(noteContext);
  const { updateNote} = context;
    const [note, setNote] = useState(props.note);
    
    const handleClick = (e) => {
        e.preventDefault();
       updateNote(note._id, note.etitle, note.edescription, note.etag);
       props.showAlert("success", "Note updated successfully!")
       props.togglepage()
      };
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
      };
    return (
    <div>
        
      <div
        className="card p-2"
        style={{ borderColor: "cornflowerblue", height: "100%" }}
      >
        <div className="form-floating d-flex justify-content-between">
          <input
            style={{height: "72px"}}
            onChange={onChange}
            type="etext"
            className="form-control form-control-lg fs-1 fw-lighter  border-0 focus-ring focus-ring-light d-inline-flex"
            id="etitle"
            name="etitle"
            placeholder="title"
            value={note.etitle}
          />
          <label htmlFor="etitle" className="form-label col-form-label-lg">
            Title
          </label>
          <div className="mt-2" style={{width:"78px"}}>
            <i onClick={props.togglepage} className="fa-solid fa-circle-xmark  fa-xl mx-2" style={{ color: "#dc3545" }}></i>
            <i
              onClick={handleClick}
              className="fa-solid fa-circle-plus fa-xl"
              style={{ color: "#4d77bb" }}
            ></i>
          </div>
        </div>
        
        <div className="mb-3 form-floating" style={{ height: "60vh" }}>
          <textarea
            onChange={onChange}
            className="form-control border-0 focus-ring focus-ring-light fs-4 fw-lighter"
            id="edescription"
            name="edescription"
            style={{ height: "103%", borderRadius: "0" }}
            placeholder="description"
            value={note.edescription}
          ></textarea>
          <label htmlFor="edescription" className="form-label col-form-label-lg">
            Description
          </label>
        </div>
      </div>
    </div>
  )
}
