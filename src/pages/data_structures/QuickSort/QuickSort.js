import Menu from "../../components/Header";
import Footer from "../../components/Footer";
import ThreePages from "../../components/ThreePages";
import Content from "./Content";
import Visualisation from "./Visualisation";
import Quiz from "./Quiz";

function QuickSort(){
    const level = 12;
    return (
        <div className = "page"> 
            <div className = "content">
            <Menu />
            <ThreePages 
                contentComponent={<Content />}
                visualisationComponent={<Visualisation />}
                quizComponent={<Quiz />}
                level={level}/>
            </div>
            <Footer />
        </div>
    );
}
export default QuickSort;