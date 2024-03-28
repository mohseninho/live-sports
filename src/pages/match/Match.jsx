import style from "./match.module.css";
import Header from "./../../components/Header/Header"
import Footer from "./../../components/Footer/Footer"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MatchEvent from "../../components/matchEvent/MatchEvent";
import PlayerInfo from "../../components/PlayerInfo/PlayerInfo";
import Loading from "../../components/Loading/Loading";

function Match(){
    const [isLoading,setIsLoading] = useState(false);
    const [matchData,setMatchData] = useState({
        scores:[],
        teams:[{lineups:{players:[]}},{lineups:{players:[]}}],
        events:[],
    });

    const params = useParams();

    useEffect(()=>{
        setIsLoading(true);
        axios.get(`http://localhost:8000/data/${params.id}`).then(result=>{
            setMatchData(result.data);
            setIsLoading(false);
        }).catch(error =>{
            setIsLoading(false);
            console.log(error);
        });
    },[])

    console.log(matchData.teams[0].lineups.players[0])

    return(
        <div className={style.background}>
            <Header />
            {
                isLoading ? ( <Loading /> ) : (
                    <div className={style.wrapper}>
                        <div className={style.resultWrapper}>
                            <div className={style.team_a}>
                                <p className={style.team_a_name}>{matchData.teams[0].team}</p>  
                                <img className={style.team_a_logo} src={matchData.teams[0].logoUrl} alt="" />
                            </div>
                            <p className={style.result}>{`${matchData.scores[0]} - ${matchData.scores[1]}`}</p>
                            <div className={style.team_b}>
                                <img className={style.team_b_logo} src={matchData.teams[1].logoUrl} alt="" />
                                <p className={style.team_b_name}>{matchData.teams[1].team}</p>  
                            </div>
                        </div>

                        <div className={style.events}>
                            <p className={style.event_title}>Key Events</p>
                            {
                                matchData.events.map((event ,idx)=>(
                                    <MatchEvent key={idx} data = {event}/>
                                ))
                            }
                        </div>

                        <div className={style.lineups}>
                            <div className={style.team_a_players}>
                                {
                                    matchData.teams[0].lineups.players.map((player , idx)=>(
                                        <PlayerInfo key={idx} data = {player}/>
                                    ))
                                }
                            </div>
                            <div className={style.team_b_players}>
                               { 
                                    matchData.teams[1].lineups.players.map((player , idx)=>(
                                        <PlayerInfo key={idx} data = {player}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                )
                    
            }
            
            <Footer />
        </div>
    );
}

export default Match;