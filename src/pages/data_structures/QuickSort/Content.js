import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const contentStyle = {
    backgroundColor: '#FFFFFF',
    height: '2500px',
    padding: '20px',
};

const codeBlockStyle = {
    borderRadius: '15px',
    overflowX: 'auto',
    backgroundColor: '#2d2d2d',
  };

const Content = () => {
    
    const codeSnippet = 
    `public class QuickSort {

        // Utility function to swap elements at two indices in an array
        private void swap(int[] arr, int i, int j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    
        // Partition function that takes the last element as pivot, places
        // the pivot element at its correct position in the sorted array,
        // and places all smaller elements (smaller than pivot) to the left
        // of the pivot and all greater elements to the right of the pivot.
        private int partition(int[] arr, int low, int high) {
            int pivot = arr[high]; // pivot
            int i = (low - 1); // Index of smaller element
            for (int j = low; j < high; j++) {
                // If the current element is smaller than or equal to the pivot
                if (arr[j] <= pivot) {
                    i++;
    
                    // Swap arr[i] and arr[j]
                    swap(arr, i, j);
                }
            }
    
            // Swap arr[i+1] and arr[high] (or pivot)
            swap(arr, i + 1, high);
    
            return i + 1;
        }
    
        // Main function that implements QuickSort
        private void sort(int[] arr, int low, int high) {
            if (low < high) {
                // pi is partitioning index, arr[pi] is now at right place
                int pi = partition(arr, low, high);
    
                // Recursively sort elements before partition and after partition
                sort(arr, low, pi - 1);
                sort(arr, pi + 1, high);
            }
        }
    
        // Utility function to print an array
        private static void printArray(int[] arr) {
            for (int value : arr) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
    
        // Test the QuickSort algorithm with an example array
        public static void main(String[] args) {
            int[] arr = {10, 7, 8, 9, 1, 5};
    
            System.out.println("Given Array");
            printArray(arr);
    
            QuickSort ob = new QuickSort();
            ob.sort(arr, 0, arr.length - 1);
    
            System.out.println("\nSorted array");
            printArray(arr);
        }
    }`;
    return (
        <div style={contentStyle}>
            <p>Quick Sort is a popular and efficient sorting algorithm that uses a divide-and-conquer strategy. It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. These sub-arrays are then sorted recursively. Here's an explanation of how Quick Sort works in Java:</p>

            <h2>Quick Sort Algorithm:</h2>
            <p> Quick Sort is implemented using a similar algorithm that divides the array into smaller sub-arrays and sorts them recursively. The pivot element is used to partition the array. The process continues until the entire array is sorted.</p>
            <ul>
                <li>Choose a pivot element from the array.</li>
                <li>Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.</li>
                <li>Recursively apply the Quick Sort algorithm to the two sub-arrays.</li>
                <li>Combine the sorted sub-arrays and the pivot element to produce the final sorted array.</li>
            </ul>


            <h2>Java Implementation of Quick Sort: </h2>
            <div style={{ ...codeBlockStyle, maxWidth: '800px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet}
            </SyntaxHighlighter>
            </div>

        </div>
    );
}

export default Content;