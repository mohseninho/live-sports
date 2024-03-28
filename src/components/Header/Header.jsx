import style from "./header.module.css";
import logo from "./../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className={style.header}>
            <Link to = "/">
                <img src={logo} alt="logo" className={style.logo} />
            </Link>
            <ul className={style.menu}>
                <li>
                    <Link to = "/scores">scores</Link>
                </li>
                <li>
                    <Link to = "/latest">latest</Link>
                </li>
                <li>
                    <Link to = "/about">about us</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
