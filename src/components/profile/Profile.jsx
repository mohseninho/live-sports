import { useContext } from "react";
import style from "./profile.module.css"
import { AppContext } from "../../App";
function Profile() {
    const { user , setIsLogin } = useContext(AppContext);
    return (
        <div className={style.container}>
            <p>{user.name} &#128075;</p>
            <ul>
                <li>profile</li>
                <li>setting</li>
                <li onClick={() => setIsLogin(false)}>logout</li>
            </ul>
        </div>
    );
}
export default Profile;