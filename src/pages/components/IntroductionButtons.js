// IntroductionButtons.js
import React from 'react';
import './buttons.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FullWidthDiv = styled.div`
  width: 95%;
  margin: auto;
  /* Add other styles as needed */
`;
export default function IntroductionButtons() {
  const buttonLabels = ['Datatypes', 'Conditionals', 'Operations', 'Loops', 'Functions', 'Arrays'];

  return (
    <FullWidthDiv>
      <h3 className="header">Introduction:</h3>
      <div className="basics-container">
        {buttonLabels.map((label, index) => (
          <Link to={'/Introduction/'+label} className="link">
            <button key={index} className="buttons background-basics">
              {label}
            </button>
          </Link>
        ))}
      </div>
    </FullWidthDiv>
  );
}