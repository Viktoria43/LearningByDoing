import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const contentStyle = {
    backgroundColor: '#FFFFFF',
    height: 'auto', 
    padding: '20px',
};

const codeBlockStyle = {
    borderRadius: '15px',
    overflowX: 'auto',
    backgroundColor: '#2d2d2d',
    margin: '20px auto', 
    maxWidth: '80%',
};

const baseTextStyle = {
    textAlign: 'left',
    display: 'block',
    maxWidth: '80%',
    margin: '20px auto', 
    paddingLeft: '20px',
};

const headingStyle = {
    textAlign: 'center',
    maxWidth: '80%',
    margin: '40px auto', 
};

const Content = () => {
    const codeSnippet = 
    `if (condition) {
        // code to execute if condition is true
    } else {
        // code to execute if condition is false
    }`;

    const codeSnippet2 = 
    `let num = -5;

if (num > 0) {
    console.log("The number is positive");
} else {
    console.log("The number is negative");
}`;

    const codeSnippet3 = 
    `boolean isLoggedIn = false;
    if (isLoggedIn) {
        console.log("Welcome back!");
    } else {
        console.log("Please log in.");
    }`;

    return (
        <div style={contentStyle}>
            <p style={baseTextStyle}>Conditional statements are an essential part of programming. They allow you to control the flow of your program based on certain conditions. In this lesson, we will learn about the basic syntax of conditional statements and how to use them in your code.</p>

            <h1 style={headingStyle}>What are Conditional Statements?</h1>
            <p style={baseTextStyle}>Conditional statements are used to execute a block of code if a certain condition is true. They are also used to execute a different block of code if the condition is false. The basic syntax of a conditional statement is as follows:</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
            <p style={baseTextStyle}>The if keyword is followed by a set of parentheses that contain the condition to be evaluated. If the condition is true, the code inside the curly braces will be executed. If the condition is false, the code inside the else block will be executed.</p>
        
            <h1 style={headingStyle}>Examples:</h1>
            <p style={baseTextStyle}>Here are some examples of how conditional statements can be used in your code:</p>       
            <h3 style={headingStyle}>Example 1: Checking if a Number is Positive or Negative</h3>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet2}
                </SyntaxHighlighter>
            </div>
            <p style={baseTextStyle}>In this example, we are checking whether the value of num is positive or negative. If num is greater than zero, the message “The number is positive” will be printed to the console. Otherwise, the message “The number is negative” will be printed.</p>
        
            <h3 style={headingStyle}>Example 2: Checking if a User is Logged In</h3>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet3}
                </SyntaxHighlighter>
            </div>
            <p style={baseTextStyle}>In this example, we are checking whether a user is logged in or not. If isLoggedIn is true, the message “Welcome back!” will be printed to the console. Otherwise, the message “Please log in.” will be printed.</p>

            <h1 style={headingStyle}>Conclusion:</h1>
            <p style={baseTextStyle}>Conditional statements are an essential part of programming. They allow you to control the flow of your program based on certain conditions. By using conditional statements, you can make your programs more dynamic and responsive.</p>
        </div>
    );
}

export default Content;
