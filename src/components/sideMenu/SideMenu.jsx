import style from "./sideMenu.module.css"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function SideMenu(props) {
    const { isLogin, user } = useContext(AppContext);
    return (
        <div className={props.isShow === true ? style.container : style.nan}>
        {
            <ul>
                <li>
                    {
                        isLogin?(
                        <Link to="/profile">
                            <div className={style.option}>
                                <h3>My Profile</h3>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </Link>
                        ):(
                        <Link to="/login">
                            <div className={style.option}>
                                <h3>Login</h3>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </Link>
                        )
                    }

                </li>
                <li>
                    <Link to="/scores">
                    <div className={style.option}>
                                <h3>Scores</h3>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                    <div className={style.option}>
                                <h3>About Us</h3>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                    </Link>
                </li>
            </ul>
        }
        </div>
    );
}

export default SideMenu;