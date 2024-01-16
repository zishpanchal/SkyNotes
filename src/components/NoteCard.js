import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext";

export default function NoteCard(props) {
    const context = useContext(noteContext);
    const { deleteNote} = context;
    return (
    <div className="card bg-light rounded-2 shadow-sm " style={{border: "0"}}>
            <div className="card-body ">
                <div className="d-flex justify-content-between">
                <h5 className="card-title display-6 text-capitalize d-inline-flex">{props.note?props.note.title: ""}</h5>
                <div>
                <i className="fa-regular fa-trash-can mx-2 " onClick={()=>{props.showAlert("danger", "Note deleted!");deleteNote(props.note._id)}}></i>
                <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{props.togglepage(props.note)}}></i>
                </div>
                </div>
                <p className="card-text fs-4 mt-2 fw-lighter">{props.note?props.note.description:""}</p>
            </div>
            </div>
  )
}
