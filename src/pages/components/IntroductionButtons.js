// IntroductionButtons.js
import React, {useEffect, useState} from 'react';
import './buttons.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from "axios";

const FullWidthDiv = styled.div`
  width: 95%;
  margin: auto;
 
`;
const Button = styled.button`
  font-family: 'Verdana';
  font-size: 20px;
  display: flex;
  width: 9em;
  height: 6em;
  margin-right: 3em;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: 600;
  color: white;
  border-radius: 15px;
  border: none;
  transition: box-shadow 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 3px #7f7f7f;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  }
  &.passed {
    background-color: green;
  }

  &.not-passed {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;



export default function IntroductionButtons() {
  const buttonLabels = ['Datatypes', 'Conditionals', 'Operations', 'Loops', 'Functions', 'Arrays'];
    const [userLevel, setUserLevel] = useState(1);
    const [token, setToken] = useState(() => window.localStorage.getItem('accessToken'));
    useEffect(() => {
        const fetchUserLevel = async () => {
            try {

                const response = await axios.post('http://localhost:4000/get-level-intro', {token:token
                });

                const { success,lastLevel } = response.data;

                if (success) {
                    setUserLevel(lastLevel);
                    console.log(lastLevel);
                } else {
                    console.error('Failed to fetch user level');

                }
            } catch (error) {
                console.error('Error fetching user level:', error);
            }
        };


        fetchUserLevel();
    }, []);



  return (
    <FullWidthDiv>
      <h3 className="header">Introduction:</h3>
      <div className="basics-container">
        {buttonLabels.map((label, index) => (
          <Link to={'/Introduction/'+label} className="link">
              <Button
                  className={`buttons background-basics ${index <= userLevel ? '' : 'disabled'}`}
                  disabled={index > userLevel}
              >
                  {label}
              </Button>
          </Link>
        ))}
      </div>
    </FullWidthDiv>
  );
}