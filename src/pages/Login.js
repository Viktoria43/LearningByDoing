import Header from "./components/Header";
import React, {useEffect, useState} from 'react';
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
const [username, setUserName] = useState('');
const [password,setPass]= useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:4000/login', { username, password });
            const { success } = response.data;

            if (success) {
                // Handle successful login, e.g., redirect to another page
                console.log('Login successful');
            } else {
                // Handle unsuccessful login, e.g., show an error message
                console.log('Login failed');
            }
        } catch (error) {
            // Handle any error that occurred during the request
            console.error('Error during login:', error);
        }
    };


    return (
        <div>
            <Header />

        <CenteredContainer>

            {loginLabels.map((label) => (
                <form key={label} onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>

                <InputContainer>
                        <label>{label}:</label>
                        <InputField
                            type={label === 'Password' ? 'password' : 'text'}
                            value={label === 'Password' ? password : username}
                            onChange={e => label === 'Username' ? setUserName(e.target.value) : setPass(e.target.value)}
                        />
                    </InputContainer>
                </form>
            ))}
            <Button onClick={handleLogin}>Login</Button>

            <Link to="/Register">Don't have an account? Sign up!</Link>
        </CenteredContainer>
        </div>

    );
}
