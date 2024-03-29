import React from "react";
import quizData from "../../QuizApp/quizData";
import QuizComponent from "../../QuizApp/QuizComponent";

const quizStyle = {
    backgroundColor: '#FFFFFF',
    height: '1400px',
};

const Quiz = () => {
    return (
        <div style={quizStyle}>
            <QuizComponent concept="QuickSort" questions={quizData.QuickSort} />
        </div>
    );
}

export default Quiz;