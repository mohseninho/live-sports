import style from "./login.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Users_data } from "../../data/users/Users"

function Login() {
    const { setIsLogin, setUser } = useContext(AppContext);

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    function loginFunc() {
        if (userData.email != "" && userData.password != "") {
            const _user = Users_data.find((user) => user.email === userData.email);
            if (!_user) {
                alert("user not found!");
            } else if (_user.password === userData.password) {
                setUser(_user);
                setIsLogin(true);
            } else {
                alert("incorrect password!");
            }
        } else {
            alert("enter your info!");
        }

    }

    const handleChange = (e) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.infoSide}>
                    <h1>live Sports</h1>
                    <div className={style.info}>
                        <h2>Join 3 million football fans today</h2>
                        <ul>
                            <li>Watch live and on-demand</li>
                            <li>Play games and challenge your friends</li>
                            <li>Win money-can’t-buy prizes</li>
                            <li>Apply for tickets to Europe’s biggest games</li>
                        </ul>
                    </div>
                    <div className={style.logos}>
                        <img src="https://img.uefa.com/imgml/uefacom/ucl/2021/logos/logo_dark.svg" alt="logo" />
                        <img src="https://img.uefa.com/imgml/uefacom/euro2024/rebrand/euro2024_onDark.png" alt="logo" />
                        <img src="https://img.uefa.com/imgml/uefacom/myuefa/login/UEFATV.svg" alt="logo" />
                        <img src="https://img.uefa.com/imgml/uefacom/myuefa/login/UEFAGAMING.svg" alt="logo" />
                    </div>
                </div>
                <div className={style.formSide}>
                    <h1>log in</h1>

                    <button className={style.signFacebook}><FontAwesomeIcon icon={faFacebook} size="lg"></FontAwesomeIcon> sign in with facebook</button>
                    <button className={style.signGoogle}><FontAwesomeIcon icon={faGoogle} size="lg"></FontAwesomeIcon> sign in with google</button>
                    <button className={style.signApple}><FontAwesomeIcon icon={faApple} size="lg"></FontAwesomeIcon> sign in with apple</button>
                    <p>or</p>
                    <form action="#" className={style.loginForm}>
                        <input name="email" type="text" className={style.emailInput} placeholder="Email" onChange={handleChange} required />
                        <input name="password" type="password" className={style.passwordInput} placeholder="Password" onChange={handleChange} required />
                        <div className={style.keepMeCheckBox}>
                            <label><input type="checkbox" name="checkbox" value="value" />keep me signed in</label>
                        </div>
                    </form>
                    <button onClick={loginFunc} className={style.loginBtn}>login</button>
                    <p>don't have an account?</p>
                    <button className={style.signupBtn}>signup</button>
                </div>
            </div>
        </div>
    );
}

export default Login;