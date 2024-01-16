import Menu from "../../components/Header";
import Content from "./Content";
import TwoPages from "../../components/TwoPages";
import Quiz from "./Quiz";

function Operations(){
    const level = 3;
    return (
        <div className = "page"> 
            <div className = "content">
            <Menu />
            <TwoPages 
                contentComponent={<Content />}
                quizComponent={<Quiz />}level={level}/>
            </div>
        </div>
    )
}
export default Operations;