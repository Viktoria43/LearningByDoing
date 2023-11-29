// DataStructureButtons.js
import React from 'react';
import './buttons.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FullWidthDiv = styled.div`
  width: 95%;
  margin: auto;
  /* Add other styles as needed */
`;

export default function DataStructureButtons() {
  const buttonLabels = ['Sorting', 'Lists', 'BinaryTree', 'Loops', 'OOP', 'Queues'];

  return (
    <FullWidthDiv>
      <h3 className="header">Data structures & visualizers:</h3>
      <div className="intermediate-container">
        {buttonLabels.map((label, index) => (
          <Link to={'/DataStructures/'+label} className="link">
            <button key={index} className="buttons background-inter">
            {label}
          </button>
          </Link>
        ))}
      </div>
    </FullWidthDiv>
  );
}