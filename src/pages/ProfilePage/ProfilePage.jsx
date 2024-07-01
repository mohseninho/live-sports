import { useContext } from "react";
import style from "./profilePage.module.css"
import { AppContext } from "../../App";
import { Chart, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
Chart.register(...registerables);
function ProfilePage() {
    const { user } = useContext(AppContext);
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.profileInfo}>
                    <img className={style.avatar} src={user.avatar} alt="avatar" />
                </div>
                <div className={style.statistic}>
                    <Line
                        data={{
                            labels: [2020, 2021, 2022, 2023],
                            datasets: [
                                {
                                    label: "matches",
                                    data: [24, 42, 15, 20],
                                    fill: false,
                                    borderColor: 'rgb(75, 192, 192)',
                                    tension: 0.2,
                                }
                            ]
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;