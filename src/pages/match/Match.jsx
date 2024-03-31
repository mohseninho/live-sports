import style from "./match.module.css";
import Header from "./../../components/Header/Header"
import Footer from "./../../components/Footer/Footer"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MatchEvent from "../../components/matchEvent/MatchEvent";
import PlayerInfo from "../../components/PlayerInfo/PlayerInfo";
import Loading from "../../components/Loading/Loading";
import Stats from "../../components/Stats/Stats";

function Match(){
    const [isLoading,setIsLoading] = useState(false);
    const [stats , setStats] = useState({});
    const [matchData,setMatchData] = useState({
        scores:[],
        teams:[{lineups:{players:[]}},{lineups:{players:[]}}],
        events:[],
        competition : {},
        stats : []
    });

    const params = useParams();

    useEffect(()=>{
        setIsLoading(true);
        axios.get(`http://localhost:8000/data/${params.id}`).then(result=>{
            setMatchData(result.data);
            setStats(result.data.stats);
            setIsLoading(false);
        }).catch(error =>{
            setIsLoading(false);
            console.log(error);
        });
    },[])

    return(
        <>
            <Header />
                <div className={style.wrapper}>
                    <div className={style.resultWrapper}>
                        {
                            isLoading ? <Loading /> : (
                            <>
                                <div className={style.team_a}>
                                    <p className={style.team_a_name}>{matchData.teams[0].team}</p>  
                                    <img className={style.team_a_logo} src={matchData.teams[0].logoUrl} alt="" />
                                </div>
                                <p className={style.result}>{`${matchData.scores[0]} - ${matchData.scores[1]}`}</p>
                                <div className={style.team_b}>
                                    <img className={style.team_b_logo} src={matchData.teams[1].logoUrl} alt="" />
                                    <p className={style.team_b_name}>{matchData.teams[1].team}</p>  
                                </div>
                            </>
                            )
                        }
                    </div>
                    <div className={style.matchInfo}>
                        <div className={style.events}>
                            <p className={style.event_title}>Key Events</p>
                            {
                                isLoading ? <Loading /> : (
                                    <>
                                        {
                                            matchData.events.map((event ,idx)=>(
                                                <MatchEvent key={idx} data = {event}/>
                                            ))
                                        }
                                    </>
                                )
                            }

                        </div>
                        <div className={style.sideBar}>
                            <div className={style.details}>
                                <p className={style.detail_title}>Details</p>
                                {
                                    isLoading ? <Loading /> :(
                                        <>
                                            <div className={style.competition}>
                                                <p>competition :</p>
                                                <img className={style.competitions_logo} src={matchData.competition.competitionLogoUrl}/>
                                            </div>
                                            <p className={style.match_date}>{`date : ${matchData.match_date}`}</p>
                                            <p className={style.match_referee}>{`referee : ${matchData.match_referee}`}</p>
                                        </>
                                    )
                                }
                            </div>

                            <div className={style.stats}>
                                <p className={style.stats_title}>stats</p>
                                {
                                    isLoading ? <Loading /> :(
                                        <>
                                            { 
                                                matchData.stats.map((stat,idx)=>(
                                                    <Stats key={idx} data={stat}c/>
                                                ))
                                            }
                                        </>
                                    )  
                                }
                            </div>

                            <div className={style.highlight}>
                                <p className={style.highlight_title}>highlight</p>
                                {
                                    isLoading ? <Loading /> :(
                                        <>
                                            <video className={style.highlight_video} src={matchData.match_highlight} controls muted></video>
                                        </>
                                    )
                                }
                                </div>
                        </div>
                    </div>


                    <div className={style.lineups}>
                        <div className={style.team_a_players}>
                            {
                                matchData.teams[0].lineups.players.map((player_id , idx)=>(
                                    <Link className={style.player} to={`/players/${player_id}`} key={idx}>
                                        <PlayerInfo id = {player_id}/>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className={style.team_b_players}>
                            { 
                                matchData.teams[1].lineups.players.map((player_id , idx)=>(
                                    <Link className={style.player} to={`/players/${player_id}`} key={idx}>
                                        <PlayerInfo id = {player_id}/>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                    
            <Footer />
        </>
    );
}

export default Match;