import React, {useState} from "react";
import NoteContext from "./noteContext";
require('dotenv').config()

const NoteState = (props)=>{
    const intNotes = [
        {
            _id: 1
        }
    ]
    
    const host = process.env.REACT_APP_HOST;
   const [notes, setNotes] = useState(intNotes) 
   //get all notes
    const getNotes = async ()=>{
        const response = await fetch(`${host}api/notes/fetchallnotes`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('token')
            },
          });
          const json = await response.json(); // parses JSON response into native JavaScript objects
          setNotes(json)
        }
   //add note
    const addNote = async (title, description, tag)=>{
       //api call
        const response = await fetch(`${host}api/notes/addnote`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
          });

        const note = await response.json();
        setNotes(notes.concat(note))
    }
   //delete note
   const deleteNote =async (id)=>{
    const response = await fetch(`${host}api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
      });
      // eslint-disable-next-line 
      const json = await response.json();
      getNotes();
    // const newNotes = notes.filter((note) => { return note._id !== id })
    // setNotes(newNotes)
    }
   
    //update note
   const updateNote = async(id, title, description, tag)=>{
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title, description, tag})
      });
      // eslint-disable-next-line 
      const json = await response.json();
      getNotes();
  //  let newNotes = JSON.parse(JSON.stringify(notes))
  //  for(let i=0;i<notes.length;i++){
  //   const element = newNotes[i];
  //   if(element._id === id){
  //         newNotes[i].title=json.title;
  //         newNotes[i].description=json.description;
  //         newNotes[i].tag=json.tag;
  //         break;
  //       }
  //   }
  //   setNotes(newNotes)
   }
    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, updateNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;