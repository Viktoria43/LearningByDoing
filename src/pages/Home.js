import Buttons from "./components/ButtonsContainer";
import Header from "./components/Header";
import {useState} from "react";
function Home(){


    return(
        <div className = "page">
            <div className = "content">
                <Header  />
                <Buttons />
            </div>
        </div>
    );
}

export default Home;