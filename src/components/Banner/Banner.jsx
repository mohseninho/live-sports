import { useEffect } from "react";
import style from "./banner.module.css"
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight ,faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
function Banner(){
    const [banners , setBanners] = useState([]);
    let [current , setCurrent] = useState(0);
    let slideInterval;
    const slideTime = 4000;
    const isAuto = true;

    function classNameSetter(index){
        return(index === current ? (style.current) : (style.slide));
    }

    function next(){
        setCurrent(current === banners.length - 1 ? 0 : current + 1);
    }

    function prev(){
        setCurrent(current === 0 ? banners.length - 1 : current - 1);
    }

    function autoSlide(){
        slideInterval = setInterval(next , slideTime);
    }

    useEffect(()=>{
        axios.get("http://localhost:7000/data").then(result=>{
            setBanners(result.data);
        })

        setCurrent(0);
    },[])

    useEffect(()=>{
        if(isAuto){
            autoSlide();
        }
        return () => clearInterval(slideInterval);
    } , [current])



    return(
        <div className={style.bannerWrapper}>
            <FontAwesomeIcon className={style.next} icon={faCircleArrowRight} onClick={next} />
            {
                banners.map((banner , index)=>(
                    <img className={classNameSetter(index)} key={index} src={banner.url} alt="slide" />
                ))
            }
            <FontAwesomeIcon className={style.prev} icon={faCircleArrowLeft} onClick={prev} />
        </div>
    )
}

export default Banner;