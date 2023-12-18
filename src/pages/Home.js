import Buttons from "./components/ButtonsContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {useState} from "react";
function Home(){


    return(
        <div className = "page">
            <div className = "content">
                <Header  />
                <Buttons />
            </div>
            <Footer />
        </div>
    );
}

export default Home;