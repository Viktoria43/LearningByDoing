import Header from "./components/Header";
import React from 'react';
import styled from 'styled-components';

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
   // Adjust the margin as needed
`;

export default function Login() {
    const loginLabels = ['Username', 'Password'];
    const registerLabels = ['Choose Username', 'Choose a Password'];

    return (
        <div>
            <Header />
        <CenteredContainer>



            {loginLabels.map((label) => (
                <InputContainer key={label}>
                    <label>{label}:</label>
                    <InputField type={label === 'Password' ? 'password' : 'text'} />
                </InputContainer>
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
