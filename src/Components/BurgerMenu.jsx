import {useState} from "react";
import {auth} from "../firebase.js";
import {signOut} from "firebase/auth";


export default function BurgerMenu() {
    const [isOpen, setOpen] = useState(false);

    const handleBurger = () => {
        setOpen(!isOpen);
    }
    return (
        <div className={"burger"}>
            <div className={"burger-button cursor-pointer"} onClick={() => handleBurger()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </div>
            <div className={"burger-dropdown-wrapper"}>
                <div className="burger-overlay"></div>
                <ul className={`burger-dropdown-menu ${isOpen ? ('open') : ('closed')}`}>
                    <li className="dropdown-item">
                        <span>
                            Settings
                        </span>
                    </li>
                    <li className="dropdown-item">
                        <span>
                            Info
                        </span>
                    </li>
                    <li className="dropdown-item">
                       <span onClick={() => {
                           signOut(auth);
                       }}>
                            Log out
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}