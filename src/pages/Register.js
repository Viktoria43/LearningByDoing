import React, {useState} from "react";
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
  border-radius: 7px;
`;

const labelSt = styled.label`
  color: white
`;

export default function Register() {
    const registerLabels = ['Choose Username', 'Choose a Password'];
    const [username, setUserName] = useState('');
    const [password, setPass] = useState('');
    const [regSuccess, setReg] = useState(false);
    const [invalidReg, setInvalid] = useState(false);
    const [usernameBusy, setBusy] = useState(false);

    const handleReg = async () => {

        try {
            const response = await axios.post('http://localhost:4000/register', {username, password})
            const {success} = response.data;

            if (username.length >= 8 && password.length >= 8 && success) {
                setReg(true);
                setInvalid(false);

            } else if (username.length < 8 && password.length < 8) {
                setReg(false);
                setInvalid(true);

            } else if (!success) {
                console.log('busy');
                setReg(false);
                setInvalid(false);
                setBusy(true);
            }
        } catch (error) {

            console.error('Error during login:', error);
        }
    };

    const cleanInput = () => {
        setUserName('');
        setPass('');

    }

    const Register = () => {
        handleReg();
        cleanInput();

    }

    return (
        <div>
            <Header/>
            <CenteredContainer>
                {registerLabels.map((label, index) => (
                    <form key={index} action="POST">
                        <InputContainer>
                            <label>{label}:</label>
                            <InputField
                                type={label === 'Choose a Password' ? 'password' : 'text'}
                                value={label === 'Choose a Password' ? password : username}
                                onChange={e => label === 'Choose Username' ? setUserName(e.target.value) : setPass(e.target.value)}
                            />
                        </InputContainer>
                    </form>
                ))}
                <Button onClick={Register}>Register</Button>
                {regSuccess && (
                    <p style={{color: 'green'}}>Registration successful! You can now proceed to the login page.</p>
                )}
                {invalidReg && (
                    <p style={{color: 'red'}}>Registration unsuccessful! Please choose a Username and a Password with a
                        minimum of 8 characters.</p>
                )}
                {usernameBusy && (
                    <p style={{color: 'red'}}>Credentials are already in use! Please choose another username!</p>
                )}
            </CenteredContainer>
        </div>
    );
}