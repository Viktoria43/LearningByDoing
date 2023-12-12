import React, {useEffect, useState} from "react";
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
  margin-top: 15px; 
`;
const Button = styled.button`
  text-decoration: none;
  background-color: black;
  width: 150px; 
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
  width: 300px; 
  padding: 8px; 
  margin-top: 5px; 
`;

export default function Register() {
    const registerLabels = ['Choose Username', 'Choose a Password'];
    const [username, setUserName] = useState('');
    const [password, setPass] = useState('');

    const handleReg = ()=>{
        axios.post('http://localhost:4000/register',{username: username, password:password})
        window.location.reload()

    }




    return (
        <div>
            <Header />
            <CenteredContainer>
                {registerLabels.map((label, index) => (
                    <form key={index} action="POST">
                        <InputContainer>
                            <label>{label}:</label>
                            <InputField
                                type={label === 'Choose a Password' ? 'password' : 'text'}
                                onChange={e => label === 'Choose Username' ? setUserName(e.target.value) : setPass(e.target.value)}
                            />
                        </InputContainer>
                    </form>
                ))}
                <Button onClick={handleReg}>Register</Button>
            </CenteredContainer>
        </div>
    );
}

