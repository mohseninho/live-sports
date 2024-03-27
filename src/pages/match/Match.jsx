import style from "./match.module.css";
import Header from "./../../components/Header/Header"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Match(){
    const matchId = useParams();
    const [matchData,setMatchData] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/data/${matchId}`).then(result=>{
            setMatchData(result.data);
        })
    },[]);

    return(
        <>
            <Header />
        </>
    );
}

export default Match;