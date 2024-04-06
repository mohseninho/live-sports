import { useEffect } from "react";
import style from "./banner.module.css";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowRight,faCircleArrowLeft,} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data/banners/banners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Banner() {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        setBanners(data);
        // axios.get("http://localhost:7000/data").then(result=>{
        //     setBanners(result.data);
        // })
    }, []);


    return (
        <Swiper
            modules={[Navigation, Pagination , Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay = {true}
            pagination={{ clickable: true }}
            className={style.slider}
        >
            
     
            {
                banners.map((banner , idx)=>(
                            
                    <SwiperSlide key={idx}><img className={style.slide} src={banner.url} alt="" /></SwiperSlide>

                ))  
            }
         
            

            {/* <SwiperSlide className={style.slide}><img src={banners.url} alt="" /></SwiperSlide> */}
        </Swiper>
    );
}

export default Banner;
