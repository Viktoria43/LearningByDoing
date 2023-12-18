import Buttons from "./components/ButtonsContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {useState} from "react";
function Home(){
    const [isLoggedIn] = useState(window.localStorage.getItem('accessToken') ? true:false);

    return(
        <div className = "page">
            <div className = "content">
                <Header isLoggedIn={isLoggedIn} />
                <Buttons />
            </div>
            <Footer />
        </div>
    );
}

export default Home;