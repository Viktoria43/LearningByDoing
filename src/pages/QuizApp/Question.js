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
        <div style={{ textAlign: "center" }}> {/* Added style to center-align questions */}
            <p style={{ fontWeight: 'bold', marginBottom: '10px', color:"darkblue", fontSize: '25px' }}>{question}</p>
            {options.map((option, index) => (
                <div key={index} style={{ marginBottom: '5px' }}>
                    <button
                        onClick={() => handleOptionClick(option)}
                        style={{
                            backgroundColor:
                                selectedOption === option
                                    ? selectedOption === correctAnswer
                                        ? "lightgreen"
                                        : "#bf6770"
                                    : displayCorrectAnswers && option === correctAnswer
                                        ? "lightgreen"
                                        : "#82b0cf",
                            color: "black",
                            fontSize:"15px",
                            width: 'calc(100% - 14px)', // Adjusted width to cover the entire row, considering padding
                            padding: '8px 0', // Removed padding
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            outline: 'none',
                            marginLeft: '7px',
                            marginBottom: '5px'
                        }}
                        disabled={disabled || displayCorrectAnswers || selectedOption}
                    >
                        {option}
                    </button>

                </div>
            ))}
            {selectedOption && (
                <p style={{ color: selectedOption === correctAnswer ? 'green' : 'red' }}>
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
