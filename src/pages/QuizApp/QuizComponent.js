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

            // Display correct answers if necessary
            if (displayAnswers) {
                console.log("Correct Answers:");
                questions.forEach((question, index) => {
                    console.log(`${index + 1}. ${question.answer}`);
                });
            }
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
                        correctAnswer={questionData.answer} /* Pass the correct answer here */
                    />
                    <hr />
                </div>
            ))}
            {quizCompleted && (
                <div>
                    <p>Quiz completed! Your score is {score}/{questions.length}</p>
                    <button onClick={() => setDisplayAnswers(true)}>Display Correct Answers</button>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
