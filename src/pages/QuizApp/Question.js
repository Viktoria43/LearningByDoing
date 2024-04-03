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
            <p style={{ fontWeight: 'bold', marginBottom: '10px', color:"darkblue", fontSize: '25px', marginLeft:'70px', textAlign:"center" }}>{question}</p>
            {options.map((option, index) => (
                <div key={index} style={{ marginBottom: '5px', textAlign:"center"}}>
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
                            marginLeft:'80px',
                            textAlign:"center"// Adjust as per your design
                        }}
                        disabled={disabled || displayCorrectAnswers || selectedOption}
                    >
                        {option}
                    </button>
                </div>
            ))}
            {selectedOption && (
                <p style={{ color: selectedOption === correctAnswer ? 'green' : 'red', marginLeft:"80px", textAlign:"center"}}>
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

