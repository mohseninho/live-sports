import { Link } from "react-router-dom";
import style from "./footer.module.css";
import { faInstagram , faTwitter , faFacebook , faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.info}>
                <div className={style.links}>
                    <Link to="/">
                        <p>main page</p>
                    </Link>
                    <Link to="/about">
                        <p>about us</p>
                    </Link>
                </div>
                <div className={style.socialMedia}>
                    <p>follow us on</p>
                    <div className={style.logos}>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faYoutube}/>
                    </div>
                </div>
            </div>
            <div className={style.description}>
                <p>All rights reserved.</p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio molestias aliquid reiciendis minima
                    necessitatibus.
                </p>
            </div>
        </div>
    );
}

export default Footer;
