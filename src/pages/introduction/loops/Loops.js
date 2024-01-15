import Menu from "../../components/Header";
import Footer from "../../components/Footer";
import TwoPages from "../../components/TwoPages";
import Content from "./Content";
import Quiz from "./Quiz";

function Loops(){
    const level = 4;
    return (
        <div className = "page"> 
            <div className = "content">
            <Menu />
            <TwoPages 
                contentComponent={<Content />}
                quizComponent={<Quiz />}level={level}/>
            </div>
            <Footer />
        </div>
    )
}
export default Loops;