import style from "./login.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
function Login() {
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
                        <input type="text" className={style.emailInput} placeholder="Email" />
                        <input type="password" className={style.passwordInput} placeholder="Password" />
                        <div className={style.keepMeCheckBox}>
                            <label><input type="checkbox" name="checkbox" value="value" />keep me signed in</label>
                        </div>
                    </form>
                    <button type="submit" className={style.loginBtn}>login</button>
                    <p>don't have an account?</p>
                    <button className={style.signupBtn}>signup</button>
                </div>
            </div>
        </div>
    );
}

export default Login;