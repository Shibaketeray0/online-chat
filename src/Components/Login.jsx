
export default function Login() {
    return (
        <div className={"form-container"}>
            <div className={"form-wrapper"}>
                <form>
                    <input type="text" name={"username"}/>
                    <input type="email" name={"email"}/>
                    <button type={"submit"}>Log in</button>
                </form>
            </div>
        </div>
    );
}