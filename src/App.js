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
import { createContext, useState } from "react";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
export const AppContext = createContext(null);
function App() {

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});

    return (

        <div className={style.app}>
            <div className={style.wrapper}>
                <AppContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
                    <Header />
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/match/:id" element={<Match />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/players/:id" element={<Players />} />
                            <Route path="/competition/:id" element={<Competition />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <Footer />
                </AppContext.Provider>
            </div>
        </div>
    );
}

export default App;
