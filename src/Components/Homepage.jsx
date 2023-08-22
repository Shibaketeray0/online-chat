import {auth} from "../firebase.js";
import {onAuthStateChanged} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import ChatList from "./ChatList.jsx";
import MainChat from "./MainChat.jsx";
import {Route, Routes} from "react-router-dom";
import { useParams } from 'react-router-dom';


export default function Homepage() {
    const [user, loading] = useAuthState(auth);
    const { hash } = useParams();

    return (
        <div className={"page-container"}>
            <ChatList/>
            <Routes>
                <Route path={":hash"} element={<MainChat/>}/>
            </Routes>
        </div>
    );
}
