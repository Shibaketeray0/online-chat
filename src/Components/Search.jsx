import {db} from "../firebase.js";
import {useEffect, useState} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import ChatItem from "./ChatItem.jsx";

export default function Search() {
    const [keyWord, setKeyWord] = useState('');
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
        <div className="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>

            <input type="text" placeholder={"Search"} value={keyWord} onChange={e => {
                setKeyWord(e.target.value)
            }}/>

            {keyWord &&
                <div className={"search-results"}>
                    {
                        users.filter(user => {
                            if (keyWord === '') {
                                return "";
                            } else if (user.UserName.stringValue.toLowerCase().includes(keyWord.toLowerCase())) {
                                return user;
                            }
                        }).map((user, index) => (
                            <ChatItem item={user} key={index}/>
                        ))
                    }
                </div>
            }
        </div>
    );
}