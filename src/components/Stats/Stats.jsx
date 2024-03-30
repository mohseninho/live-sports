import style from "./stats.module.css"
function Stats(props){
    function colorSetter(){
        if(props.data.data[0] > props.data.data[1]){
            return(style.background1);
        }else if(props.data.data[0] < props.data.data[1]){
            return(style.background2);
        }else{
            return(style.background);
        }
    }
    return(
        <div className={style.wrapper}>
            <div className={colorSetter()}>
                <p>{props.data.data[0]}</p>
                <p className={style.stat}>{props.data.stat}</p>
                <p>{props.data.data[1]}</p>
            </div>
        </div>
    );
}

export default Stats;