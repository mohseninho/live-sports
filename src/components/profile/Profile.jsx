import { useContext } from "react";
import { Link } from "react-router-dom"
import style from "./profile.module.css"
import { AppContext } from "../../App";
function Profile() {
    const { user, setIsLogin } = useContext(AppContext);
    return (
        <div className={style.container}>
            <p>{user.name} &#128075;</p>
            <ul>
                <Link to="/profile">
                    <li>profile</li>
                </Link>
                <li>setting</li>
                <li onClick={() => setIsLogin(false)}>logout</li>
            </ul>
        </div>
    );
}
export default Profile;