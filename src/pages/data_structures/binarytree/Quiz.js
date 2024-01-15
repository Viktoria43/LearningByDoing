import React from "react";
import QuizComponent from "../../QuizApp/QuizComponent";
import quizData from "../../QuizApp/quizData";

const quizStyle = {
    backgroundColor: '#3344dd',
    height: '500px',
};

const Quiz = () => {
    return (
        <div style={quizStyle}>
            <QuizComponent concept="Binary Trees" questions={quizData.binarytree} />
        </div>
    );
}

export default Quiz;