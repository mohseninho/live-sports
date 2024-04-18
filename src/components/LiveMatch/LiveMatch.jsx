import style from "./liveMatch.module.css"
function LiveMatch(props){
    return(
        <div className={style.liveMatchWrapper}>
            <div className={style.competition}>
                <img className={style.competitionImg} src={props.data.competition.competitionLogoUrl} alt="competition logo" />
            </div>
            <div className={style.matchStatus}>
                <p>{props.data.live ? `${props.data.minute}'` : "FT"}</p>
            </div>
            <div className={style.matchInfo}>
                <div className={style.team_A}>
                    <p className={style.team_A_name}>{props.data.teams[0].team}</p>
                    <img className={style.team_A_logo} src={props.data.teams[0].logoUrl} alt="" />
                </div>
                <div className={style.matchResult}>
                    <p className={style.result}>{props.data.scores[0]} - {props.data.scores[1]}</p>
                </div>
                <div className={style.team_B}>
                    <img className={style.team_B_logo} src={props.data.teams[1].logoUrl} alt="" />
                    <p className={style.team_B_name}>{props.data.teams[1].team}</p>
                </div>
            </div>
            <div className={style.live_tv}>
                <img src="https://cdn.sportfeeds.io/tv-schedule/channel/images/gUl58quMmGKfbwiwy7aLf19GeiSn68lIKePk3f9Y.png" alt="" />
            </div>
        </div>
    );
}

export default LiveMatch;