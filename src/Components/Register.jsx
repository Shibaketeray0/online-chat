import {useState} from "react";
import {Link} from "react-router-dom";
import {auth} from "../firebase.js";
import {db} from "../firebase.js";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    const registerHandle = (e) => {
        e.preventDefault();
        let email = e.target[1].value;
        let password = e.target[2].value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setDoc(doc(db, '/users', userName), {
                    UserName: userName,
                    Email: email
                });
            })
            .catch(err => {
                console.log(err);
            })
        setUserName('');
        setEmail('');
        setPass('');
    }
    return (
        <div className={"form-container"}>
            <div className={"form-wrapper"}>
                <form onSubmit={registerHandle}>
                    <div className={"auth-field"}>
                        <label htmlFor={"username"}>Username</label>
                        <input type="text" name={"username"} value={userName} onChange={e => setUserName(e.target.value)}/>
                    </div>
                    <div className={"auth-field"}>
                        <label htmlFor={"email"}>Email</label>
                        <input type="email" name={"email"} value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className={"auth-field"}>
                        <label htmlFor={"pass"}>Password</label>
                        <input type="password" name={"pass"} value={pass} onChange={e => setPass(e.target.value)}/>
                    </div>
                    <button type={"submit"} className={"auth-button"}>Sign up</button>
                </form>
                <p className={"account-message text-center"}>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    );
}