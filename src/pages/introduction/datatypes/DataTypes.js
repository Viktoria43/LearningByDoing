import Menu from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "./Content";
import TwoPages from "../../components/TwoPages";
import Quiz from "./Quiz";


function DataTypes(){
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
export default DataTypes;