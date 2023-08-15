import {auth} from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import {signOut} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";

export default function Homepage() {
    const [user, loading] = useAuthState(auth);

    const logOut = () => {
        signOut(auth).then(() => {

        })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>this is homepage
            {user && (
                <>
                    <div>{user.uid}</div>
                    <button onClick={logOut}>Log out</button>
                </>
            )}
        </div>
    );
}