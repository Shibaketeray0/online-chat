import {Link} from "react-router-dom";
import {auth} from "../firebase.js";
import {Navigate, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword, setPersistence, browserLocalPersistence} from "firebase/auth";


export default function Login() {
    const navigate = useNavigate();
    const loginHandle = (e) => {
        e.preventDefault();
        let email =  e.target[0].value;
        let pass = e.target[1].value;
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                return signInWithEmailAndPassword(auth, email, pass)
                    .then(() => {
                        navigate("/");
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
    }

    return (
        <div className={"form-container"}>
            <div className={"form-wrapper"}>
                <form onSubmit={loginHandle}>
                    <div className={"auth-field"}>
                        <label htmlFor={"email"}>Email</label>
                        <input type="email" name={"email"}/>
                    </div>
                    <div className={"auth-field"}>
                        <label htmlFor={"pass"}>Password</label>
                        <input type="password" name={"pass"}/>
                    </div>

                    <button type={"submit"} className={"auth-button"}>Log in</button>
                </form>
                <p className={"account-message text-center"}>Don’t have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
    );
}