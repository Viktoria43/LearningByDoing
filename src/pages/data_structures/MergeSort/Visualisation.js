import React, {useEffect, useState} from "react";
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
          props.swapping ? 'blue' : props.compare ? 'red' : 'black'};
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
    const [resultArray, setResultArray] = useState([]);
    const [swapping, setSwapping] = useState(false);
    const [j, setJ] = useState(0);

    const mergeSort = async (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);



        const sortedLeft = await mergeSort(left);
        const sortedRight = await mergeSort(right);

        return merge(sortedLeft, sortedRight);
    };

    const merge = async (left, right) => {
        let leftIndex = 0;
        let rightIndex = 0;
        const sortedArray = [];

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                sortedArray.push(left[leftIndex]);
                leftIndex++;
                setResultArray([...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)]);

            } else {
                sortedArray.push(right[rightIndex]);
                rightIndex++;
                setResultArray([...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)]);
            }

           setResultArray([...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)]);
            setSwapping(true);


            await delay(1000);
        }


        const remaining = [...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
      //  setResultArray(remaining);
        setSwapping(false);

        await delay(1000);

        return remaining;
    };

    useEffect(() => {
        const mergeSort = async () => {
            setSwapping(true);
            await mergeSort(inputArray);
            setSwapping(false);
        };


    }, []);

    // const insertionSortWithoutDelay = async (arr) => {
    //     const sortedArray = [...arr.map(Number)];
    //
    //     for (let i = 1; i < sortedArray.length; i++) {
    //         let currentValue = sortedArray[i];
    //         let j;
    //
    //         for (j = i - 1; j >= 0 && sortedArray[j] > currentValue; j--) {
    //             const temp = sortedArray[j];
    //             sortedArray[j] = sortedArray[j + 1];
    //             sortedArray[j + 1] = temp;
    //
    //             setResultArray([...sortedArray]);
    //         }
    //
    //         setResultArray([...sortedArray]);
    //     }
    //
    //     return sortedArray;
    // };

    const handleButtonClick = async () => {

        const sortedResult = await mergeSort(inputArray);

        setResultArray(sortedResult);
    };

    // const handleRandomArray = async () => {
    //     const randomArr = [];
    //
    //     for (let i = 0; i < 5; i++) {
    //         randomArr.push(Math.floor(Math.random() * 100) + 1);
    //     }
    //
    //     const sortedResult = await insertionSort(randomArr);
    //     setResultArray(sortedResult);
    // };

    // const handleDirectButtonClick = async () => {
    //     const sortedResult = await insertionSortWithoutDelay(inputArray);
    //     setResultArray(sortedResult);
    // };

    return (
        <div>
            <InputContainer>
                <InputField
                    placeholder="Enter array (comma-separated)"
                    onChange={(e) => setInputArray(e.target.value.split(","))}
                />
                <Button onClick={handleButtonClick}>Go</Button>
                <Button onClick={handleButtonClick}>Generate</Button>
                <Button onClick={handleButtonClick}>Sort Directly</Button>
            </InputContainer>

            <SortingComponent>
                <div style={{ display: 'flex' }}>
                    {resultArray.map((num, index) => (
                        <Rectangle
                            key={index}
                            value={num}
                            swapping={swapping && index >= resultArray.length - 2}
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

