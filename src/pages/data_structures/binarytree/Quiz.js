import React from "react";
import QuizComponent from "../../QuizApp/QuizComponent";
import quizData from "../../QuizApp/quizData";

const quizStyle = {
    backgroundColor: '#FFFFFF',
    height: 'auto',
};

const Quiz = () => {
    return (
        <div style={quizStyle}>
            <QuizComponent concept="BinaryTree" questions={quizData.BinaryTree} />
        </div>
    );
}

export default Quiz;