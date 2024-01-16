import React from "react";

export default function NoteList(props) {
  const { note, index, setnote, current} = props;
let date = new Date(note.date);
let currentDate = new Date();
// To calculate the time difference of two dates
let timeDiff = currentDate.getTime() - date.getTime();
 
// To calculate the no. of days between two dates
let daysSince = 
    Math.round(timeDiff / (1000 * 3600 * 24));
 
  return (
      <button onClick={()=>{setnote(index)}} style={(current === index?{backgroundColor: "#4d77bb", borderColor: "unset"}:{backgroundColor:"#f8f9fa"})} className={'list-group-item  '+ (current === index?'active':'')} aria-current="true">
        <div className="d-flex w-100  justify-content-between">
          <p className="mb-1 fs-5 text-capitalize text-truncate">{note.title}</p>
          <small>{(daysSince===0)?"Today":(daysSince+" days ago")}</small> 
        </div>
        <p className="mb-1 text-start text-truncate fw-lighter">{note.description}</p>
      </button>
  );
}
