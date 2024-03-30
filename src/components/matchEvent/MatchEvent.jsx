import style from "./matchEvent.module.css"
import scoreImg from "./../../assets/images/matchEvents/score.png"
import yellowCard from "./../../assets/images/matchEvents/yellowCard.png"
import redCard from "./../../assets/images/matchEvents/redCard.png"
import subs from "./../../assets/images/matchEvents/subs.png"

function MatchEvent(props){

    function status(state){
        switch(state){
            case "goal":
                return(<img className={style.eventType} src={scoreImg} alt="goal" />)
            case "yellowCard":
                return(<img className={style.eventType} src={yellowCard} alt="yellow rad" />)
            case "redCard":
                return(<img className={style.eventType} src={redCard} alt="red card" />)
            case "subs":
                return(<img className={style.eventType} src={subs} alt="substitution" />)
                
        }
    }
    return(
        <div className={style.wrapper}>
            <div className={props.data.team === 0 ? style.team_a : style.team_b}>
                <p className={style.minute}>{`${props.data.minute}'`}</p>
                {
                    props.data.status === "subs" ? 
                    <div className={style.sub}>
                        <p className={style.player}>{props.data.player_in}</p>
                        <p className={style.player}>{props.data.player_out}</p>
                    </div>
                    :
                    <p className={style.player}>{props.data.player}</p>
                }

                {
                    status(props.data.status)
                }

            </div>
        </div>
    );
}

export default MatchEvent;