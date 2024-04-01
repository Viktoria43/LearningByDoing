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
    `// Declaration and Initialization of an array
    int[] myArray; // Declaration
    myArray = new int[5]; // Initialization (creating an array of size 5)`;

    const codeSnippet2 = 
    `// Declaring and Initializing an array in one line
    int[] numbers = new int[5]; // Creates an array of integers with size 5
    
    // Initializing an array with values
    int[] myArray = { 10, 20, 30, 40, 50 }; // Initializing with specific values`;

    const codeSnippet3 = 
    `int[] myArray = { 10, 20, 30, 40, 50 };

    // Accessing elements of the array
    int firstElement = myArray[0]; // Accessing the first element (index 0)
    int thirdElement = myArray[2]; // Accessing the third element (index 2)
    
    // Modifying array elements
    myArray[4] = 60; // Modifying the fifth element (index 4)`;

    const codeSnippet4 = 
    `int[] myArray = { 10, 20, 30, 40, 50 };

    // Getting the length of the array
    int arrayLength = myArray.length; // Returns the length of the array (5 in this case)
    
    // Iterating through the array using a for loop
    for (int i = 0; i < myArray.length; i++) {
        System.out.println("Element at index " + i + ": " + myArray[i]);
    }`;

    const codeSnippet5 = 
    `// Array of Strings
    String[] names = { "Alice", "Bob", "Charlie" };
    
    // Multi-dimensional array
    int[][] matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };`;

    return (
        <div style={contentStyle}>
            <h1 style={headingStyle}>What are Arrays?</h1>
            <p style={baseTextStyle}>Arrays are a collection of elements of the same type, stored in contiguous memory locations. They provide a convenient way to store and access multiple values under a single variable name.</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Declaring and Initializing Arrays</h1>
            <p style={baseTextStyle}>Arrays can be declared and initialized in Java using square brackets []. Initialization involves allocating memory for the array and specifying its size.</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet2}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Accessing Elements of Arrays</h1>
            <p style={baseTextStyle}>Array elements are accessed using their index, starting from 0 to length - 1. Indexing allows reading and modifying individual elements of an array.</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet3}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Array Length and Iterating through Arrays</h1>
            <p style={baseTextStyle}>The length property in Java arrays returns the number of elements in the array. Iterating through arrays using loops (like for loop) helps in accessing and processing each element.</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet4}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Arrays of Other Data Types and Multi-Dimensional Arrays</h1>
            <p style={baseTextStyle}>Arrays can hold elements of different data types. Multi-dimensional arrays are arrays of arrays and can have multiple dimensions. They are particularly useful for representing matrices or grid-like structures.</p>
            <div style={codeBlockStyle}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet5}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Conclusion</h1>
            <p style={baseTextStyle}>Arrays in Java serve as crucial data structures, efficiently storing elements accessed by indices. Their fixed size and the ability to access elements in constant time make them highly efficient for various programming scenarios. Understanding how to declare, initialize, and manipulate arrays is fundamental for effective problem-solving in Java. I hope this lesson has provided you with a solid foundation in using arrays in your Java programs.</p>
        </div>
    );
}

export default Content;
