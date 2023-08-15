import {useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    redirect,
    Link,
} from "react-router-dom";
import {auth} from "./firebase.js";
import {useAuthState} from "react-firebase-hooks/auth";
import {Navigate, useNavigate} from "react-router-dom";
import Homepage from "./Components/Homepage.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import NotFound from "./Components/NotFound.jsx";



export default function App() {
    const [user, loading] = useAuthState(auth);

  return (
      <Router>
              <Routes>
                  <Route path="/" element={<Homepage/>}/>
                  <Route path="/login" element={user !== null ? <Navigate to={"/"}/> : <Login/> } />
                  <Route path="/register" element={<Register/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
      </Router>
  )
}