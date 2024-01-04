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
  width: 50px; 
  padding: 5px;
  color: white;
  font-size: 1em;
  font-family: 'Futura', 'Trebuchet MS', sans-serif;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #559;
`;



const visualisationStyle = {
    backgroundColor: '#44dd33',
    height: '500px',
};

const Visualisation = () => {
    const [inputArray, setInputArray] = useState([]);
    const [resultArray, setResultArray] = useState([]);

    const insertionSort = (arr) => {
        const sortedArray = [...arr];
        for (let i = 1; i < sortedArray.length; i++) {
            let currentValue = sortedArray[i];
            let j;
            for (j = i - 1; j >= 0 && sortedArray[j] > currentValue; j--) {
                sortedArray[j + 1] = sortedArray[j];
            }
            sortedArray[j + 1] = currentValue;
        }
        return sortedArray;
    };

    const handleButtonClick = () => {
        const sortedResult = insertionSort(inputArray);
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
            </InputContainer>
            <p>Original Array: {inputArray.join(", ")}</p>
            <p>Sorted Array: {resultArray.join(", ")}</p>
        </div>
    );
};
export default Visualisation;

