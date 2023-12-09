import Header from "./components/Header";
import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Use 100% of the viewport height */
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;// Adjust the margin as needed
`;

const InputField = styled.input`
  width: 300px; /* Adjust the width as needed */
  padding: 8px; /* Adjust the padding as needed */
  margin-top: 5px; /* Adjust the margin as needed */
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

export default function Login() {
    const loginLabels = ['Username', 'Password'];
    const registerLabels = ['Choose Username', 'Choose a Password'];

    return (
        <div>
            <Header />
        <CenteredContainer>



            {loginLabels.map((label) => (
                <form action="POST">
                <InputContainer key={label}>
                    <label>{label}:</label>
                    <InputField type={label === 'Password' ? 'password' : 'text'} />
                </InputContainer>
                </form>
            ))}
            <Button>Login</Button>

            {registerLabels.map((label) => (
                <InputContainer key={label}>
                    <label>{label}:</label>
                    <InputField type={label === 'Password' ? 'password' : 'text'} />
                </InputContainer>
            ))}
            <Button>Register</Button>
        </CenteredContainer>
        </div>

    );
}
