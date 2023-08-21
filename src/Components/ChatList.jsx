import Toolbar from "./Toolbar.jsx";
import {db, auth} from "../firebase.js";
import {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import ChatItem from "./ChatItem.jsx";

export default function ChatList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async () => {
            let usr_list = [];
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach(child => {
                usr_list.push(child._document.data.value.mapValue.fields);
            })
            setUsers(usr_list);
        })();
    }, []);

    return (
        <div className="left-column">
            <Toolbar/>
            {users.length > 0 && (
                <div className="chat-list">
                    {users.map((user, index) => {
                        return (
                            <ChatItem item={user} key={index}/>
                        )
                    })}
                </div>
            )}
        </div>
    );
}