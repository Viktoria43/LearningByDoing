import React, { useState } from 'react';

const ThreePages = ({contentComponent, visualisationComponent, quizComponent}) =>{
  const [step, setStep] = useState(1);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <ProgressBar step={step} onChangeStep={handleStepChange} />
      </div>

      {step === 1 && contentComponent}
      {step === 2 && visualisationComponent}
      {step === 3 && quizComponent}
    </div>
  );
};

const ProgressBar = ({ step, onChangeStep }) => {
  const handleStepClick = (newStep) => {
    onChangeStep(newStep);
  };

  const barStyle = {
    display: 'flex',
    width: '100%',
    position: 'relative',
    height: '18px',
    overflow: 'hidden',
    margin: '10px',
    backgroundColor: '#dddddd',
    borderRadius: '5px',
  };

  const slidingPartStyle = {
    position: 'absolute',
    margin: '2px',
    width: '33%',
    height: '73%',
    backgroundColor: '#3344dd',
    transition: 'transform 0.2s ease-in-out',
    transform: `translateX(${(step - 1) * 101}%)`, // Adjust to use one third of the width
    boxSizing: 'border-box',
    pointerEvents: 'none',
    borderRadius: '5px',
  };

  const clickablePartStyle = {
    margin: '3px',
    flex: '1',
    height: '100%',
    cursor: 'pointer',
    width: '33%', 
  };

  const PageTitle = ['Content', 'Visualisation', 'Quiz'];

  return (
    <div style={barStyle}>
      <div style={slidingPartStyle} />
      {[1, 2, 3].map((num) => (
        <div
          key={num}
          onClick={() => handleStepClick(num)}
          style={clickablePartStyle}
        >
          {PageTitle[num-1]}
        </div>
      ))}
    </div>
  );
};

export default ThreePages;
