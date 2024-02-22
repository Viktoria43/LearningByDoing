// quizData.js

const quizData = {
    Variables: [
        {
            question: "What is a variable in programming?",
            options: [
                "A data type",
                "A storage location paired with an associated symbolic name",
                "An operator",
                "A function"
            ],
            answer: "A storage location paired with an associated symbolic name",
            prompt: "Variable is a container for storing data.",
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
            prompt: "Variable declaration in java is hard coded.",
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
            prompt: "It is the last value of this variable.",

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
            prompt: "What happens to x?",
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
            prompt: "Keyword is global.",
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
            prompt: "It is not global."
        },
        // Add more questions...
    ],
    Datatypes: [
        {
            question: "What is a data type in programming?",
            options: [
                "A storage location paired with an associated symbolic name",
                "An attribute of data which tells the compiler or interpreter how the programmer intends to use the data",
                "An operator",
                "A function"
            ],
            answer: "A storage location paired with an associated symbolic name",
            prompt: "Data types need to be allocated differently!"
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
            prompt: "Primitive, depending on the data type."
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
            prompt: "How many values exist?"
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
            prompt: "Type cast to make it integer, not rounding it off."
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
            prompt: "It is a power of 2."
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
            prompt: "It has to do with storage."
        },
        // Questions for Concept 2...
    ],
    Conditionals: [
        {
            question: "What is a conditional statement in programming?",
            options: [
                "A statement that performs different computations or actions depending on whether a programmer-specified boolean condition evaluates to true or false",
                "A statement that is used to perform actions based on a specific condition",
                "A statement that is used to declare variable",
                "A statement that is used to define a method"
            ],
            answer: "A statement that performs different computations or actions depending on whether a programmer-specified boolean condition evaluates to true or false",
            prompt: "The name 'conditional' is key."
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
            prompt: "Brackets are necessary."
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
            prompt:"Why else would it be used?"
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
            prompt: "Does it fufill the condiitons?"
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
            prompt: "'Switches' between different paths."
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
            prompt: "Which case is chosen here?"
        },


        // Questions for Concept 2...
    ],
    Operations: [
        {
            question: "What is the default value of a boolean in Java?",
            options: ["true", "false", "0", "null"],
            answer: "false",
            prompt:" "
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
    Loops: [
        {
            question: "What is a loop in programming?",
            options: [
                "A sequence of instructions that is continually repeated until a certain condition is reached",
                "A storage location paired with an associated symbolic name",
                "An attribute of data which tells the compiler or interpreter how the programmer intends to use the data",
                "A function",
            ],
            answer: "A sequence of instructions that is continually repeated until a certain condition is reached",
            prompt: "Definition of loop."
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
            prompt: "Conditional repetition."
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
            prompt: "Break the loop."
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
            prompt: "When does the loop stop fulfilling the condition?"
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
            prompt: "It runs 'while' it fulfills the condition."
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
            prompt: "Keep a close eye on the values."
        },
    ],
    Functions:[
        {
            question: "What is a function in programming?",
            options: [
                "A sequence of instructions that performs a specific task, packaged as a unit",
                "A storage location paired with an associated symbolic name",
                "An attribute of data which tells the compiler or interpreter how the programmer intends to use the data",
                "A loop",
            ],
            answer: "A sequence of instructions that performs a specific task, packaged as a unit",
            prompt: "How does it function?"
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
            prompt: "Remember to specify upfront which code can access it."
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
            prompt: "Return to state, before using the function."
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
            prompt: "What is the final return value?"
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
            prompt: "How is it used in the function?"
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
            prompt: "Which function is called?"
        },
    ],
    OOP: [
        {
            question: "What is Object-Oriented Programming (OOP)?",
            options: [
                "A programming paradigm based on the concept of “objects”, which can contain data and code: data in the form of fields, and code, in the form of procedures",
                "A programming paradigm based on the concept of “loops”, which can repeat certain actions",
                "A programming paradigm based on the concept of “functions”, which can perform specific tasks",
                "A programming paradigm based on the concept of “variables”, which can store values",
            ],
            answer: "A programming paradigm based on the concept of “objects”, which can contain data and code: data in the form of fields, and code, in the form of procedures",
            prompt: "What is it oriented to?"
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
            prompt: "What is important in a family of objects?"
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
            prompt: "A type of plan."
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
            prompt: "Integer value."
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
            prompt: "What is the scope of this instance?"
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
            prompt: "What are the respective scopes of the variables?"
        },


    ],
    MergeSort: [
                {
            question: "Merge Sort is an example of which type of algorithmic paradigm?",
            options: ["Divide and Conquer", "Dynamic Programming", "Greedy Algorithms", "Backtracking"],
            answer: "Divide and Conquer",
            prompt: "What does it merge?"
        },
        {
            question: "True or False: Merge Sort is not an in-place sorting algorithm.",
            options: ["True", "False"],
            answer: "True",
            prompt: "Remember the working."
        },
        {
            question: "If we order the following sorting algorithms based on their average-case time complexity, from most efficient to least efficient, which is first?:",
            options: ["A) Quick Sort", "B) Merge Sort", "C) Insertion Sort", "D) Bubble Sort", "E) Selection Sort"],
            answer: "B) Merge Sort",
            prompt: "How effective is Merge Sort?"
        },
        {
            question: "You have a large dataset that is nearly sorted, with only a few elements out of place. Which sorting algorithm would you choose for this task? Options are given above.",
            options: ["I) A and C", "II) B and D", "III) C and D", "IV) A and B"],
            answer: "I) A and C",
            prompt: "Choose the quickest option."
        },
        {
            question: "You need to sort a small array of integers as quickly as possible. Which sorting algorithm would you choose for this task?",
            options: ["I) A and C", "II) B and D", "III) D and A", "IV) B and C"],
            answer: "II) B and D",
            prompt: "Efficiency is required here."
        },
    ],
    InsertionSort : [
                {
            question: "In which case does Insertion Sort perform exceptionally well?",
            options: ["When the input list is already sorted", "When the input list is in reverse order", "When the input list is random", "None of the above"],
            answer: "When the input list is already sorted",
            prompt: "When is displacing the elements the easiest and quickest?"
        },
        {
            question: "True or False: Insertion Sort is a stable sorting algorithm.",
            options: ["True", "False"],
            answer: "True",
            prompt: "Remember what stability is."
        },
        {
            question: "Order the following sorting algorithms based on their average-case time complexity, from most efficient to least efficient:",
            options: ["A) Quick Sort", "B) Merge Sort", "C) Insertion Sort", "D) Bubble Sort", "E) Selection Sort"],
            answer: "III) B, A, C, D, E",
            prompt: ""
        },
        {
            question: "You have a large dataset that is nearly sorted, with only a few elements out of place. Which sorting algorithm would you choose for this task?",
            options: ["I) A and C", "II) B and D", "III) C and D", "IV) A and B"],
            answer: "I) A and C",
        },
        {
            question: "You need to sort a small array of integers as quickly as possible. Which sorting algorithm would you choose for this task?",
            options: ["I) A and C", "II) B and D", "III) D and A", "IV) B and C"],
            answer: "II) B and D",
        },
    ],
    QuickSort: [
        {
            question: "What is the worst-case time complexity of Quick Sort?",
            options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
            answer: "O(n^2)",
            prompt: "This depends on all the steps."
        },
        {
            question: "True or False: Quick Sort is an unstable sorting algorithm.",
            options: ["True", "False"],
            answer: "False",
            prompt: "What is (in)stability?"
        },
        {
            question: "Order the following sorting algorithms based on their average-case time complexity, from most efficient to least efficient:",
            options: ["A) Quick Sort", "B) Merge Sort", "C) Insertion Sort", "D) Bubble Sort", "E) Selection Sort"],
            answer: "III) B, A, C, D, E",
        },
        {
            question: "You have a large dataset that is nearly sorted, with only a few elements out of place. Which sorting algorithm would you choose for this task?",
            options: ["I) A and C", "II) B and D", "III) C and D", "IV) A and B"],
            answer: "I) A and C",
        },
        {
            question: "You need to sort a small array of integers as quickly as possible. Which sorting algorithm would you choose for this task?",
            options: ["I) A and C", "II) B and D", "III) D and A", "IV) B and C"],
            answer: "II) B and D",
        },
    ],
    Lists: [
        {
            question: "What is the time complexity of get() operation in ArrayList?",
            options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
            answer: "O(1)",
            prompt: "It is a single step."
        },
        {
            question: "True or False: ArrayList allows duplicate elements.",
            options: ["True", "False"],
            answer: "True",
            prompt: "Does it check duplicity?"
        },
        {
            question: "What is the main difference between LinkedList and ArrayList in Java?",
            options: ["The way they store elements", "The number of elements they can store", "The type of elements they can store", "The way they access elements"],
            answer: "The way they store elements",
            prompt: "Storage type is necessary here."
        },
        {
            question: "True or False: LinkedList performs faster add() and remove() operations compared to ArrayList.",
            options: ["True", "False"],
            answer: "True",
            prompt: "Compare the time complexities."
        },
        {
            question: "Which of the following is not a way to iterate over a List in Java?",
            options: ["For-each loop", "Iterator", "While loop", "ListIterator"],
            answer: "While loop",
            prompt: "Refer to Conditionals."
        },
        {
            question: "True or False: ListIterator allows traversing the list in both directions.",
            options: ["True", "False"],
            answer: "True",
            prompt: "Read up on Iterators."
        },
        {
            question: "What does the list.toArray() method do in Java?",
            options: ["Converts the list to an array", "Checks if the list is an array", "Returns the size of the list", "Removes all elements from the list"],
            answer: "Converts the list to an array",
            prompt: "It's in the name."
        },
        {
            question: "True or False: The list.clear() method removes all elements from the list.",
            options: ["True", "False"],
            answer: "True",
            prompt: "'Clear' what?"
        },
        {
            question: "You need to frequently access elements in a large list. Which List implementation would you choose for this task?",
            options: ["ArrayList", "LinkedList", "Vector", "Stack"],
            answer: "ArrayList",
            prompt: "Think on the functions you need."
        },
        {
            question: "What is the main difference between a singly linked list and a doubly linked list?",
            options: ["The way they store elements", "The number of next pointers in each node", "The type of elements they can store", "The way they access elements"],
            answer: "The number of next pointers in each node",
            prompt: "Single and double what?"
        },
        {
            question: "True or False: In a doubly linked list, navigation is possible in both directions.",
            options: ["True", "False"],
            answer: "True",
            prompt: "Double Directions."
        },
        {
            question: "You need to implement a playlist where the user can skip to the next or previous song. Which type of linked list would you choose for this task?",
            options: ["Singly Linked List", "Doubly Linked List", "Either would work", "Neither would work"],
            answer: "Doubly Linked List",
            prompt: "Traverse both directions?"
        },
    ],
    BinaryTree: [
        {
            question: "What is the maximum number of nodes at level l in a binary tree?",
            options: ["l", "2^l", "2^(l-1)", "l^2"],
            answer: "2^l",
            prompt:"At root, 0, at level 1= 2...",
        },
        {
            question: "True or False: In a binary tree, the number of leaf nodes is always one more than nodes with two children.",
            options: ["True", "False"],
            answer: "True",
        },
        {
            question: "What is the property of a Binary Search Tree (BST)?",
            options: [
                "The left subtree of a node contains only nodes with keys less than the node’s key.",
                "The right subtree of a node contains only nodes with keys greater than the node’s key.",
                "Both A and B",
                "Neither A nor B",
            ],
            answer: "Both A and B",
        },
        {
            question: "True or False: In a BST, in-order traversal of nodes results in ascending order of their keys.",
            options: ["True", "False"],
            answer: "True",
        },
        {
            question: "Which of the following sequences can represent a Preorder traversal sequence of a binary tree? Considering the tree" +
                "to be ordered top to bottom and left to right alphabetically.",
            options: ["A, B, C, D, E", "E, D, C, B, A", "A, B, D, E, C", "C, B, A, D, E"],
            answer: "A, B, D, E, C",
            prompt:"Remember preorder: root, left, right."
        },
        {
            question: "True or False: Post-order traversal sequence of a binary tree can be uniquely reconstructed from its In-order and Pre-order traversal sequences.",
            options: ["True", "False"],
            answer: "True",
        },
        {
            question: "What is a balanced binary tree?",
            options: [
                "A binary tree where the difference of left and right subtree heights for every node is not more than 1.",
                "A binary tree where the difference of left and right subtree heights for every node is not more than 2.",
                "A binary tree where the difference of left and right subtree heights for every node is not more than 3.",
                "A binary tree where the difference of left and right subtree heights for every node is not more than 4.",
            ],
            answer: "A binary tree where the difference of left and right subtree heights for every node is not more than 1.",
            prompt: "What is binary about it?"
        },
        {
            question: "True or False: AVL tree is a type of balanced binary tree.",
            options: ["True", "False"],
            answer: "True",
        },
        {
            question: "You need to implement a dictionary that allows fast insertion, deletion, and search operations. Which type of tree would you choose for this task?",
            options: ["Binary Tree", "Binary Search Tree", "AVL Tree", "B Tree"],
            answer: "AVL Tree",
            prompt: "Consider the most balanced structure."
        },
    ],
    Arrays: [
        {
            question: "What is an array in Java?",
            options: [
                "A collection of variables of different data types",
                "A collection of variables with similar data types",
                "A method to store only numeric values",
                "A data structure for storing characters"
            ],
            answer: "A collection of variables with similar data types",
            prompt: "Arrays in Java allow you to store multiple values of the same type under a single variable name."
        },
        {
            question: "How do you declare an array in Java?",
            options: [
                "array x[];",
                "int x = new array[];",
                "int[] x = new int[];",
                "int array x[];"
            ],
            answer: "int[] x = new int[];",
            prompt: "To declare an array in Java, you specify the type of elements it will hold, followed by square brackets and the variable name. Use the 'new' keyword to allocate memory for the array."
        },
        {
            question: "What is the default index of the first element in an array?",
            options: [
                "1",
                "0",
                "-1",
                "The size of the array"
            ],
            answer: "0",
            prompt: "In Java, array indices start from 0. The first element is accessed using index 0."
        },
        {
            question: "How do you access the length of an array in Java?",
            options: [
                "array.size()",
                "array.length()",
                "array.size",
                "array.length"
            ],
            answer: "array.length",
            prompt: "To get the length of an array in Java, use the '.length' property. It returns the number of elements in the array."
        },
        {
            question: "What is the purpose of the 'java.util.Arrays' class?",
            options: [
                "To perform basic arithmetic operations on arrays",
                "To manipulate arrays, such as sorting and searching",
                "To create arrays dynamically",
                "To declare arrays with predefined values"
            ],
            answer: "To manipulate arrays, such as sorting and searching",
            prompt: "The 'java.util.Arrays' class provides various utility methods for working with arrays in Java, including sorting and searching."
        },
        {
            question: "How can you initialize an array with values in a single line in Java?",
            options: [
                "{1, 2, 3, 4}",
                "array(1, 2, 3, 4)",
                "[1, 2, 3, 4]",
                "(1, 2, 3, 4)"
            ],
            answer: "{1, 2, 3, 4}",
            prompt: "To initialize an array with values in a single line in Java, use curly braces {} and separate the values with commas."
        },
        // Add more questions...
    ],




    // Add more concepts...
};

export default quizData;
