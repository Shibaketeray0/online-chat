import {useState} from "react";
import {Link} from "react-router-dom";
import {auth} from "../firebase.js";
import {db} from "../firebase.js";
import {storage} from "../firebase.js";
import {ref, getDownloadURL} from "firebase/storage";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

export default function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [initImageURL, setInitImageURL] = useState("");

    let initPictureRef = ref(storage, 'user-avatars/user.png');

    getDownloadURL(initPictureRef)
        .then(url => {
            setInitImageURL(url);
        });
    const registerHandle = (e) => {
        e.preventDefault();
        let email = e.target[1].value;
        let password = e.target[2].value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setDoc(doc(db, '/users', userName), {
                    UserName: userName,
                    Email: email,
                    Picture: initImageURL,
                    Uid: user.user.uid
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