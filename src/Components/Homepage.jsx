import {auth} from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import ChatList from "./ChatList.jsx";
import MainChat from "./MainChat.jsx";


export default function Homepage() {
    const [user, loading] = useAuthState(auth);

    return (
        <div className={"page-container"}>
            <ChatList/>
            <MainChat/>
        </div>
    );
}
