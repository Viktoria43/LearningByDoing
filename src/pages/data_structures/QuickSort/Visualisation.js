import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const InputField = styled.input`
  width: 300px;
  padding: 8px;
  margin-top: 5px;
  border-radius: 7px;
`;

const Button = styled.button`
  text-decoration: none;
  background-color: black;
  width: auto;
  padding: 5px;
  color: white;
  font-size: 0.9em;
  font-family: 'Futura', 'Trebuchet MS', sans-serif;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #559;
  }
`;

const Rectangle = styled.div`
  display: inline-block;
  width: 30px;
  height: ${(props) => (props.value >= 0 ? props.value * 2.5 : 0)}px;
  max-height: 400px;

  background-color: ${(props) =>
          props.pivot
                  ? 'red'
                  : props.swapping
                          ? 'blue'
                          : props.compare
                                  ? '#87CEEB'
                                  : 'black'};

  margin: 5px;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 5px;
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
    const [currentStep, setCurrentStep] = useState(0);

    const [j, setJ] = useState(0);
    const [i, setI] = useState(0);
    const [pivot, setPivot] = useState(0);
    const animationSteps = [];

    const QuickSort = async (arr) => {
        const sortedArray = [...arr.map(Number)];
        if (sortedArray.length <= 1) {
            return arr;
        }

        const animationDelay = 1200;
        const animationSteps = [];

        const performSort = async (arr, start, end) => {
            if (start >= end) return;

            const pivot = arr[start];
            let left = start + 1;
            let right = end;

            while (left <= right) {
                while (left <= end && arr[left] <= pivot) {
                    left++;
                    setJ(arr[left]);
                    setI(arr[right]);
                    setSwapping(true);
                }

                while (right > start && arr[right] >= pivot) {
                    right--;
                    setJ(arr[left]);
                    setI(arr[right]);
                    setSwapping(true);
                }

                if (left < right) {
                    [arr[left], arr[right]] = [arr[right], arr[left]];
                    setJ(arr[left]);
                    setI(arr[right]);
                    setPivot(start);

                    const stepArray = [...arr];
                    animationSteps.push(stepArray);
                }
            }

            [arr[start], arr[right]] = [arr[right], arr[start]];

            const stepArray = [...arr];
            animationSteps.push(stepArray);

            await Promise.all([
                performSort(arr, start, right - 1),
                performSort(arr, right + 1, end),
            ]);
        };

        await performSort(sortedArray, 0, sortedArray.length - 1);

        for (const step of animationSteps) {
            setResultArray(step);
            await new Promise((resolve) => setTimeout(resolve, animationDelay));
        }

        return sortedArray;
    };

    const handleStepForward = async () => {
        const sortedArray = [...inputArray.map(Number)];
        setCurrentStep(currentStep + 1);
        if (currentStep < sortedArray.length - 1) {

            setResultArray(animationSteps[currentStep + 1]);
        }
    };

    const handleReset = () => {
        setInputArray([]);
        setResultArray([]);
        setJ(0);
        setSwapping(false);
        setCurrentStep(0);
        document.getElementById("input-field").value = "";
    };

    const QuickSortWithoutDelay = (arr) => {
        const sortedArray = [...arr.map(Number)];
        sortedArray.sort();
        return sortedArray;
    };

    const handleButtonClick = async () => {
        const sortedResult = await QuickSort(inputArray);
        setResultArray(sortedResult);
    };

    const handleRandomArray = async () => {
        const randomArr = [];

        for (let i = 0; i < 5; i++) {
            randomArr.push(Math.floor(Math.random() * 100) + 1);
        }

        const sortedResult = await QuickSort(randomArr);
        setResultArray(sortedResult);
    };

    const handleDirectButtonClick = async () => {
        const sortedResult = QuickSortWithoutDelay(inputArray);
        setResultArray(sortedResult);
    }

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
                <Button onClick={handleReset}>Reset Input</Button>
                <Button onClick={handleStepForward}>Step Forward</Button>
            </InputContainer>

            <SortingComponent>
                <div style={{ display: "flex" }}>
                    {resultArray.map((num, index) => (
                        <Rectangle key={index} value={num} swapping={index === j || index === i}>
                            {num}
                        </Rectangle>
                    ))}
                </div>
            </SortingComponent>
        </div>
    );
};

export default Visualisation;


