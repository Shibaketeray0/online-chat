import {useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    redirect,
    Link,
} from "react-router-dom";
import {auth} from "./firebase.js";
import {onAuthStateChanged} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {Navigate, useNavigate} from "react-router-dom";
import Homepage from "./Components/Homepage.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import NotFound from "./Components/NotFound.jsx";



export default function App() {
    const [loggedIn, setLogged] = useState(null);
    auth.onAuthStateChanged((user) => {
        if(user) {
            setLogged(true);
        }
        else {
            setLogged(false);
        }
    })
  return (
      <Router>
              <Routes>
                  <Route path="/" element={loggedIn ? <Homepage/> : (loggedIn === false && <Navigate to={"/login"}/>) }/>
                  <Route path="/login" element={loggedIn ? <Navigate to={"/"}/> : (loggedIn === false && <Login/>) } />
                  <Route path="/register" element={loggedIn ? <Navigate to={"/"}/> : (loggedIn === false && <Register/>) }/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
      </Router>
  )
}