
import { useContext } from "react";
import Banner from "../../components/Banner/Banner.jsx";
import LiveScoresWrapper from "../../components/LiveScoresWrapper/LiveScoresWrapper.jsx";
import style from "./main.module.css"
function Main() {
    return (
        <div>
            <Banner />
            <LiveScoresWrapper />
        </div>
    );
}

export default Main;