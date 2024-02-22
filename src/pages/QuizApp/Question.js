// Question.js
import React, { useState, useEffect } from "react";

const Question = ({ key, question, options, handleAnswer, correctAnswer, prompt, disabled, displayCorrectAnswers, reset }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleAnswer(option);
    };

    useEffect(() => {
        if (reset) {
            setSelectedOption(null);
        }
    }, [reset]);

    return (
        <div>
            <p>{question}</p>
            {options.map((option, index) => (
                <div key={index}>
                    <button
                        onClick={() => handleOptionClick(option)}
                        style={{
                            backgroundColor:
                                selectedOption === option
                                    ? selectedOption === correctAnswer
                                        ? "green"
                                        : "red"
                                    : displayCorrectAnswers && option === correctAnswer
                                        ? "green"
                                        : "black",
                            color: "white",
                        }}
                        disabled={disabled || displayCorrectAnswers || selectedOption}
                    >
                        {option}
                    </button>
                </div>
            ))}
            {selectedOption && (
                <p>
                    {selectedOption === correctAnswer
                        ? "Correct! "
                        : `Incorrect. `}
                    {prompt && <span>{prompt}</span>}
                </p>
            )}
        </div>
    );
};

export default Question;
