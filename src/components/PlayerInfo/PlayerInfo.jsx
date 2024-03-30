import { useEffect, useState } from "react";
import style from "./playerInfo.module.css"
import axios from "axios";
function PlayerInfo(props){
    const [data , setData]  = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:9000/data/${props.id}`).then(result=>{
            setData(result.data);
        }).catch(error=>{
            console.log(error);
        })
    },[]);
    return(
        <div className={style.wrapper}>
            <img className={style.playerImg} src={data.player_img} alt="Player Img" />
            <div className={style.info}>
                <p className={style.playerName}>{`${data.player_firstname} ${data.player_lastname}`}</p>
                <p className={style.playerNumber}>{data.player_number}</p>
            </div>
        </div>
    );
}

export default PlayerInfo;