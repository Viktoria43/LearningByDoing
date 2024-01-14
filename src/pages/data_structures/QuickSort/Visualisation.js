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
    const [swapping, setSwapping] = useState(false);
    // const [currentStep, setCurrentStep] = useState(1);
    // const [currentCount, setCount] = useState(1);

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
            let left = start + 1;
            let right = end;
             // setJ(arr[right]);

            while (left <= right) {
                while (left <= end && arr[left] <= pivot) {
                    left++;

                    setSwapping(true);
                }

                while (right > start && arr[right] >= pivot) {
                    right--;

                    setSwapping(true);
                }

                if (left < right) {
                    //;

                    setSwapping(true);
                    //await new Promise((resolve) => setTimeout(resolve, animationDelay));
                    [arr[left], arr[right]] = [arr[right], arr[left]];
                    // setJ(right)
                    // setI(left);

                    const stepArray = [...arr];
                    animationSteps.push(stepArray);
                    iAndJSteps.push([left, right]);
                }
            }

            [arr[start], arr[right]] = [arr[right], arr[start]];

            // push left and right to an array


            const stepArray = [...arr];
            animationSteps.push(stepArray);
            iAndJSteps.push([left, right]);
          // setJ(left);
          // setI(right);
           //setPivot(start);
          //  setSwapping(false);

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
            // set i and j by popping or using the index of the for loop
            await new Promise((resolve) => setTimeout(resolve, animationDelay));
        }

        return sortedArray;
    };


    const QuickSortStepForward = async (arr) => {
        const animationDelay = 1000;
        const animationSteps = [];

        const performSortStepForward = async (start, end) => {
            if (start >= end) return;

            const pivot = arr[start];
            let left = start + 1;
            let right = end;

            while (left <= right) {
                while (left <= end && arr[left] <= pivot) {
                    left++;
                   // setJ(arr[left]);
                  //  setI(arr[right]);
                    setSwapping(true);
                    debugger;
                }

                while (right > start && arr[right] >= pivot) {
                    right--;
                   // setJ(right);
                   // setJ(arr[left]);
                 //   setI(arr[right]);
                    setSwapping(true);
                    debugger;
                }

                if (left < right) {
                    [arr[left], arr[right]] = [arr[right], arr[left]];
debugger;
                   // setI(arr[right]);
                    setPivot(start);

                    const stepArray = [...arr];
                    animationSteps.push(stepArray);
                }
            }

            [arr[start], arr[right]] = [arr[right], arr[start]];

            const stepArray = [...arr];
            animationSteps.push(stepArray);

            setStepForwardQueue((queue) => [
                ...queue,
                [start, right - 1],
                [right + 1, end]
            ]);
        }

        if (stepForwardQueue.length) {
            console.log([...stepForwardQueue])
            const [start, end] = stepForwardQueue.shift();
            await performSortStepForward(start, end);
        }

        // setCurrentStep(currentStep + 1);
        // console.log(currentCount);
        return arr;
    };


    const QuickSortStepBack = async (arr) => {
        const animationDelay = 1000;
        const animationSteps = [];

        const performSortStepBack = async (start, end) => {
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

            setStepBackQueue((queue) => [
                ...queue,
                [start, right - 1],
                [right + 1, end]
            ]);
        }

        if (stepBackQueue.length) {
            console.log([...stepBackQueue])
            const [start, end] = stepBackQueue.unshift();
            await performSortStepBack(start, end);
        }

        // setCurrentStep(currentStep + 1);
        // console.log(currentCount);
        return arr;
    };


    const handleStepForward = async () => {
        const correctArray = [...(resultArray.length ? resultArray : inputArray)];
        const sortedResult = await QuickSortStepForward(correctArray);
        setResultArray(sortedResult);
    };

    const handleStepBack = async () => {
        const correctArray = [...(resultArray.length ? resultArray : inputArray)];
        const sortedResult = await QuickSortStepBack(correctArray);
        setResultArray(sortedResult);
    };


    const handleReset = () => {
        setInputArray([]);
        setResultArray([]);
        setJ(0);
        setSwapping(false);
        // setCurrentStep(0);
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


