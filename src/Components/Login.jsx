import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div className={"form-container"}>
            <div className={"form-wrapper"}>
                <form>
                    <input type="email" name={"email"}/>
                    <input type="password" name={"pass"}/>
                    <button type={"submit"}>Log in</button>
                </form>
                <p> Don’t have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
    );
}