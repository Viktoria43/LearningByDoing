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
    `int x = 10;
int y = 5;
int sum = x + y; // addition
int difference = x - y; // subtraction
int product = x * y; // multiplication
int quotient = x / y; // division
int remainder = x % y; // modulus`;

    const codeSnippet2 = 
    `int x = 10;
x += 5; // equivalent to x = x + 5
x -= 5; // equivalent to x = x - 5
x *= 5; // equivalent to x = x * 5
x /= 5; // equivalent to x = x / 5
x %= 5; // equivalent to x = x % 5`;

    const codeSnippet3 = 
    `int x = 10;
int y = 5;
boolean isEqual = (x == y); // equal to
boolean isNotEqual = (x != y); // not equal to
boolean isGreaterThan = (x > y); // greater than
boolean isLessThan = (x < y); // less than
boolean isGreaterThanOrEqual = (x >= y); // greater than or equal to
boolean isLessThanOrEqual = (x <= y); // less than or equal to`;

    const codeSnippet4 = 
    `int x = 10;
int y = 5;
boolean isTrue1 = (x > 0) && (y > 0); // logical AND
boolean isTrue2 = (x > 0) || (y > 0); // logical OR
boolean isTrue3 = !(x > 0); // logical NOT`;

    return (
        <div style={contentStyle}>
            <h1 style={headingStyle}>Introduction to Operators</h1>
            <p style={baseTextStyle}>Operators are special symbols that perform specific operations on one or more operands and return a result. In Java, there are several types of operators, including arithmetic, assignment, comparison, logical, and bitwise operators.</p>

            <h1 style={headingStyle}>Arithmetic Operators</h1>
            <p style={baseTextStyle}>Arithmetic operators are used to perform mathematical operations such as addition, subtraction, multiplication, and division. Here are some examples of arithmetic operators in Java:</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Assignment Operators</h1>
            <p style={baseTextStyle}>Assignment operators are used to assign values to variables. Here are some examples of assignment operators in Java:</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet2}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Comparison Operators</h1>
            <p style={baseTextStyle}>Comparison operators are used to compare two values and return a boolean value (true or false). Here are some examples of comparison operators in Java:</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet3}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Logical Operators</h1>
            <p style={baseTextStyle}>Logical operators are used to combine multiple conditions and return a boolean value (true or false). Here are some examples of logical operators in Java:</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet4}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Conclusion</h1>
            <p style={baseTextStyle}>Operators are an essential part of programming in Java. By using different types of operators, you can perform various operations on your data and control the flow of your program. I hope this lesson has helped you understand the basics of operators in Java!</p>
        </div>
    );
}

export default Content;
