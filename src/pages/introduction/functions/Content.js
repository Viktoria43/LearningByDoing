import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const contentStyle = {
    backgroundColor: '#FFFFFF',
    height: '1250px',
    padding: '20px',
};

const codeBlockStyle = {
    borderRadius: '15px',
    overflowX: 'auto',
    backgroundColor: '#2d2d2d',
  };

const Content = () => {
    const codeSnippet = 
    `return_type function_name(parameter_list) {
        // code to be executed
        return value;
        }`;
    
    
    const codeSnippet2 = 
    `public static int add(int num1, int num2) {
        int sum = num1 + num2;
        return sum;
        }`;


    const codeSnippet3 = 
    `public static boolean isEven(int num) {
        if (num % 2 == 0) {
        return true;
        } else {
        return false;
            }
        }`;

    return (
        <div style={contentStyle}>
            <p>Functions are a way to group a set of related statements together that perform a specific task. They are used to break down large programs into smaller, more manageable pieces. In this lesson, we will learn about the basic syntax of functions and how to use them in your code.</p>

            <h1>What are Functions?</h1>
            <p>Functions are a block of code that performs a specific task. They take input, perform some computation on the input, and return the output. The basic syntax of a function is as follows:</p>
            <div style={{ ...codeBlockStyle, maxWidth: '650px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet}
            </SyntaxHighlighter>
            </div>
            <p>The <span style={{ fontStyle: 'italic' }}>return_type</span> is the data type of the value that the function returns. The <span style={{ fontStyle: 'italic' }}>function_name</span> is the name of the function. The <span style={{ fontStyle: 'italic' }}>parameter_list</span> is a list of parameters that the function takes as input. The value is the output of the function.</p>

            <h1>Examples</h1>
            <p>Here are some examples of how functions can be used in your code:</p>

            <h3>Example 1: Adding Two Numbers</h3>
            <div style={{ ...codeBlockStyle, maxWidth: '650px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet2}
            </SyntaxHighlighter>
            </div>
            <p>In this example, we are defining a function called <span style={{ fontStyle: 'italic' }}>add</span> that takes two integers as input and returns their sum.</p>


            <h3>Example 2: Checking if a Number is Even</h3>
            <div style={{ ...codeBlockStyle, maxWidth: '650px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet3}
            </SyntaxHighlighter>
            </div>
            <p>In this example, we are defining a function called <span style={{ fontStyle: 'italic' }}>isEven</span> that takes an integer as input and returns <span style={{ fontStyle: 'italic' }}>true</span> if it is even and <span style={{ fontStyle: 'italic' }}>false</span> otherwise.</p>

            <h1>Conclusion</h1>
            <p>Functions are an essential part of programming in Java. By using functions, you can break down large programs into smaller, more manageable pieces. I hope this lesson has helped you understand the basics of functions in Java!</p>
        </div>
    );
}

export default Content;