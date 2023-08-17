import BurgerMenu from "./BurgerMenu.jsx";
import Search from "./Search.jsx";
export default function Toolbar() {
    return (
        <div className="toolbar">
            <BurgerMenu/>
            <Search/>
        </div>
    );
}