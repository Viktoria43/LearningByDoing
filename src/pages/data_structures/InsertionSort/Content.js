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
    `   public class InsertionSort {
        public static void insertionSort(int[] array) {
            int n = array.length;
            for (int i = 1; i < n; ++i) {
                int key = array[i];
                int j = i - 1;
    
                // Move elements of array[0..i-1] that are greater than key
                // to one position ahead of their current position
                while (j >= 0 && array[j] > key) {
                    array[j + 1] = array[j];
                    j = j - 1;
                }
                array[j + 1] = key;
            }
        }
    
        public static void printArray(int[] array) {
            int n = array.length;
            for (int i = 0; i < n; ++i) {
                System.out.print(array[i] + " ");
            }
            System.out.println();
        }
    
        public static void main(String[] args) {
            int[] arr = { 12, 11, 13, 5, 6 };
            System.out.println("Original array:");
            printArray(arr);
    
            insertionSort(arr);
            
            System.out.println("Sorted array:");
            printArray(arr);
        }
    }`;

    return (
        <div style={contentStyle}>
            <p style={baseTextStyle}>Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as Merge Sort or Quick Sort, but it works well for small lists or lists that are mostly sorted. Here's an explanation of how Insertion Sort works in Java</p>
            <h2 style={headingStyle}>Insertion Sort Algorithm:</h2>
            <ul style={{ ...baseTextStyle, listStylePosition: 'inside', padding: 0 }}>
            <li>Start with the first element (assumed to be sorted).</li>
            <li>For each subsequent element, compare it to the elements before it and insert it into its correct position in the sorted portion of the array.</li>  
            <li>Repeat this process until the entire array is sorted.</li>    
            </ul>

            <h2 style={headingStyle}>Java Implementation of Insertion Sort:</h2>
            <div style={codeBlockStyle}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet}
            </SyntaxHighlighter>
            </div>
        </div>
    );
}

export default Content;