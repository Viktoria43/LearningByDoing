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
    `class Student {
        // Define attributes (properties)
        String name;
        int age;
    
        // Define methods (behaviors)
        void study() {
            System.out.println(name + " is studying.");
        }
    }`;

    const codeSnippet2 = 
    `public class Main {
        public static void main(String[] args) {
            // Create an object of the Student class
            Student student1 = new Student();
    
            // Set attributes for the object
            student1.name = "Alice";
            student1.age = 20;
    
            // Call a method on the object
            student1.study();
    
            // Create another object of the Student class
            Student student2 = new Student();
    
            // Set attributes for the second object
            student2.name = "Bob";
            student2.age = 22;
    
            // Call a method on the second object
            student2.study();
        }
    }`;

    const codeSnippet3 = 
    `// Define a class
    class Student {
        // Define attributes (properties)
        String name;
        int age;
    
        // Define methods (behaviors)
        void study() {
            System.out.println(name + " is studying.");
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            // Create an object of the Student class
            Student student1 = new Student();
    
            // Set attributes for the object
            student1.name = "Alice";
            student1.age = 20;
    
            // Call a method on the object
            student1.study();
    
            // Create another object of the Student class
            Student student2 = new Student();
    
            // Set attributes for the second object
            student2.name = "Bob";
            student2.age = 22;
    
            // Call a method on the second object
            student2.study();
        }
    }`;

    const codeSnippet4 = 
    `class Dog {
        // Define attributes (properties)
        String name;
      String size;
        int age;
    
      
        void bark {
            System.out.println(name + " is barking.");
        }
    }`;

    const codeSnippet5 = 
    `public class Main {
        public static void main(String[] args) {
            // Create an object of the Student class
            Dog dog1 = new Dog();
    
            // Set attributes for the object
           dog1.name = "Ricky";
            dog1.age = 7;
    dog1.size = “small”
    
            // Call a method on the object
            dog1.bark();
    }`;

    const codeSnippet6 = 
    `// Base class (superclass)
    class Animal {
        String name;
    
        Animal(String name) {
            this.name = name;
        }
    
        void eat() {
            System.out.println(name + " is eating.");
        }
    }
    
// Derived class (subclass)
    class Dog extends Animal {
        Dog(String name) {
            super(name);
        }
    
        void bark() {
            System.out.println(name + " is barking.");
        }
    }`;

    const codeSnippet7 = 
    `int add(int a, int b, int c) {
        return a + b + c;
    }


    double add(double a, double b) {
        return a + b;
    }
}

public class MethodOverloadingExample {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println("Sum of two integers: " + calc.add(5, 7));
        System.out.println("Sum of three integers: " + calc.add(5, 7, 3));

    }
}`;     

    const codeSnippet8 = 
    `class Animal {
        void makeSound() {
            System.out.println("Animal makes a generic sound");
        }
    }
    
    class Dog extends Animal {
        @Override
        void makeSound() {
            System.out.println("Dog barks");
        }
    }
    
    class Cat extends Animal {
        @Override
        void makeSound() {
            System.out.println("Cat meows");
        }
    }
    
    public class MethodOverridingExample {
        public static void main(String[] args) {
            Animal myAnimal = new Animal();
            Animal myDog = new Dog();
            Animal myCat = new Cat();
    
            myAnimal.makeSound(); // Calls the Animal class's method
            myDog.makeSound();    // Calls the overridden method in Dog
            myCat.makeSound();    // Calls the overridden method in Cat
        }
    }`;

    const codeSnippet9 = 
    `public class MyClass {
        private int privateField;
        public int publicField;
        protected int protectedField;
    }`;

    const codeSnippet10 = 
    `package com.example.myproject;`;

    const codeSnippet11 = 
    `interface Drawable {
        void draw();
}`;
    



    return (
        <div style={contentStyle}>
            <p style={baseTextStyle}>Object-Oriented Programming (OOP) is a fundamental concept in Java. Here are the key fundamentals of OOP in Java:</p>
            
            <h1 style={headingStyle}>Classes and Objects:</h1>
            <p style={baseTextStyle}><b>Class:</b>In Java, a class is a blueprint or a template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects created from the class will have.</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet}
            </SyntaxHighlighter>
            </div>
            <p style={baseTextStyle}><b>Object:</b>An object is an instance of a class. It represents a real-world entity and encapsulates data (attributes) and behavior (methods). Objects are created from classes using the new keyword.</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet2}
            </SyntaxHighlighter>
            </div>
            <p style={baseTextStyle}>Here is the whole example: </p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet3}
            </SyntaxHighlighter>
            </div>
            <p style={baseTextStyle}>In this example:</p>
            <ul style={{ ...baseTextStyle, listStylePosition: 'inside', padding: 0 }}>
            <li>We define a class named Student that has attributes name and age, and a method study that prints a message about the student studying.</li>
            <li>In the main method, we create two objects, student1 and student2, from the Student class using the new keyword</li>
            <li>We set the attributes for each object, and then call the study method on each object.</li>
            </ul>
            <p style={baseTextStyle}>Now let’s practice! Lets create a class, called Dog with the attributes: name, size, age and the ability (method) to bark:</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet4}
            </SyntaxHighlighter>
            </div>
            <p style={baseTextStyle}>Great! Now we can define an object called dog1 of the Dog class with these properties and methods. You have a dog that barks a lot, and you want to output that. Your dog’s name is Ricky, age: 7, and he is small.</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet5}
            </SyntaxHighlighter>
            </div>

            <h2 style={headingStyle}>Encapsulation:</h2>
            <p style={baseTextStyle}>Encapsulation is the concept of bundling data (attributes) and the methods (functions) that operate on that data into a single unit called a class. It helps in hiding the internal details of how a class works and provides a public interface for interaction with the class. Summary: Another object can’t access the attributes and methods of another’s object.</p>

            <h2 style={headingStyle}>Inheritance:</h2>
            <p style={baseTextStyle}>Inheritance allows a new class (the subclass or derived class) to inherit the properties and behaviors of an existing class (the super class or base class). It promotes code reusability and hierarchy in class relationships.</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet6}
            </SyntaxHighlighter>
            </div>

            <h2 style={headingStyle}>Polymorphism:</h2>
            <p style={baseTextStyle}>Polymorphism means that objects of different classes can be treated as objects of a common super class. It allows a single interface (method or function) to represent different behaviors based on the actual object type. In Java, this is achieved through method overriding and interfaces.</p>

            <h2 style={headingStyle}>Abstraction:</h2>
            <p style={baseTextStyle}>Abstraction is the process of simplifying complex reality by modeling classes based on the essential properties and behaviors, while hiding the irrelevant details. Abstract classes and interfaces are used to create abstract data types.</p>

            <h2 style={headingStyle}>Method Overloading:</h2>
            <p style={baseTextStyle}>Method overloading is the ability to define multiple methods in a class with the same name but different parameters. The correct method to call is determined based on the number and types of arguments passed.</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet7}
            </SyntaxHighlighter>
            </div>

            <h2 style={headingStyle}>Method Overriding: </h2>
            <p style={baseTextStyle}>Method overriding is the ability to provide a specific implementation of a method in a subclass that is already defined in its superclass. This allows customization of behavior in the subclass.</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet8}
            </SyntaxHighlighter>
            </div>

            <h2 style={headingStyle}>Access Modifiers:</h2>
            <p style={baseTextStyle}>Java provides access modifiers such as public, private, protected, and package-private (default) to control the visibility and accessibility of classes, fields, and methods.</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet9}
            </SyntaxHighlighter>
            </div>

            <h2 style={headingStyle}>Packages:</h2>
            <p style={baseTextStyle}>Java uses packages to organize classes and interfaces into namespaces. Packages help manage large codebases and avoid naming conflicts.</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet10}
            </SyntaxHighlighter>
            </div>

            <h2 style={headingStyle}>Interfaces:</h2>
            <p style={baseTextStyle}>Interfaces define a contract for classes to implement. They contain abstract method declarations that must be defined in any class that implements the interface. Multiple inheritance is achieved through interfaces in Java.</p>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet11}
            </SyntaxHighlighter>
            </div>
            <p style={baseTextStyle}>These are the fundamental concepts of Object-Oriented Programming in Java. By understanding and using these principles, you can create well-structured and maintainable Java applications. OOP promotes code reusability, modularity, and a clear organization of code.</p>
        </div>
    );
}

export default Content;