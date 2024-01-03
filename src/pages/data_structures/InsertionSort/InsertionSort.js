import Menu from "../../components/Header";
import Footer from "../../components/Footer";
import ThreePages from "../../components/ThreePages";
import Content from "./Content";
import Visualisation from "./Visualisation";
import Quiz from "./Quiz";
//import {useState} from "react";
import axios from "axios";
import {useEffect, useState} from "react";

const InsertionSort = () => {
    const level = 10;
  //  const [token, setToken] = useState(null);

    // useEffect(() => {
    //
    //     const fetchToken = async () => {
    //         try {
    //             const response = await axios.post('http://localhost:4000/login',{level});
    //             const { token } = response.data;
    //             console.log(token);
    //             setToken(token);
    //
    //         } catch (error) {
    //             console.error('Error fetching token:', error);
    //
    //         }
    //     };
    //
    //     fetchToken();
    // }, []);
    return (
        <div className = "page"> 
            <div className = "content">
            <Menu />
            <ThreePages 
                contentComponent={<Content />}
                visualisationComponent={<Visualisation />}
                quizComponent={<Quiz />}
                level={level}
              //  token={token}


            />
            </div>
            <Footer />
        </div>
    );
}
export default InsertionSort;