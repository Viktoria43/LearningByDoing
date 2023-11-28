// ButtonsContainer.js
import React from 'react';
import './buttons.css';
import IntroductionButtons from './IntroductionButtons';
import DataStructureButtons from './DataStructureButtons';

export default function ButtonsContainer() {
  return (
    <div className="buttons-container">
      <IntroductionButtons />
      <DataStructureButtons />
    </div>
  );
}
