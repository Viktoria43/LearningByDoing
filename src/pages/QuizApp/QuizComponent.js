import React, { useState } from "react";
import Question from "./Question";
import quizData from "./quizData";

const QuizComponent = ({ concept, questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [displayAnswers, setDisplayAnswers] = useState(false);

    if (!questions || questions.length === 0) {
        // Handle the case where questions are not available
        return <div>No questions available</div>;
    }

    const handleAnswer = (selectedOption) => {
        // Update the user's answer for the current question
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestion] = selectedOption;
        setUserAnswers(updatedUserAnswers);

        // Check if the selected option is correct and update the score
        if (selectedOption === questions[currentQuestion].answer) {
            setScore((prevScore) => prevScore + 1);
        }

        // Move to the next question or complete the quiz
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Quiz completed
            setQuizCompleted(true);
        }
    };

    const handleRetryIncorrect = () => {
        // Find the index of the first incorrect answer
        const firstIncorrectIndex = userAnswers.findIndex(
            (userAnswer, index) => userAnswer !== questions[index].answer
        );

        // If all answers are correct, reset and start again
        if (firstIncorrectIndex === -1) {
            setScore(0);
            setUserAnswers(Array(questions.length).fill(null));
            setCurrentQuestion(0);
            setQuizCompleted(false);
        } else {
            // Retry incorrect question
            setCurrentQuestion(firstIncorrectIndex);
        }
    };

    return (
        <div>
            <h2>{concept} Quiz</h2>
            {questions.map((questionData, index) => (
                <div key={index}>
                    <Question
                        question={questionData.question}
                        options={questionData.options}
                        handleAnswer={handleAnswer}
                        correctAnswer={questionData.answer}
                        prompt={questionData.prompt}
                        disabled={quizCompleted}
                    />
                    <hr />
                </div>
            ))}
            {quizCompleted && (
                <div>
                    <p>Quiz completed! Your score is {score}/{questions.length}</p>
                    <button onClick={() => setDisplayAnswers(true)}>Display Correct Answers</button>
                    <button onClick={handleRetryIncorrect}>Retry Incorrect Questions</button>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
