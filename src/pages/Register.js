import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "./components/Header";
import axios from "axios";



const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px; // Adjust the margin as needed
`;
const Button = styled.button`
  text-decoration: none;
  background-color: black;
  width: 150px; /* Adjust the width as needed */
  padding: 8px;
  color: white;
  font-size: 1em;
  font-family: 'Futura', 'Trebuchet MS', sans-serif;
  padding: 8px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  margin-bottom: 40px;

  &:hover {
    background-color: #559;
`;

const InputField = styled.input`
  width: 300px; /* Adjust the width as needed */
  padding: 8px; /* Adjust the padding as needed */
  margin-top: 5px; /* Adjust the margin as needed */
`;

export default function Register() {
    const registerLabels = ['Choose Username', 'Choose a Password'];

    const handleReg=()=>{

            axios.get('http://localhost:4000/login')
                .then(response => {
                    console.log('Response from server:', response.data);
                })
                .catch(error => {
                    console.error('Error making axios request:', error);
                })

    }

    return (
        <div>
            <Header/>
<CenteredContainer>
            {registerLabels.map((label) => (
                <form action="POST">
                    <InputContainer key={label}>
                        <label>{label}:</label>
                        <InputField type={label === 'Password' ? 'password' : 'text'} />
                    </InputContainer>
                </form>
            ))}
                <Button onClick={handleReg}>Register</Button>
</CenteredContainer>

        </div>
    );
}

