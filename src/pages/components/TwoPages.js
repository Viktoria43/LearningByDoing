import React, { useState } from 'react';

const TwoPages = ({contentComponent, quizComponent}) =>{
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
      {step === 2 && quizComponent}
    </div>
  );
};

const ProgressBar = ({ step, onChangeStep }) => {
  const handleStepClick = (newStep) => {
    onChangeStep(newStep);
  };

  const containerStyle = {
    width: '100%',
    position: 'relative',
    display: 'flex',
    height: '36px',
  };

  const barStyle = {
    display: 'flex',
    width: '92%',
    position: 'relative',
    height: '20px',
    overflow: 'hidden',
    margin: '10px',
    marginTop: '12.5px',
    backgroundColor: '#dddddd',
    borderRadius: '5px',
  };

  const prevButtonStyle = {
    width: '25px',
    marginLeft: '15px',
    marginTop: '10px',
    borderRadius: '10px',
    cursor: 'pointer'
  }

  const nextButtonStyle = {
    width: '25px',
    marginRight: '5px',
    marginTop: '10px' ,
    borderRadius: '10px',
    cursor: 'pointer'
  }

  const slidingPartStyle = {
    position: 'absolute',
    margin: '2px',
    width: '50%',
    height: '73%',
    backgroundColor: '#3344dd',
    transition: 'transform 0.2s ease-in-out',
    transform: `translateX(${(step - 1) * 99}%)`, // Adjust to use one third of the width
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

  const PageTitle = ['Content', 'Quiz'];

  return (
    <div style={containerStyle}>
       <button style={prevButtonStyle} onClick={()=>handleStepClick(1)}>{"<"}</button>
    <div style={barStyle}>
      <div style={slidingPartStyle} />
      {[1, 2].map((num) => (
        <div
          key={num}
          onClick={() => handleStepClick(num)}
          style={clickablePartStyle}
        >
        <label>{PageTitle[num-1]}</label>
        </div>
      ))}
      
    </div>
    <button style={nextButtonStyle} onClick={()=>handleStepClick(2)}>{">"}</button>
    </div>
  );
};

export default TwoPages;
