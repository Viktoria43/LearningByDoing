import React from "react";
import quizData from "../../QuizApp/quizData";
import QuizComponent from "../../QuizApp/QuizComponent";

const quizStyle = {
    backgroundColor: '#FFFFFF',
    height: 'auto',
};

const Quiz = () => {
    return (
        <div style={quizStyle}>
            <QuizComponent concept="Functions" questions={quizData.functions} />
        </div>
    );
}

export default Quiz;