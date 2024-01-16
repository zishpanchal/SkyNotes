import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import Alert from './components/Alert';
import AddNote from "../src/components/AddNote";
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import UserState from './context/user/userState';

function App() {
  const [alert, setAlert] = useState({})
const showAlert = function(type, msg){
  setAlert({
    type: type,
    msg: msg
  })
  setTimeout(() => {
    setAlert({})
  }, 1500);
}
  
  return (
    <div className="row m-auto" >
    <UserState>
    <NoteState>
    <BrowserRouter>
     <Navbar/>
     <Alert alert={alert}/>
     <Routes>
        <Route path="/" element={<Home showAlert={showAlert} />} />
        <Route path="/About" element={<About />} />
        <Route path="/AddNote" element={ <AddNote showAlert={showAlert}/>} />
        <Route path="/Login" element={ <Login showAlert={showAlert}/>} />
        <Route path="/Signup" element={ <Signup showAlert={showAlert}/>} />
      </Routes>
    </BrowserRouter>
    </NoteState>
    </UserState>
    </div>
  );
}

export default App;
