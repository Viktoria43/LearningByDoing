// Question.js
import React from "react";

const Question = ({ question, options, handleAnswer }) => {
    return (
        <div>
            <p>{question}</p>
            {options.map((option) => (
                <button key={option} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Question;
