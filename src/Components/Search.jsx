import {db} from "../firebase.js";
import {useEffect, useState} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
export default function Search() {
    const [keyWord, setKeyWord] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);

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

    const dynamicKeyWordChange = (e) => {
        e.preventDefault();
        setKeyWord(e.target.value);
        // if (keyWord !==  '') {
        //     const filteredData = users.filter(user => {
        //        console.log((user.UserName.stringValue).toLowerCase().includes(keyWord.toLowerCase()));
        //     })
        //     setFilteredRes(filteredData);
        // }
        // else {
        //     setFilteredRes(users);
        // }
    }


    return (
        <div className="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>

            <input type="text" placeholder={"Search"} value={keyWord} onChange={dynamicKeyWordChange}/>

            {/*{filteredRes && (*/}
            {/*    filteredRes.map((value, index) => {*/}
            {/*        return (*/}
            {/*            <div key={index}>{value.UserName.stringValue}</div>*/}
            {/*        )*/}
            {/*    })*/}
            {/*)}*/}

        </div>
    );
}