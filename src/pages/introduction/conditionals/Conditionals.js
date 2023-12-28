import Menu from "../../components/Header";
import Footer from "../../components/Footer";
import TwoPages from "../../components/TwoPages";
import Content from "./Content";
import Quiz from "./Quiz";

function Conditionals(){
    return (
        <div className = "page"> 
            <div className = "content">
            <Menu />
            <TwoPages 
                contentComponent={<Content />}
                quizComponent={<Quiz />}/>
            </div>
            <Footer />
        </div>
    )
}
export default Conditionals;