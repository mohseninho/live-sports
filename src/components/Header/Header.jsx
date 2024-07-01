import style from "./header.module.css";
import logo from "./../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import Profile from "../profile/Profile";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenu from "../../components/sideMenu/SideMenu"

function NavBar() {
    const { isLogin, user } = useContext(AppContext);
    const [openProfile, setOpenProfile] = useState(false);
    const [openSideMenu, setIsOpenSideMenu] = useState(false);

    return (
        <div className={style.header}>
            <div className={style.nav}>
                <Link to="/">
                    <img src={logo} alt="logo" className={style.logo} />
                </Link>
                <ul className={style.menu}>
                    <li>
                        <Link to="/scores">scores</Link>
                    </li>
                    <li>
                        <Link to="/latest">latest</Link>
                    </li>
                    <li>
                        <Link to="/about">about us</Link>
                    </li>
                </ul>
            </div>
            <div className={style.leftSide}>
                {
                    isLogin ? (
                        <div className={style.profile} onClick={() => setOpenProfile((prev) => !prev)}>
                            <img className={style.avatar} src={user.avatar} alt="" />
                            {
                                openProfile && <Profile />
                            }
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className={style.loginBtn}>login</button>
                        </Link>
                    )
                }
                <div className={style.sideMenuBtn} onClick={() => setIsOpenSideMenu((prev) => !prev)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                {
                    <SideMenu isShow={openSideMenu} />
                }
            </div>
        </div>
    );
}

export default NavBar;
