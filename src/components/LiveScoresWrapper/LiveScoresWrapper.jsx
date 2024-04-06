import { useEffect, useState } from "react";
import LiveMatch from "../LiveMatch/LiveMatch";
import style from "./liveScoresWrapper.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { data } from "../../data/matches/matches";
function LiveScoresWrapper() {
    const [matchs, setMatchs] = useState([]);
    useEffect(() => {
        setMatchs(data);
        // axios.get("http://localhost:8000/data").then((result) => {
        //     setMatchs(result.data);
        // });
    }, []);
    return (
        <div className={style.wrapper}>
            <div className={style.liveScoresWrapper}>
                {
                    matchs.map(match=>(
                        <Link className={style.item} to={`/match/${match.id}`} key={match.id}>
                            <LiveMatch data={match}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default LiveScoresWrapper;
