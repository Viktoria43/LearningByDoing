// Question.js
import React, { useState } from "react";

const Question = ({ question, options, handleAnswer, correctAnswer, prompt }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleAnswer(option);
    };

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
                                        ? "green" // green for correct answer
                                        : "red" // red for incorrect answer
                                    : "black", // black for unchosen options
                            color: "white", // white text for visibility
                        }}
                        disabled={selectedOption}
                    >
                        {option}
                    </button>
                </div>
            ))}
            {selectedOption && (
                <p>
                    {selectedOption === correctAnswer
                        ? "Correct! "
                        : (
                            <>
                            Incorrect. {prompt && <span>{prompt}</span>}
                            </>
                        )}
                </p>
            )}
        </div>
    );
};

export default Question;
