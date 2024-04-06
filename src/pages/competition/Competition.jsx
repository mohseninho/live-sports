import { useEffect, useState } from "react";
import TeamStand from "../../components/team_stand/TeamStand";
import style from "./competition.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import {data} from "../../data/competitons/comptetions"
function Competition() {

    const [competiton , setCompetiton] = useState({
        standings : []
    });
    const params = useParams();

    useEffect(()=>{
        setCompetiton(data[params.id]);
        // axios.get(`http://localhost:9500/data/${params.id}`).then(result=>{
        //     setCompetiton(result.data);
        // }).catch(error=>{
        //     console.log(error);
        // })
    },[])
    return (
        <div className={style.wrapper}>
            <div className={style.standings}>
                {
                    competiton.standings.map((team , idx) => (
                        <TeamStand data={team} rank={idx} key={idx} />
                    ))
                }

            </div>
        </div>
    );
}

export default Competition;
