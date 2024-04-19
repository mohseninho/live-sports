import { useEffect, useState } from "react";
import TeamStand from "../../components/team_stand/TeamStand";
import style from "./competition.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { data } from "../../data/competitons/comptetions"
import { teams_data } from "../../data/teams/teams"

function Competition() {
    const [competiton, setCompetiton] = useState({
        teams: []
    });
    const [teams, setTeams] = useState([]);
    const params = useParams();

    useEffect(() => {
        setCompetiton(data[params.id]);
        setTeams(teams_data);
        // axios.get(`http://localhost:9500/data/${params.id}`).then(result=>{
        //     setCompetiton(result.data);
        // }).catch(error=>{
        //     console.log(error);
        // })
    }, [])

    function sortBy(a, b) {
        let _a = teams[a];
        let _b = teams[b];
        return ((_b.result[1] * 3 + _b.result[2]) - (_a.result[1] * 3 + _a.result[2]));
    }

    return (
        <div className={style.wrapper}>
            <div className={style.standings}>
                <div className={style.title}>
                    <p>club</p>
                    <div>
                        <p>mp</p>
                        <p>w</p>
                        <p>d</p>
                        <p>l</p>
                        <p>gf</p>
                        <p>ga</p>
                        <p>gd</p>
                        <p>pts</p>
                    </div>
                </div>
                <hr style={{ width: "90%", border: "none", height: "2px", marginTop: "5px", backgroundColor: "#000" }} />

                {
                    competiton.teams.sort(sortBy).map((team, idx) => (
                        <TeamStand key={idx} data={team} rank={idx} />
                    ))
                }

            </div>
        </div>
    );
}

export default Competition;
