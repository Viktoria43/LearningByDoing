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
              <button
                  className={`buttons background-basics ${index <= userLevel ? '' : 'disabled'}`}
                  disabled={index  > userLevel}
              >
                  {label}
              </button>
          </Link>
        ))}
      </div>
    </FullWidthDiv>
  );
}