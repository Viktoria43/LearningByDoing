import React, {useState} from "react";
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
                  : props.compare
                          ? 'blue'
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
    const [stepForwardQueue, setStepForwardQueue] = useState([]);
    const [stepBackQueue, setStepBackQueue] = useState([]);



    const [j, setJ] = useState(0);
    const [i, setI] = useState(0);
    const [pivot, setPivot] = useState(0);

    const QuickSort = async (arr) => {
        const sortedArray = [...arr.map(Number)];
        if (sortedArray.length <= 1) {
            return arr;
        }

        const animationDelay = 1200;
        const animationSteps = [];
        const iAndJSteps = [];

        const performSort = async (arr, start, end) => {
            if (start >= end) return;

            const pivot = arr[start];
            setPivot(pivot);
            let left = start + 1;
            let right = end;

            while (left <= right) {
                while (left <= end && arr[left] <= pivot) {
                    left++;

                }

                while (right > start && arr[right] >= pivot) {
                    right--;

                }

                if (left < right) {
                    [arr[left], arr[right]] = [arr[right], arr[left]];
                    const stepArray = [...arr];
                    animationSteps.push(stepArray);
                    iAndJSteps.push([left, right]);
                }
            }

            [arr[start], arr[right]] = [arr[right], arr[start]];




            const stepArray = [...arr];
            animationSteps.push(stepArray);
            iAndJSteps.push([left, right]);

            await Promise.all([
                performSort(arr, start, right - 1),
                performSort(arr, right + 1, end),
            ]);
        };

        await performSort(sortedArray, 0, sortedArray.length - 1);

        for (let i = 0; i < animationSteps.length; i++) {
            const step = animationSteps[i];
            const [left, right] = iAndJSteps[i];

            setResultArray(step);
            setI(left);
            setJ(right);
            await new Promise((resolve) => setTimeout(resolve, animationDelay));
        }

        return sortedArray;
    };


    const QuickSortStepForward = async (arr) => {
        const performSortStepForward = async (start, end) => {
            if (start >= end) return;

            const beforeModified = [...arr];
            const pivot = arr[start];
            setPivot(pivot);

            let left = start + 1;
            let right = end;

            while (left <= right) {
                while (left <= end && arr[left] <= pivot) {
                    left++;

                }

                while (right > start && arr[right] >= pivot) {
                    right--;


                }

                if (left < right) {
                    [arr[left], arr[right]] = [arr[right], arr[left]];

                }
            }

            [arr[start], arr[right]] = [arr[right], arr[start]];

            setStepBackQueue((queue) => [
                ...queue,
                [start, end, beforeModified]
            ]);
            setStepForwardQueue((queue) => [
                ...queue,
                [start, right - 1],
                [right + 1, end],
            ]);
            setI(left);
            setJ(right);
        }


        for  (let i =0;i<stepForwardQueue.length;i++) {
            const [start, end] = stepForwardQueue.shift();
            await performSortStepForward(start, end);
        }

        return arr;
    };


    const QuickSortStepBack = async () => {
        if (!stepBackQueue.length) {
            return resultArray;
        }

        const [left, right, snapshot] = stepBackQueue.pop();
        setStepForwardQueue((queue) => [[left, right]]);

        setI(left);
        setJ(right);

        return snapshot;
    };


    const handleStepForward = async () => {
        const correctArray = [...(resultArray.length ? resultArray : inputArray)];
        const sortedResult = await QuickSortStepForward(correctArray);
        setResultArray(sortedResult);
    };

    const handleStepBack = async () => {
        const sortedResult = await QuickSortStepBack();
        setResultArray(sortedResult);
    };


    const handleReset = () => {
        setInputArray([]);
        setResultArray([]);
        setStepForwardQueue([]);
        setStepBackQueue([]);
        setJ(0);
        setI(0);
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

    const onInput = (e) => {
        const input = e.target.value.split(",").map(Number);
        setInputArray(input);
        setStepForwardQueue([[0, input.length - 1]]);
    }

    return (
        <div>
            <InputContainer>
                <InputField
                    id="input-field"
                    placeholder="Enter array (comma-separated)"
                    onChange={onInput}
                />
                <Button onClick={handleButtonClick}>Go</Button>
                <Button onClick={handleRandomArray}>Generate</Button>
                <Button onClick={handleDirectButtonClick}>Sort Directly</Button>
                <Button onClick={handleReset}>Reset Input</Button>
                <Button onClick={handleStepForward}>Step Forward</Button>
                <Button onClick={handleStepBack}>Step Back</Button>
            </InputContainer>

            <SortingComponent>
                <div style={{display: "flex"}}>
                    {resultArray.map((num, index) => (
                        <Rectangle key={index} value={num} compare={index === j || index===i} pivot={index === pivot} >
                            {num}
                        </Rectangle>
                    ))}
                </div>
            </SortingComponent>
        </div>
    );

}
export default Visualisation;


