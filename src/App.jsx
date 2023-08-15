import {useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import Homepage from "./Components/Homepage.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import NotFound from "./Components/NotFound.jsx";

export default function App() {


  return (
      <Router>
          <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Router>
  )
}