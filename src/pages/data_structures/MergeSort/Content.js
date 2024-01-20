import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const contentStyle = {
    backgroundColor: '#FFFFFF',
    height: '2600px',
    padding: '20px',
};

const codeBlockStyle = {
    borderRadius: '15px',
    overflowX: 'auto',
    backgroundColor: '#2d2d2d',
  };

const Content = () => {
    const codeSnippet = `public class MergeSort {

        // Merge two subarrays of arr[].
        // First subarray is arr[l..m]
        // Second subarray is arr[m+1..r]
        private void merge(int arr[], int l, int m, int r) {
            // Find sizes of two subarrays to be merged
            int n1 = m - l + 1;
            int n2 = r - m;
    
            // Create temporary arrays
            int L[] = new int[n1];
            int R[] = new int[n2];
    
            // Copy data to temporary arrays
            for (int i = 0; i < n1; ++i)
                L[i] = arr[l + i];
            for (int j = 0; j < n2; ++j)
                R[j] = arr[m + 1 + j];
    
            // Merge the temporary arrays
    
            // Initial indexes of first and second subarrays
            int i = 0, j = 0;
    
            // Initial index of merged subarray array
            int k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }
    
            // Copy remaining elements of L[] if any
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }
    
            // Copy remaining elements of R[] if any
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }
    
        // Main function that sorts arr[l..r] using merge()
        private void sort(int arr[], int l, int r) {
            if (l < r) {
                // Find the middle point
                int m = (l + r) / 2;
    
                // Sort first and second halves
                sort(arr, l, m);
                sort(arr, m + 1, r);
    
                // Merge the sorted halves
                merge(arr, l, m, r);
            }
        }
    
        // A utility function to print the array
        private static void printArray(int arr[]) {
            int n = arr.length;
            for (int i = 0; i < n; ++i)
                System.out.print(arr[i] + " ");
            System.out.println();
        }
    
        // Driver method to test above
        public static void main(String args[]) {
            int arr[] = { 12, 11, 13, 5, 6, 7 };
    
            System.out.println("Given Array");
            printArray(arr);
    
            MergeSort ob = new MergeSort();
            ob.sort(arr, 0, arr.length - 1);
    
            System.out.println("Sorted array:");
            printArray(arr);
        }
    }`;

    return (
        <div style={contentStyle}>
            <p>Merge Sort is a popular sorting algorithm that follows the divide-and-conquer approach. It divides the unsorted array into two halves, recursively sorts the halves, and then merges them to produce a sorted array. Here's an explanation of how Merge Sort works and how to implement it in Java:</p>

            <h2>Merge Sort Algorithm:</h2>
            <ul>
                <li><b>Divide:</b> The unsorted array is divided into two equal halves (or nearly equal if the number of elements is odd).</li>
                <li><b>Conquer:</b> Each half is recursively sorted using the merge sort algorithm.</li>
                <li><b>Merge:</b> The two sorted halves are combined by merging them back into a single sorted array. This is done by comparing elements from both halves and selecting the smaller element to add to the sorted array.</li>
                <li>Repeat the process recursively until the entire array is sorted.</li>
            </ul>
            
            <h2>Java Implementation of Merge Sort:</h2>
            <div style={{ ...codeBlockStyle, maxWidth: '700px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet}
            </SyntaxHighlighter>
            </div>
            <p>In this Java implementation, the mergeSort function recursively splits the array into halves, sorts them, and then merges them. The merge function is responsible for merging two sorted arrays. The example shows how to use the mergeSort function to sort an array of integers.</p>

        </div>
    );
}

export default Content;