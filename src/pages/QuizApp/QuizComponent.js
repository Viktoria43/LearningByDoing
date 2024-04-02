import React, { useState, useEffect } from "react";
import Question from "./Question";
import quizData from "./quizData";
import axios from 'axios';

const QuizComponent = ({ concept, unlockThreshold, updateQuizScore }) => {
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
        resetState();
        setRetryCount((prev) => prev + 1); // Increment retryCount every time the "Retry" button is clicked
    };

    const handleQuizCompletion = () => {
        // Calculate the score based on the user's answers
        const newScore = userAnswers.reduce((score, userAnswer, index) => {
            // Retrieve the correct answer for the current question
            const correctAnswer = quizData[concept][index].answer;

            // Check if the user's answer matches the correct answer
            if (userAnswer === correctAnswer) {
                return score + 1; // Increment score if the answer is correct
            } else {
                return score; // Otherwise, keep the score unchanged
            }
        }, 0);

        setScore(newScore); // Update the score state

        if (typeof updateQuizScore === 'function') {
            updateQuizScore(newScore);
        } else {
            console.error("updateQuizScore is not a function. Make sure it's passed down as a prop.");
        } // Update the score in the parent component, troubleshoot error

        // If the quiz is completed and the score meets the unlock threshold, update module access
        if (quizCompleted && newScore >= unlockThreshold) {
            axios.post('http://localhost:4000/update-module', {
                username: 'user', // 'user' -> the actual username
                moduleNumber: concept + 1 // concept is the current module number
            })
                .then(response => {
                    if (response.data.success) {
                        console.log('Module unlocked successfully');
                    } else {
                        console.error('Failed to unlock module:', response.data.message);
                    }
                })
                .catch(error => {
                    console.error('Error unlocking module:', error);
                });
        }
    };

    // Call handleQuizCompletion when quiz is completed
    useEffect(() => {
        if (quizCompleted) {
            handleQuizCompletion();
        }
    }, [quizCompleted]);

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

QuizComponent.defaultProps = {
    unlockThreshold: 3, // Set your default value here
};

export default QuizComponent;
