import React, { useEffect, useState } from "react";
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
          props.swapping ? '#87CEEB' : props.compare ? 'red' : 'black'};
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

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Visualisation = () => {
    const [inputArray, setInputArray] = useState([]);
    const [displayArray, setDisplayArray] = useState([]);
    const [swapping, setSwapping] = useState(false);

    const mergeSort = async (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        const sortedLeft = await mergeSort(left);
        const sortedRight = await mergeSort(right);

        return merge(sortedLeft, sortedRight, arr);
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
        await delay(1000);

        // Return the fully sorted array
        return remaining;
    };

    const handleButtonClick = async () => {
        const sortedResult = await mergeSort(inputArray);
        setDisplayArray(sortedResult);
    };

    useEffect(() => {
        // Do nothing on initial render
    }, []);

    return (
        <div>
            <InputContainer>
                <InputField
                    placeholder="Enter array (comma-separated)"
                    onChange={(e) => setInputArray(e.target.value.split(","))}
                />
                <Button onClick={handleButtonClick}>Go</Button>
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

