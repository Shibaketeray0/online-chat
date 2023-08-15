import {Link} from "react-router-dom";

export default function Register() {
    return (
        <div className={"form-container"}>
            <div className={"form-wrapper"}>
                <form>
                    <input type="text" name={"username"}/>
                    <input type="email" name={"email"}/>
                    <input type="password" name={"pass"}/>
                    <button type={"submit"}>Sign up</button>
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    );
}