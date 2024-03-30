import { Routes, Route } from "react-router-dom";
import style from "./app.module.css";
import Main from "./pages/main/Main";
import NotFound from "./pages/notFound/NotFound";
import Match from "./pages/match/Match";
import AboutUs from "./pages/aboutUs/AboutUs";
import Players from "./pages/players/Players";

function App() {
    return (
        <div className={style.app}>
            <div className={style.wrapper}>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/match/:id" element={<Match />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/players/:id" element={<Players />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
