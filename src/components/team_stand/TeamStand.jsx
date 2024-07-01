import { useEffect, useState } from "react";
import style from "./teamStand.module.css"
import axios from "axios";
import { teams_data } from "../../data/teams/teams"
function TeamStand(props) {
    const [team, setTeam] = useState({
        team_name: "",
        team_logo: "",
        result: []
    });
    useEffect(() => {
        setTeam(teams_data[props.data]);
        // axios(`http://localhost:9600/data/${props.data}`).then(result=>{
        //     setTeam(result.data);
        // }).catch(error=>{
        //     console.log(error);
        // })
    }, [])
    return (
        <div className={props.rank != 0 ? style.wrapper : style.borderNan}>
            <div className={style.teamInfo}>
                <p className={style.teamRank}>{props.rank + 1}</p>
                <img className={style.teamLogo} src={team.team_logo} alt="team logo" />
                <p className={style.teamName}>{team.team_name}</p>
                <p className={style.team_short_name}>{team.team_short_name}</p>
            </div>
            <div className={style.teamResult}>
                <p className={style.mp}>{team.result[0]}</p>
                <p className={style.w}>{team.result[1]}</p>
                <p className={style.d}>{team.result[2]}</p>
                <p className={style.l}>{team.result[3]}</p>
                <p className={style.gf}>{team.result[4]}</p>
                <p className={style.ga}>{team.result[5]}</p>
                <p className={style.gd}>{(team.result[4] - team.result[5]).toString()}</p>
                <p className={style.pts}>{((team.result[1] * 3) + team.result[2]).toString()}</p>
            </div>
        </div >
    )
}

export default TeamStand;