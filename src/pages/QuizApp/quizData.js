// quizData.js
const quizData = {
    variables: [
        {
            question: "What is a variable in programming?",
            options: [
                "A data type",
                "A storage location paired with an associated symbolic name",
                "An operator",
                "A function"
            ],
            answer: "A storage location paired with an associated symbolic name",
        },
        {
            question: "Which of the following is a correct variable declaration in Java?",
            options: [
                "int x = 10;",
                "let x = 10",
                "x:=10",
                "x = 10;"
            ],
            answer: "int x = 10;",
        },
        {
            question: "In Java, which keyword is used to declare a variable that cannot be reassigned?",
            options: [
                "var",
                "let",
                "const",
                "final"
            ],
            answer: "final",
        },
        {
            question: "What is the output of the following Java code?" +
                "       int x = 10;\n" +
                "       x = x + 5;\n" +
                "       System.out.println(x);",
            options: [
                "5",
                "10",
                "15",
                "Error"
            ],
            answer: "15",
        },
        {
            question: "What is a global variable in Java?",
            options: [
                "A variable that can only be used in the function where it is declared.",
                "A variable that can be used anywhere in the program.",
                "A variable that can only be used in the class where it is declared.",
                "A variable that can only be used in the file where it is declared."
            ],
            answer: "A variable that can be used anywhere in the program.",
        },
        {
            question: "What is the scope of a variable declared inside a method in Java?",
            options: [
                "It can be accessed anywhere in the class.",
                "It can be accessed anywhere in the method.",
                "It can be accessed anywhere in the program.",
                "It can be accessed anywhere in the package."
            ],
            answer: "It can be accessed anywhere in the method.",
        },
        // Add more questions...
    ],
    datatypes: [
        {
            question: "What is a data type in programming?",
            options: [
                "A storage location paired with an associated symbolic name",
                "An attribute of data which tells the compiler or interpreter how the programmer intends to use the data",
                "An operator",
                "A function"
            ],
            answer: "A storage location paired with an associated symbolic name",
        },
        {
            question: "Which of the following is a primitive data type in Java?",
            options: [
                "String",
                "int",
                "Array",
                "Class"
            ],
            answer: "int",
        },
        {
            question: "What is the default value of a boolean in Java?",
            options: [
                "true",
                "false",
                "0",
                "null"
            ],
            answer: "false",
        },
        {
            question: "What is the output of the following Java code?       double x = 10.5;\n" +
                "       int y = (int) x;\n" +
                "       System.out.println(y);",
            options: [
                "10.5",
                "10",
                "11",
                "null"
            ],
            answer: "10",
        },
        {
            question: "What is the range of a byte in Java?",
            options: [
                "-128 to 127",
                "-32768 to 32767",
                "-2147483648 to 2147483647",
                "0 to 65535"
            ],
            answer: "-128 to 127",
        },
        {
            question: "What is the difference between a primitive data type and a reference data type in Java?",
            options: [
                "Primitive data types can store multiple values, while reference data types can only store a single value.",
                "Primitive data types can only store numeric values, while reference data types can store any type of value.",
                "Primitive data types are mutable, while reference data types are immutable.",
                "Primitive data types are stored in stack, while reference data types are stored in heap.",
            ],
            answer: "Primitive data types are stored in stack, while reference data types are stored in heap.",
        },
        // Questions for Concept 2...
    ],
    conditionals: [
        {
            question: "What is a conditional statement in programming?",
            options: [
                "A statement that performs different computations or actions depending on whether a programmer-specified boolean condition evaluates to true or false",
                "A statement that is used to perform actions based on a specific condition",
                "A statement that is used to declare variable",
                "A statement that is used to define a method"
            ],
            answer: "A statement that performs different computations or actions depending on whether a programmer-specified boolean condition evaluates to true or false",
        },
        {
            question: "Which of the following is a primitive data type in Java?",
            options: [
                "String",
                "int",
                "Array",
                "Class"
            ],
            answer: "int",
        },
        {
            question: "What is the default value of a boolean in Java?",
            options: [
                "true",
                "false",
                "0",
                "null"
            ],
            answer: "false",
        },
        {
            question: "Which of the following is a correct syntax for an if statement in Java?",
            options: [
                "if (condition) { // code }",
                "if condition { // code }",
                "if condition: { // code }",
                "if: condition { // code }",
            ],
            answer: "if (condition) { // code }",
        },
        {
            question: "What is the purpose of the else clause in an if statement?",
            options: [
                "To specify a block of code to be executed if the condition is false",
                "To specify a block of code to be executed if the condition is true",
                "To specify a block of code to be executed regardless of the condition",
                "To specify a block of code to be executed before the if statement",
            ],
            answer: "To specify a block of code to be executed if the condition is false",
        },
        {
            question: "What is the output of the following Java code?\nint x = 10;\nif (x > 5) {\n    System.out.println(\"Hello\");\n} else {\n    System.out.println(\"World\");\n}",
            options: [
                "Hello",
                "World",
                "HelloWorld",
                "Error",
            ],
            answer: "Hello",
        },
        {
            question: "What is a switch statement in Java?",
            options: [
                "A multi-way branch statement that provides an easy way to dispatch execution to different parts of code based on the value of an expression",
                "A statement that is used to declare variables",
                "A statement that is used to define a method",
                "A statement that is used to perform actions based on a specific condition",
            ],
            answer: "A multi-way branch statement that provides an easy way to dispatch execution to different parts of code based on the value of an expression",
        },
        {
            question: "What is the output of the following Java code?\nint x = 2;\nswitch (x) {\n    case 1:\n        System.out.println(\"One\");\n        break;\n    case 2:\n        System.out.println(\"Two\");\n        break;\n    default:\n        System.out.println(\"Other\");\n}",
            options: [
                "One",
                "Two",
                "Other",
                "Error",
            ],
            answer: "Two",
        },


        // Questions for Concept 2...
    ],
    operations: [
        {
            question: "What is the default value of a boolean in Java?",
            options: ["true", "false", "0", "null"],
            answer: "false",
        },
        {
            question: "Which of the following is a correct syntax for an if statement in Java?",
            options: [
                "if (condition) { // code }",
                "if condition { // code }",
                "if condition: { // code }",
                "if: condition { // code }",
            ],
            answer: "if (condition) { // code }",
        },
        {
            question: "What is the purpose of the else clause in an if statement?",
            options: [
                "To specify a block of code to be executed if the condition is false",
                "To specify a block of code to be executed if the condition is true",
                "To specify a block of code to be executed regardless of the condition",
                "To specify a block of code to be executed before the if statement",
            ],
            answer: "To specify a block of code to be executed if the condition is false",
        },
        {
            question: "What is the output of the following Java code?\nint x = 10;\nif (x > 5) {\n    System.out.println(\"Hello\");\n} else {\n    System.out.println(\"World\");\n}",
            options: [
                "Hello",
                "World",
                "HelloWorld",
                "Error",
            ],
            answer: "Hello",
        },
        {
            question: "What is a switch statement in Java?",
            options: [
                "A multi-way branch statement that provides an easy way to dispatch execution to different parts of code based on the value of an expression",
                "A statement that is used to declare variables",
                "A statement that is used to define a method",
                "A statement that is used to perform actions based on a specific condition",
            ],
            answer: "A multi-way branch statement that provides an easy way to dispatch execution to different parts of code based on the value of an expression",
        },
        {
            question: "What is the output of the following Java code?\nint x = 2;\nswitch (x) {\n    case 1:\n        System.out.println(\"One\");\n        break;\n    case 2:\n        System.out.println(\"Two\");\n        break;\n    default:\n        System.out.println(\"Other\");\n}",
            options: [
                "One",
                "Two",
                "Other",
                "Error",
            ],
            answer: "Two",
        },
    ],
    loops: [
        {
            question: "What is a loop in programming?",
            options: [
                "A sequence of instructions that is continually repeated until a certain condition is reached",
                "A storage location paired with an associated symbolic name",
                "An attribute of data which tells the compiler or interpreter how the programmer intends to use the data",
                "A function",
            ],
            answer: "A sequence of instructions that is continually repeated until a certain condition is reached",
        },
        {
            question: "Which of the following is a type of loop in Java?",
            options: [
                "if",
                "switch",
                "for",
                "case",
            ],
            answer: "for",
        },
        {
            question: "What is the purpose of the break statement in a loop?",
            options: [
                "To skip the current iteration and move to the next one",
                "To exit the loop prematurely when a certain condition is met",
                "To repeat the loop a certain number of times",
                "To check if a certain condition is true",
            ],
            answer: "To exit the loop prematurely when a certain condition is met",
        },
        {
            question: "What is the output of the following Java code?\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}",
            options: [
                "0 1 2 3 4",
                "1 2 3 4 5",
                "0 1 2 3 4 5",
                "Error",
            ],
            answer: "0 1 2 3 4",
        },
        {
            question: "What is a while loop in Java?",
            options: [
                "A loop that executes a block of code as long as a certain condition is true",
                "A loop that executes a block of code a certain number of times",
                "A loop that executes a block of code once and then repeats the loop as long as a certain condition is true",
                "A loop that executes a block of code until a certain condition is met",
            ],
            answer: "A loop that executes a block of code as long as a certain condition is true",
        },
        {
            question: "What is the output of the following Java code?\nint i = 0;\nwhile (i < 5) {\n    System.out.println(i);\n    i++;\n}",
            options: [
                "0 1 2 3 4",
                "1 2 3 4 5",
                "0 1 2 3 4 5",
                "Error",
            ],
            answer: "0 1 2 3 4",
        },
    ],
    functions:[
        {
            question: "What is a function in programming?",
            options: [
                "A sequence of instructions that performs a specific task, packaged as a unit",
                "A storage location paired with an associated symbolic name",
                "An attribute of data which tells the compiler or interpreter how the programmer intends to use the data",
                "A loop",
            ],
            answer: "A sequence of instructions that performs a specific task, packaged as a unit",
        },
        {
            question: "Which of the following is a correct function declaration in Java?",
            options: [
                "function sum(int a, int b) { return a + b; }",
                "def sum(a, b): return a + b",
                "public int sum(int a, int b) { return a + b; }",
                "sum(a, b) => a + b",
            ],
            answer: "public int sum(int a, int b) { return a + b; }",
        },
        {
            question: "What is the purpose of the return statement in a function?",
            options: [
                "To specify the type of the function",
                "To exit the function and optionally return a value",
                "To call the function",
                "To declare a variable in the function",
            ],
            answer: "To exit the function and optionally return a value",
        },
        {
            question: "What is the output of the following Java code?\npublic static int sum(int a, int b) {\n    return a + b;\n}\nSystem.out.println(sum(5, 10));",
            options: [
                "5",
                "10",
                "15",
                "Error",
            ],
            answer: "15",
        },
        {
            question: "What is a parameter in a function?",
            options: [
                "A variable used to store the result of the function",
                "A variable used to pass information into the function",
                "A variable used to store the type of the function",
                "A variable used to call the function",
            ],
            answer: "A variable used to pass information into the function",
        },
        {
            question: "What is the output of the following Java code?\npublic static void printHello(String name) {\n    System.out.println(\"Hello, \" + name);\n}\nprintHello(\"World\");",
            options: [
                "Hello",
                "World",
                "Hello, World",
                "Error",
            ],
            answer: "Hello, World",
        },
    ],
    oop: [
        {
            question: "What is Object-Oriented Programming (OOP)?",
            options: [
                "A programming paradigm based on the concept of “objects”, which can contain data and code: data in the form of fields, and code, in the form of procedures",
                "A programming paradigm based on the concept of “loops”, which can repeat certain actions",
                "A programming paradigm based on the concept of “functions”, which can perform specific tasks",
                "A programming paradigm based on the concept of “variables”, which can store values",
            ],
            answer: "A programming paradigm based on the concept of “objects”, which can contain data and code: data in the form of fields, and code, in the form of procedures",
        },
        {
            question: "Which of the following is a fundamental concept in OOP?",
            options: [
                "Loop",
                "Function",
                "Inheritance",
                "Recursion",
            ],
            answer: "Inheritance",
        },
        {
            question: "What is a class in Java?",
            options: [
                "A blueprint from which individual objects are created",
                "A special function that is used to initialize the object",
                "A container that holds data and functions",
                "A data type that holds multiple values of different types",
            ],
            answer: "A blueprint from which individual objects are created",
        },
        {
            question: "What is the output of the following Java code?\nclass MyClass {\n    int x = 5;\n}\n\nMyClass myObj = new MyClass();\nSystem.out.println(myObj.x);",
            options: [
                "MyClass",
                "myObj",
                "5",
                "Error",
            ],
            answer: "5",
        },
        {
            question: "What is an instance variable in Java?",
            options: [
                "A variable that is defined inside a method and belongs only to the current instance of a class",
                "A variable that is defined inside a method and belongs to the class as a whole",
                "A variable that is defined outside a method and belongs only to the current instance of a class",
                "A variable that is defined outside a method and belongs to the class as a whole",
            ],
            answer: "A variable that is defined outside a method and belongs to the class as a whole",
        },
        {
            question: "What is the output of the following Java code?\nclass MyClass {\n    int x = 5;\n}\n\nMyClass myObj1 = new MyClass();\nMyClass myObj2 = new MyClass();\nmyObj2.x = 3;\nSystem.out.println(myObj1.x);\nSystem.out.println(myObj2.x);",
            options: [
                "5 5",
                "3 3",
                "5 3",
                "Error",
            ],
            answer: "5 3",
        },


],


    // Add more concepts...
};

export default quizData;
