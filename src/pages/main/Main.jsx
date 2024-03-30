
import Banner from "../../components/Banner/Banner.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import LiveScoresWrapper from "../../components/LiveScoresWrapper/LiveScoresWrapper.jsx";

function Main(){
    return(
        <div>
            <Header />
            <Banner />
            <LiveScoresWrapper />
            <Footer />
        </div>
    );
}

export default Main;