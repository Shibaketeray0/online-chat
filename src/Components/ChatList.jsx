import Toolbar from "./Toolbar.jsx";
import ChatItem from "./ChatItem.jsx";
import {db} from "../firebase.js";
import {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";

export default function ChatList() {
    const [users, setUsers] = useState([]);
    (async () => {
        let usr_list = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach(child => {
            usr_list.push(child._document.data.value.mapValue.fields);
        })
        setUsers(usr_list);
    })()
    console.log(users);

    return (
        <div className="left-column">
            <Toolbar/>
            {users.length > 0 && (
                <div className="chat-list">
                    {users.map((user, index) => {
                        return (
                            <div key={index}>
                                <ChatItem item={user}/>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}