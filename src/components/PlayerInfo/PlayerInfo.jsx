import style from "./playerInfo.module.css"
function PlayerInfo(props){
    return(
        <div className={style.wrapper}>
            <img className={style.playerImg} src={props.data.img} alt="Player Img" />
            <div className={style.info}>
                <p className={style.playerName}>{`${props.data.firstname} ${props.data.lastname}`}</p>
                <p className={style.playerNumber}>{props.data.number}</p>
            </div>
        </div>
    );
}

export default PlayerInfo;