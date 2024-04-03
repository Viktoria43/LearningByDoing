// Question.js
import React, { useState, useEffect } from "react";

const Question = ({ question, options, handleAnswer, correctAnswer, prompt, disabled, displayCorrectAnswers, reset }) => {
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
            <p style={{ fontWeight: 'bold', marginBottom: '10px', color:"darkblue", fontSize: '25px', marginLeft:'50px' }}>{question}</p>
            {options.map((option, index) => (
                <div key={index} style={{ marginBottom: '5px' }}>
                    <button
                        onClick={() => handleOptionClick(option)}
                        style={{
                            backgroundColor:
                                selectedOption === option
                                    ? selectedOption === correctAnswer
                                        ? "lightgreen"
                                        : "red"
                                    : displayCorrectAnswers && option === correctAnswer
                                        ? "lightgreen"
                                        : "lightblue",
                            color: "black",
                            fontSize:"15px",
                            padding: '5px 10px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            outline: 'none',
                            marginRight: '5px',
                            marginLeft:'60px'// Adjust as per your design
                        }}
                        disabled={disabled || displayCorrectAnswers || selectedOption}
                    >
                        {option}
                    </button>
                </div>
            ))}
            {selectedOption && (
                <p style={{ color: selectedOption === correctAnswer ? 'green' : 'red', marginLeft:"60px" }}>
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

