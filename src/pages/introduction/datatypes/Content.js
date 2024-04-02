import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const contentStyle = {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    padding: '20px',
};

const codeBlockStyle = {
    borderRadius: '20px',
    overflowX: 'auto',
    backgroundColor: '#2d2d2d',
    margin: '20px auto', 
    maxWidth: '80%',
};

const baseTextStyle = {
    textAlign: 'left',
    display: 'block',
    maxWidth: '80%',
    margin: '30px auto',
    paddingLeft: '20px',
};

const headingStyle = {
    textAlign: 'center',
    maxWidth: '80%',
    margin: '0 auto',
};

const Content = () => {
    const codeSnippet = 
    `int x = 5;
int y = 3;
int sum = x + y; // sum is now 8
double radius = 2.5;
double area = Math.PI * radius * radius; // calculates the area of a circle
char firstInitial = 'J';
char secondInitial = 'G';
String initials = String.valueOf(firstInitial) + String.valueOf(secondInitial); // combines characters into a String`;

    const codeSnippet2 = 
    `int myAge = 25; // This is fine
int myAge = 25.5; // This will result in a compilation error`;

    return (
        <div style={contentStyle}>
            <h1 style={headingStyle}>What Are Data Types?</h1>
            <p style={baseTextStyle}>In Java, data types are used to specify the type of data a variable can hold. They define the size and format of values that can be stored in variables. Java has two categories of data types:</p>
            <ul style={{ ...baseTextStyle, listStylePosition: 'inside', padding: 0 }}>
                <li>Primitive Data Types: These are basic data types provided by Java, such as int, double, char, boolean, etc. They are called "primitive" because they represent single values and are not composed of other values.</li>
                <li>Reference Data Types: These data types are used to create objects and reference them. Examples include classes, interfaces, and arrays. We'll focus on primitive data types in this lesson.</li>
            </ul>

            <h1 style={headingStyle}>Common Primitive Data Types:</h1>
            <p style={baseTextStyle}>Here are some common primitive data types in Java:</p>
            <ul style={{ ...baseTextStyle, listStylePosition: 'inside', padding: 0 }}>
                <li>int: Represents whole numbers (integers). Example: `int myAge = 25;`</li>
                <li>double: Represents floating-point numbers (numbers with decimal points). Example: `double pi = 3.14159;`</li>
                <li>char: Represents a single character. Example: `char grade = 'A';`</li>
                <li>boolean: Represents a true or false value. Example: `boolean isJavaFun = true;`</li>
            </ul>

            <h1 style={headingStyle}>Declaring Variables:</h1>
            <p style={baseTextStyle}>To use data types, you need to declare variables of the appropriate type. Variable declaration involves specifying the data type and a name for the variable.</p>
            
            <h1 style={headingStyle}>Initializing Variables:</h1>
            <p style={baseTextStyle}>Variables can be declared and initialized in one step. This means giving them an initial value.</p>

            <h1 style={headingStyle}>Using Variables:</h1>
            <div style={{...codeBlockStyle}}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Type Compatibility:</h1>
            <p style={baseTextStyle}>It's important to use the correct data type for your variables. For example, you can't assign a non-integer value to an `int` variable.</p>
            <div style={{...codeBlockStyle}}>
                <SyntaxHighlighter language="java" style={materialDark}>
                    {codeSnippet2}
                </SyntaxHighlighter>
            </div>

            <h1 style={headingStyle}>Conclusion:</h1>
            <p style={baseTextStyle}>Data types are fundamental in Java and are used to define the kind of data a variable can hold. There are two types of data types in Java: Primitive and Reference. Depending on the data type, there are various operations one can perform on the variables.</p>
        </div>
    );
}

export default Content;
