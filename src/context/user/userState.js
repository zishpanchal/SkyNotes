import React, {useState} from "react";
import userContext from "./userContext";
//require('dotenv').config()

export default function UserState(props) {
  const host = process.env.REACT_APP_HOST;
   const [user, setUser] = useState({}) 

 //getuser
   const getUser = async ()=>{
    const response = await fetch(`${host}api/auth/getuser`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
      // console.log(json)
      setUser(json)
    }
  
    return (
    <userContext.Provider value={{user, getUser}}>
            {props.children}
        </userContext.Provider>
  )
}
