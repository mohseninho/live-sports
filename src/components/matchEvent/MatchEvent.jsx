import style from "./matchEvent.module.css"
import scoreImg from "./../../assets/images/matchEvents/score.png"
import yellowCard from "./../../assets/images/matchEvents/yellowCard.png"
import redCard from "./../../assets/images/matchEvents/redCard.png"

function MatchEvent(props){

    function status(state){
        switch(state){
            case "goal":
                return(<img className={style.eventType} src={scoreImg} alt="goal" />)
            case "yellowCard":
                return(<img className={style.eventType} src={yellowCard} alt="event type" />)
            case "redCard":
                return(<img className={style.eventType} src={redCard} alt="event type" />)
        }
    }
    return(
        <div className={style.wrapper}>
            <div className={props.data.team === 0 ? style.team_a : style.team_b}>
                <p className={style.minute}>{`${props.data.minute}'`}</p>
                <p className={style.player}>{props.data.player}</p>
                {
                    status(props.data.status)
                }

            </div>
        </div>
    );
}

export default MatchEvent;