import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";


const TwoPages = ({contentComponent, quizComponent,level}) =>{
  const [step, setStep] = useState(1);
  const [token, setToken] = useState(() => window.localStorage.getItem('accessToken'));

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };
  const [Intro, setLevelI] = useState(1);
  const [DataStructures, setLevelD] = useState(1);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <ProgressBar step={step} onChangeStep={handleStepChange} level={level} token={token} />
      </div>

      {step === 1 && contentComponent}
      {step === 2 && quizComponent}
    </div>
  );
};

const ProgressBar = ({ step, onChangeStep,level, token }) => {
  const handleStepClick = (newStep) => {
    onChangeStep(newStep);
  };
  const navigate = useNavigate();
  const handleLevels=async () =>{
    let progress = { 1: true, 2: false, 3: false, 4: false, 5: false, 6: false,7: true, 8: false, 9: false, 10: false, 11: false, 12: false  };



    if(token!==null) {
      try {

        const response = await axios.post('http://localhost:4000/update-level', {token: token, newLevel: level});

        const {success} = response.data;

        if (success) {
          console.log(`User's level updated successfully to ${level}`);
          navigate('/');
        } else {

        }
      } catch (error) {

        console.error('Error updating level:', error);

      }
    }
  else if (token===null){
      progress = { ...progress, [level]: true };
      window.localStorage.setItem('progress', JSON.stringify(progress));
      navigate('/');
    }
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
      <button style={nextButtonStyle} onClick={() => {handleStepClick(2);if (step === 2) {handleLevels();}}}>{">"}</button>
    </div>
  );
};

export default TwoPages;
