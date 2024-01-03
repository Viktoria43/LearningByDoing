// QuizComponent.js
import React, { useState } from "react";
import Question from "./Question";

const QuizComponent = ({ concept, questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    if (!questions || questions.length === 0) {
        // Handle the case where questions are not available
        return <div>No questions available</div>;
    }

    const handleAnswer = (selectedOption) => {
        const currentQuestionData = questions[currentQuestion];
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            alert(`Quiz for ${concept} completed! Your score is ${score}/${questions.length}`);
            // Optionally, you can handle what to do after completing the quiz.
        }
    };

    return (
        <div>
            <h2>{concept} Quiz</h2>
            {/* Render all questions sequentially */}
            {questions.map((questionData, index) => (
                <div key={index}>
                    <Question
                        question={questionData.question}
                        options={questionData.options}
                        handleAnswer={handleAnswer}
                    />
                    <hr /> {/* Optional: Add a horizontal line between questions for visual separation */}
                </div>
            ))}
        </div>
    );
};

export default QuizComponent;
