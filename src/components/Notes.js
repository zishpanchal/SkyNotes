import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteList from "./NoteList";
import NoteCard from "./NoteCard";
import UpdateNote from "./UpdateNote";
import { useNavigate } from "react-router-dom";


export default function Notes(props) {
  const navigate = useNavigate()
  const context = useContext(noteContext);
  const { notes, getNotes} = context;
  const [index, setIndex] = useState(0);
  const [editPage, setEditPage] = useState(false);
  const [note, setNote] = useState({
    _id:"",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const toggleEditPage = (currentNote)=>{
    if(editPage){
      setEditPage(false)
    }else{
      setEditPage(true)
      setNote({_id:currentNote._id,etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
    } 
  }

  const setNoteIndex=(i)=>{
    setIndex(i)
  }
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }else{
      navigate('/Login');
    }
    
    // eslint-disable-next-line
  }, [])
  

  return (
    <>
          <div className="col-lg-3 col-sm-12">
            <div className="list-group shadow-sm" style={{height: "82vh",overflowY: "auto"}}>
              {notes.toReversed().map((note, ind) => (
                <NoteList key={note._id} note={note} index={ind} current={index} setnote={setNoteIndex}/>
              ))}
            </div>
          </div>
          <div className="col-lg-9 col-sm-0" style={{display: "grid"}}>
          {editPage?<UpdateNote showAlert={props.showAlert} note={note}togglepage={toggleEditPage}/>:(notes.toReversed()[index]?<NoteCard showAlert={props.showAlert} togglepage={toggleEditPage} note={notes.toReversed()[index]}/>: "")}  
          </div>
    </>
  );
}
