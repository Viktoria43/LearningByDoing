import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const contentStyle = {
    backgroundColor: '#dd3344',
    height: '1750px',
    padding: '20px',
};

const codeBlockStyle = {
    borderRadius: '15px',
    overflowX: 'auto',
    backgroundColor: '#2d2d2d',
  };


const Content = () => {
    const codeSnippet = 
    `    for (initialization; condition; update) {
        // code to be executed
        }`;

    const codeSnippet2 = 
    `    while (condition) {
        // code to be executed
        }`;    
    
    const codeSnippet3 = 
    `    do {
        // code to be executed
        } while (condition);`; 
    
    const codeSnippet4 = 
    `    for (int i = 1; i <= 10; i++) {
        System.out.println(i);
        }`; 

    const codeSnippet5 = 
    `    int sum = 0;
    for (int i = 1; i <= 10; i++) {
    sum += i;
    }
    System.out.println(sum);`; 
    
    const codeSnippet6 = 
    `    for (int i = 2; i <= 10; i += 2) {
        System.out.println(i);
        
        }`; 

    return (
        <div style={contentStyle}>
           <p>Loops are used to execute a block of code repeatedly. They are an essential part of programming and can help you write more efficient and concise code. In this lesson, we will learn about the basic syntax of loops and how to use them in your code.</p> 

           <h1>What are Loops?</h1>
           <p>Loops are used to execute a block of code repeatedly until a certain condition is met. There are three types of loops in Java: for, while, and do-while. The basic syntax of a for loop is as follows:</p>
           <div style={{ ...codeBlockStyle, maxWidth: '700px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet}
            </SyntaxHighlighter>
           </div>
           <p>The "initialization" statement is executed only once at the beginning of the loop. The "condition" is evaluated at the beginning of each iteration. If the condition is true, the code inside the loop will be executed. The "update" statement is executed at the end of each iteration.</p>
           <p>The basic syntax of a while loop is as follows:</p> 
           <div style={{ ...codeBlockStyle, maxWidth: '700px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet2}
            </SyntaxHighlighter>
           </div>
           <p>The "condition" is evaluated at the beginning of each iteration. If the condition is true, the code inside the loop will be executed.</p>
           <p>The basic syntax of a do-while loop is as follows:</p>
           <div style={{ ...codeBlockStyle, maxWidth: '700px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet3}
            </SyntaxHighlighter>
           </div>


           <h1>Examples</h1>
           <p>Here are some examples of how loops can be used in your code:</p>
           <h3>Example 1: Printing Numbers from 1 to 10</h3>
           <div style={{ ...codeBlockStyle, maxWidth: '700px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet4}
            </SyntaxHighlighter>
           </div>
           <p>In this example, we are using a for loop to print numbers from 1 to 10.</p>

           <h3>Example 2: Summing Numbers from 1 to 10</h3>
           <div style={{ ...codeBlockStyle, maxWidth: '700px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet5}
            </SyntaxHighlighter>
           </div>
           <p>In this example, we are using a for loop to sum numbers from 1 to 10.</p>

           <h3>Example 3: Printing Even Numbers from 1 to 10</h3>
           <div style={{ ...codeBlockStyle, maxWidth: '700px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet6}
            </SyntaxHighlighter>
           </div> 
           <p>In this example, we are using a for loop to print even numbers from 1 to 10.</p>


            <h1>Conclusion</h1>
            <p>Loops are an essential part of programming in Java. By using different types of loops, you can perform various operations on your data and control the flow of your program. I hope this lesson has helped you understand the basics of loops in Java!</p>
        </div>
    );
}

export default Content;