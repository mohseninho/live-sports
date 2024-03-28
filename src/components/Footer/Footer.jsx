import { Link } from "react-router-dom";
import style from "./footer.module.css";
import instagram from "../../assets/images/socialMedia/instagram.png";
import twitterx from "../../assets/images/socialMedia/twitterx.png";
import facebook from "../../assets/images/socialMedia/facebook.png";
import youtube from "../../assets/images/socialMedia/youtube.png";
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
                        <img src={instagram} alt="instagram" />
                        <img src={facebook} alt="facebook" />
                        <img src={twitterx} alt="twitter x" />
                        <img src={youtube} alt="youtube" />
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
