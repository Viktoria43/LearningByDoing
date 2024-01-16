import React, { useEffect, useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 300px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 7px;
  outline: none;

  &:focus {
    border-color: #559;
  }
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Rectangle = styled.div`
display: inline-block;
width: 40px;  
height: ${(props) => (props.value >= 0 ? props.value * 4 : 0)}px;  
max-height: 400px;
background-color: ${(props) => (props.swapping ? '#87CEEB' : props.compare ? 'red' : '#333')};
margin: 5px;
text-align: center;
line-height: 30px;  
color: white;
border-radius: 5px;
transition: background-color 0.3s;
`;

const SortingComponent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 15px;
margin-top: 150px;
`;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Visualisation = () => {
    const [inputArray, setInputArray] = useState([]);
    const [displayArray, setDisplayArray] = useState([]);
    const [swapping, setSwapping] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [inputArrlength, setInputArrlength] = useState(0);
    const [count, setCount] = useState(0);

    const mergeSort = async (arr) => {
        const sortedArray = [...arr.map(Number)];
        if (sortedArray.length <= 1) {
            return sortedArray;
        }

        const middle = Math.floor(sortedArray.length / 2);
        const left = sortedArray.slice(0, middle);
        const right = sortedArray.slice(middle);

        const sortedLeft = await mergeSort(left);
        const sortedRight = await mergeSort(right);

        return merge(sortedLeft, sortedRight, sortedArray);
    };

    const merge = async (left, right, originalArray) => {
        let leftIndex = 0;
        let rightIndex = 0;
        const sortedArray = [];


        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                sortedArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                sortedArray.push(right[rightIndex]);
                rightIndex++;
            }

            setDisplayArray([...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)]);
            setSwapping(true);
            await delay(1000);
        }

        const remaining = [...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];

        setDisplayArray([...remaining]);
        setSwapping(false);


        return remaining;
    };

    const mergeSortWithoutDelay = async (arr) => {
        const sortedArray = [...arr.map(Number)];

        sortedArray.sort();
        return sortedArray;




    };


    // const mergeSortStepForward = async (arr) => {
    //
    //     const sortedArray = [...arr.map(Number)];
    //     if (sortedArray.length <= 1) {
    //         return sortedArray;
    //     }
    //
    //     const middle = Math.floor(sortedArray.length / 2);
    //     const left = sortedArray.slice(0, middle);
    //     const right = sortedArray.slice(middle);
    //
    //     const sortedLeft = await mergeSort(left);
    //     const sortedRight = await mergeSort(right);
    //
    //     return mergeSortStepForwardr(sortedLeft, sortedRight, sortedArray);
    // };
    //
    // const mergeSortStepForwardr = async (left, right, originalArray) => {
    //     let leftIndex = 0;
    //     let rightIndex = 0;
    //     const sortedArray = [];
    //
    //     for (let i = 0; i < currentStep; i++) {
    //         if (leftIndex < left.length && (rightIndex >= right.length || left[leftIndex] < right[rightIndex])) {
    //             sortedArray.push(left[leftIndex]);
    //             leftIndex++;
    //         } else {
    //             sortedArray.push(right[rightIndex]);
    //             rightIndex++;
    //         }
    //     }
    //
    //     // Update the display and state
    //     setDisplayArray([...sortedArray]);
    //     setSwapping(true);
    //
    //     return sortedArray;
    // };


            // while (leftIndex < left.length && rightIndex < right.length && currentStep===count) {
            //     if (left[leftIndex] < right[rightIndex]) {
            //
            //         sortedArray.push(left[leftIndex]);
            //         leftIndex++;
            //     //   setCurrentStep(currentStep+1)
            //     //    setCount(count+1)
            //         console.log(count);
            //     } else {
            //         sortedArray.push(right[rightIndex]);
            //         rightIndex++;
            //      //   setCurrentStep(currentStep+1)
            //     }

                // setDisplayArray([...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)]);
                // setSwapping(true);

    const handleReset = () => {
        setInputArray([]);
        setDisplayArray([]);
       // setCurrentStep(1);
      //   setJ(0);
        setSwapping(false);
        document.getElementById("input-field").value = "";
    };




    const handleRandomArray = async () => {
        const randomArr = [];

        for (let i = 0; i < 5; i++) {
            randomArr.push(Math.floor(Math.random() * 100) + 1);
        }

        const sortedResult = await mergeSort(randomArr);
        setDisplayArray(sortedResult);
    };
    const handleButtonClick = async () => {
        const sortedResult = await mergeSort(inputArray);
        setDisplayArray(sortedResult);
    };

    const handleDirectButtonClick = async () => {
        const sortedResult = await mergeSortWithoutDelay(inputArray);
        setDisplayArray(sortedResult);
      //  setCurrentStep(0);
    };

    useEffect(() => {

    }, []);

    // const handleStepForward = async () => {
    //     const updatedArray = await mergeSortStepForward(inputArray);
    //     setDisplayArray(updatedArray);
    //   //  setCurrentStep(currentStep + 1);
    // };

    return (
        <div>
            <InputContainer>
                <InputField id="input-field"
                    placeholder="Enter array (comma-separated)"
                    onChange={(e) => setInputArray(e.target.value.split(","))}
                />
                <Button onClick={handleButtonClick}>Go</Button>
                <Button onClick={handleRandomArray}>Generate</Button>
                <Button onClick={handleDirectButtonClick}>Sort Directly</Button>
                <Button onClick={handleReset}>Reset Input</Button>


            </InputContainer>

            <SortingComponent>
                <div style={{ display: 'flex' }}>
                    {displayArray.map((num, index) => (
                        <Rectangle
                            key={index}
                            value={num}
                            swapping={swapping && index >= displayArray.length - 2}
                        >
                            {num}
                        </Rectangle>
                    ))}
                </div>
            </SortingComponent>
        </div>
    );
};

export default Visualisation;

