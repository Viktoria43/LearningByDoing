import Menu from "../../components/Header";
import ThreePages from "../../components/ThreePages";
import Content from "./Content";
import Visualisation from "./Visualisation";
import Quiz from "./Quiz";


const InsertionSort = () => {
    const level = 10;

    return (
        <div className = "page"> 
            <div className = "content">
            <Menu />
            <ThreePages 
                contentComponent={<Content />}
                visualisationComponent={<Visualisation />}
                quizComponent={<Quiz />}
                level={level}
            />
            </div>
        </div>
    );
}
export default InsertionSort;