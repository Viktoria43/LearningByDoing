import React from "react";
import quizData from "../../QuizApp/quizData";
import QuizComponent from "../../QuizApp/QuizComponent";

const quizStyle = {
    backgroundColor: '#FFFFFF',
    height: '1610px',
};

const Quiz = () => {
    return (
        <div style={quizStyle}>
            <QuizComponent concept="Datatypes" />
        </div>
    );
}

export default Quiz;