import Menu from "../../components/Header";
import TwoPages from "../../components/TwoPages";
import Content from "./Content";
import Quiz from "./Quiz";

function Conditionals(){
    const level = 2;
    return (
        <div className = "page"> 
            <div className = "content">
            <Menu />
            <TwoPages 
                contentComponent={<Content />}
                quizComponent={<Quiz />}
                level={level}/>
            </div>
        </div>
    )
}
export default Conditionals;