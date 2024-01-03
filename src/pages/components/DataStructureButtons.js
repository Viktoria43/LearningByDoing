// DataStructureButtons.js
import React, {useEffect, useState} from 'react';
import './buttons.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from "axios";

const FullWidthDiv = styled.div`
  width: 95%;
  margin: auto;
  /* Add other styles as needed */
`;

export default function DataStructureButtons() {
  const buttonLabels = ['OOP', 'Lists', 'BinaryTree', 'InsertionSort', 'MergeSort', 'QuickSort'];
    const [userLevel, setUserLevel] = useState(1);
    const [token, setToken] = useState(() => window.localStorage.getItem('accessToken'));
    useEffect(() => {
        const fetchUserLevel = async () => {
            try {

                const response = await axios.post('http://localhost:4000/get-level-data', {token:token
                });

                const { success,lastLevel2 } = response.data;

                if (success) {
                    setUserLevel(lastLevel2);
                    console.log(lastLevel2);
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
      <h3 className="header">Data structures & visualizers:</h3>
      <div className="intermediate-container">
        {buttonLabels.map((label, index) => (
          <Link to={'/DataStructures/'+label} className="link">
              <button
                  key={index}
                  className={`buttons background-inter ${index+7 <= userLevel ? '' : 'disabled'}`}
                  disabled={index+6 > userLevel}
              >
                  {label}
              </button>
          </Link>
        ))}
      </div>
    </FullWidthDiv>
  );
}