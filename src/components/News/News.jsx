import style from "./news.module.css"
function News(props){
    return(
        <div className={style.wrapper}>
            <p className={style.title}>{props.data.title}</p>
            <p className={style.description}>{props.data.description}</p>
        </div>
    );
}

export default News;