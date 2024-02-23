import React, { useState, useEffect } from "react";
import Question from "./Question";
import quizData from "./quizData";

const QuizComponent = ({ concept, unlockThreshold }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(0));
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [displayCorrectAnswers, setDisplayCorrectAnswers] = useState(false);
    const [retryCount, setRetryCount] = useState(0); // Add this state variable


    useEffect(() => {
        resetState();
    }, [concept]);

    const resetState = () => {
        const conceptData = quizData[concept];

        if (!Array.isArray(conceptData) || conceptData.length === 0) {
            console.error(`Quiz data not defined or empty for concept: ${concept}`);
            return;
        }

        setCurrentQuestion(0);
        setScore(0);
        setUserAnswers(Array(conceptData.length).fill(null));
        setQuizCompleted(false);
        setDisplayCorrectAnswers(false);
    };

    const handleAnswer = (selectedOption) => {
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestion] = selectedOption;
        setUserAnswers(updatedUserAnswers);

        if (selectedOption === quizData[concept][currentQuestion].answer) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestion < quizData[concept].length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true);

        }
    };

    const handleDisplayAnswers = () => {
        setDisplayCorrectAnswers((prev) => !prev); // Toggle the displayCorrectAnswers state
    };
    const handleRetry = () => {
        setCurrentQuestion(0);
        setScore(0);
        setUserAnswers(Array(quizData[concept].length).fill(null)); // Reset user's answers to null for each question
        setQuizCompleted(false);
        setDisplayCorrectAnswers(false);
        setRetryCount((prev) => prev + 1); // Increment retryCount every time the "Retry" button is clicked
    };


    return (
        <div>
            <h2>{concept} Quiz</h2>
            {quizData[concept].map((questionData, index) => (
                <div key={index}>
                    <Question
                        key={`${index}-${retryCount}`} // Add retryCount to the key
                        question={questionData.question}
                        options={questionData.options}
                        handleAnswer={handleAnswer}
                        correctAnswer={questionData.answer}
                        prompt={questionData.prompt}
                        disabled={quizCompleted}
                        displayCorrectAnswers={displayCorrectAnswers}
                    />
                    <hr />
                </div>
            ))}
            {quizCompleted && (
                <div>
                    <p>Quiz completed! Your score is {score}/{quizData[concept].length}</p>
                    <button onClick={handleDisplayAnswers}>Toggle Correct Answers</button>
                    <button onClick={handleRetry}>Retry</button>
                </div>
            )}

        </div>
    );
};

export default QuizComponent;
