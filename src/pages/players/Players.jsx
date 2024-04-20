import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "./../../components/Header/Header"
import Loading from "./../../components/Loading/Loading"
import style from "./players.module.css"
import { useEffect, useState } from "react";
import axios from "axios";
import pitch from "../../assets/images/footballPitch.png"
import { data } from "../../data/players/players";
function Players(){

    const params = useParams();
    const [playerData , setPlayerData] = useState({});
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        setPlayerData(data[params.id]);
        setIsLoading(false);
        // axios.get(`http://localhost:9000/data/${params.id}`).then(result=>{
        //     setPlayerData(result.data);
        //     setIsLoading(false);
        // }).catch(error=>{
        //     console.log(error);
        //     setIsLoading(false);
        // })
    },[])

    function position(pos){
        switch(pos){
            case "st":
                return(style.st);
            case "lw":
                return(style.lw);
            case "rw":
                return(style.rw);
            case "cm":
                return(style.cm);
            case "amf":
                return(style.amf);
            case "dmf":
                return(style.dmf);
            case "lb":
                return(style.lb);
            case "rb":
                return(style.rb);
            case "cb":
                return(style.cb);
            case "gk":
                return(style.gk);
        }
    }

    return(
        <div>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.playerProfile}>
                        {
                            isLoading ? <Loading /> : (
                                <>
                                    <img className={style.profile} src={playerData.player_img} alt="" />
                                    <div className={style.info}>
                                        <p className={style.name}>{`name : ${playerData.player_firstname} ${playerData.player_lastname}`}</p>
                                        <p className={style.age}>{`age : ${playerData.player_age}`}</p>
                                        <p className={style.team}>{`team : ${playerData.player_team}`}</p>
                                        <p className={style.country}>{`country : ${playerData.player_country}`}</p>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className={style.playerState}>
                        <div className={style.position}>
                            <img className={style.pitch} src={pitch} alt="pitch" />
                            <div className={position(playerData.player_pos)}>{playerData.player_pos}</div> 
                        </div>
                        <div className={style.state}>
                            {
                                isLoading ? <Loading /> : (
                                    <>
                                        <p className={style.games}>{`games : ${playerData.player_games}`}</p>
                                        <p className={style.goals}>{`goals : ${playerData.player_goals}`}</p>
                                        <p className={style.assists}>{`assists : ${playerData.player_assists}`}</p>
                                    </>
                                ) 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Players;