import { useEffect, useState } from "react";
import style from "./playerInfo.module.css"
import axios from "axios";
import { data } from "../../data/players/players";
function PlayerInfo(props){
    const [playerData , setPlayerData]  = useState({});
    useEffect(()=>{
        setPlayerData(data[props.id]);
        // axios.get(`http://localhost:9000/data/${props.id}`).then(result=>{
        //     setData(result.data);
        // }).catch(error=>{
        //     console.log(error);
        // })
    },[]);
    return(
        <div className={style.wrapper}>
            <img className={style.playerImg} src={playerData.player_img} alt="Player Img" />
            <div className={style.info}>
                <p className={style.playerName}>{`${playerData.player_firstname} ${playerData.player_lastname}`}</p>
                <p className={style.playerNumber}>{playerData.player_number}</p>
            </div>
        </div>
    );
}

export default PlayerInfo;