import { Routes, Route } from "react-router-dom";
import style from "./app.module.css";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./pages/main/Main";
import NotFound from "./pages/notFound/NotFound";
import Match from "./pages/match/Match";
import AboutUs from "./pages/aboutUs/AboutUs";
import Players from "./pages/players/Players";
import Competition from "./pages/competition/Competition";
import Login from "./pages/Login/Login";

function App() {
    return (
        <div className={style.app}>
            <div className={style.wrapper}>
                <Header />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/match/:id" element={<Match />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/players/:id" element={<Players />} />
                    <Route path="/competition/:id" element={<Competition />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;
