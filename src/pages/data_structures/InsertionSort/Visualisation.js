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
  background-color: ${(props) => (props.swapping ? '#87CEEB' : props.compare ? 'red' : 'black')};
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
                setSwapping(true);
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

        for (let i = 1; i < sortedArray.length; i++) {
            let currentValue = sortedArray[i];
            let j;

            for (j = i - 1; j >= 0 && sortedArray[j] > currentValue; j--) {
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;

                setResultArray([...sortedArray]);
            }

            setResultArray([...sortedArray]);
        }

        return sortedArray;
    };

    const handleButtonClick = async () => {
        const sortedResult = await insertionSort(inputArray);
        setResultArray(sortedResult);
    };

    const handleRandomArray = async () => {
        const randomArr = [];

        for (let i = 0; i < 5; i++) {
            randomArr.push(Math.floor(Math.random() * 100) + 1);
        }

        const sortedResult = await insertionSort(randomArr);
        setResultArray(sortedResult);
    };

    const handleDirectButtonClick = async () => {
        const sortedResult = await insertionSortWithoutDelay(inputArray);
        setResultArray(sortedResult);
    };

    return (
        <div>
            <InputContainer>
                <InputField
                    placeholder="Enter array (comma-separated)"
                    onChange={(e) => setInputArray(e.target.value.split(","))}
                />
                <Button onClick={handleButtonClick}>Go</Button>
                <Button onClick={handleRandomArray}>Generate</Button>
                <Button onClick={handleDirectButtonClick}>Sort Directly</Button>
            </InputContainer>

            <SortingComponent>
                <div style={{ display: 'flex' }}>
                    {resultArray.map((num, index) => (
                        <Rectangle key={index} value={num} swapping={swapping && (index === j || index === j + 1)} >
                            {num}
                        </Rectangle>
                    ))}
                </div>
            </SortingComponent>
        </div>
    );
};

export default Visualisation;

