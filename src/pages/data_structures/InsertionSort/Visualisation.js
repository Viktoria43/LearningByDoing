import React, { useState } from "react";
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

const Visualisation = () => {
    const [inputArray, setInputArray] = useState([]);
    const [resultArray, setResultArray] = useState([]);
    const [swapping, setSwapping] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const [j, setJ] = useState(0);

    const insertionSort = async (arr) => {
        const sortedArray = [...arr.map(Number)];

        for (let i = 1; i < sortedArray.length; i++) {
            let currentValue = sortedArray[i];
            let j;

            for (j = i - 1; j >= 0 && sortedArray[j] > currentValue; j--) {
                setSwapping(true);
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
                setResultArray([...sortedArray]);
                setJ(j);
                await new Promise((resolve) => setTimeout(resolve, 1200));
            }

            setSwapping(false);
            setResultArray([...sortedArray]);
        }
        setSwapping(false);
        return sortedArray;
    };

    const insertionSortWithoutDelay = async (arr) => {
        const sortedArray = [...arr.map(Number)];
        sortedArray.sort();
        return sortedArray;

    };

    const StepForward = async (arr) => {
        const sortedArray = [...arr.map(Number)];

        if (currentStep <= sortedArray.length - 1) {
            for (let i = 0; i <= currentStep; i++) {
                let currentValue = sortedArray[i];
                let j;

                for (j = i - 1; j >= 0 && sortedArray[j] > currentValue; j--) {
                    const temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = temp;
                    setSwapping(true);
                    setJ(j)
                    setResultArray([...sortedArray]);
                }
            }

            setCurrentStep(currentStep + 1);
        }

        return sortedArray;
    };
    const StepBack = async (arr) => {
        const sortedArray = [...arr.map(Number)];

        if (currentStep > 0) {
            for (let i = currentStep - 1; i >= 0; i--) {
                let currentValue = sortedArray[i];
                let j;

                for (j = i + 1; j < sortedArray.length && sortedArray[j] < currentValue; j++) {
                    const temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j - 1];
                    sortedArray[j - 1] = temp;
                    setSwapping(true);
                    setJ(j - 1);
                    setResultArray([...sortedArray]);
                }
            }

            setCurrentStep(currentStep - 1);
        } else {

            setResultArray([...arr]);
            setCurrentStep(-1);
        }

        return sortedArray;
    };
    const handleReset = () => {
        setInputArray([]);
        setResultArray([]);
        setCurrentStep(1);
        setJ(0);
        setSwapping(false);
        document.getElementById("input-field").value = "";
    };
    const handleResetArray = (arr) => {
        const sortedArray = [...inputArray.map(Number)];
        setInputArray([sortedArray]);
        setResultArray([sortedArray]);
        setCurrentStep(1);
        setJ(0);
        setSwapping(false);
    };

    const handleButtonClick = async () => {
        const sortedResult = await insertionSort(inputArray);
        setResultArray(sortedResult);
        setCurrentStep(0);

    };

    const handleRandomArray = async () => {
        const randomArr = [];

        for (let i = 0; i < 5; i++) {
            randomArr.push(Math.floor(Math.random() * 100) + 1);
        }

        const sortedResult = await insertionSort(randomArr);
        setResultArray(sortedResult);
        setCurrentStep(0);
    };

    const handleDirectButtonClick = async () => {
        const sortedResult = await insertionSortWithoutDelay(inputArray);
        setResultArray(sortedResult);
        setCurrentStep(0);
    };
    const handleStepForward = async () => {
        await StepForward(inputArray);
    };
    const handleStepBack = async () => {
        await StepBack(inputArray);
    };

    return (
        <div>
            <InputContainer>
                <InputField
                    id="input-field"
                    placeholder="Enter array (comma-separated)"
                    onChange={(e) => setInputArray(e.target.value.split(","))}
                />
                <Button onClick={handleButtonClick}>Go</Button>
                <Button onClick={handleRandomArray}>Generate</Button>
                <Button onClick={handleDirectButtonClick}>Sort Directly</Button>
                <Button onClick={handleStepForward}>Step Forward</Button>
                <Button onClick={handleStepBack}>Step Back</Button>
                <Button onClick={handleReset}>Reset Input</Button>
                <Button onClick={handleResetArray}>Reset Array</Button>
            </InputContainer>

            <SortingComponent>
                <div style={{ display: 'flex' }}>
                    {resultArray.map((num, index) => (
                        <Rectangle key={index} value={num} swapping={swapping && (index === j || index === j + 1)}  >
                            {num}
                        </Rectangle>
                    ))}
                </div>
            </SortingComponent>
        </div>
    );
};

export default Visualisation;