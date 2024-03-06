// DataStructureButtons.js
import React, {useEffect, useState} from 'react';
//import './buttons.css';
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
  font-weight: 300;
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
    opacity: 1;
    cursor: not-allowed;
  }
  &.not-passed {
    opacity: 0.5;
    cursor: not-allowed;
  }
` ;






export default function DataStructureButtons() {
  const buttonLabels = ['OOP', 'Lists', 'BinaryTree', 'InsertionSort', 'MergeSort', 'QuickSort'];
    const [userLevel, setUserLevel] = useState(6);
    const [token, setToken] = useState(() => window.localStorage.getItem('accessToken'));

    useEffect(() => {
        const fetchUserLevel = async () => {
            if(token!==null) {
                try {

                    const response = await axios.post(`${process.env.REACT_APP_API_URL || '/api'}/get-level-data`, {
                        token: token
                    });

                    const {success, lastLevel2} = response.data;

                    if (success) {
                        setUserLevel(lastLevel2 - 1);
                    } else {
                        console.error('Failed to fetch user level');

                    }
                } catch (error) {
                    console.error('Error fetching user level:', error);
                }
            }
            else if (token === null) {
                const progressString = window.localStorage.getItem('progress2');
                const progress2 = JSON.parse(progressString);
                let lastTrueLevel = 6;

                if (!progress2) {
                    setUserLevel(lastTrueLevel);

                    return;
                }

                for (let level = 7; level <= 12; level++) {
                    if (progress2[level]) {
                        lastTrueLevel = level;
                    }
                }

                setUserLevel(lastTrueLevel);
            }
        };


        fetchUserLevel();
    }, []);

  return (
    <FullWidthDiv>
      <h3 className="header">Data structures & visualisers</h3>
      <div className="intermediate-container">
        {buttonLabels.map((label, index) => (
          <Link to={'/DataStructures/'+label} className="link" >
              <Button
                  className={`buttons background-inter ${index + 6 <= userLevel ? 'passed' : 'not-passed'}`}
                  disabled={index + 6 > userLevel}
              >
                  {label}

          </Button>
          </Link>
        ))}
      </div>
    </FullWidthDiv>
  );
}