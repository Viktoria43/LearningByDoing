import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import contentIcon from './images/content-icon.png';
import quizIcon from './images/quiz-icon.png';

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
    let progress = { 1: true, 2: false, 3: false, 4: false, 5: false, 6: false };



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
    height: '40px',
  };

  const barStyle = {
    display: 'flex',
    width: '100%',
    position: 'relative',
    height: '60px',
    overflow: 'hidden',
    backgroundColor: '#dddddd',
    borderRadius: '5px',
  };

  const slidingPartStyle = {
    position: 'absolute',
    width: '50%', 
    height: '100%',
    backgroundColor: 'rgba(51, 68, 221, 0.5)', 
    transition: 'transform 0.2s ease-in-out',
    transform: `translateX(${(step - 1) * 100}%)`,
    boxSizing: 'border-box',
    pointerEvents: 'none',
    borderRadius: '5px',
  };

  const clickablePartStyle = {
    flex: '1',
    height: '100%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px', 
    justifyContent: 'center',
  };

  const iconStyle = {
    width: '25px', 
    height: '25px', 
    marginRight: '5px', 
  };

  const labelStyle = {
    fontSize: '20px', 
    marginLeft: '5px', 
    marginBottom: '3px' ,
  };

  const PageTitle = ['Content', 'Quiz'];
  const iconPaths = [contentIcon, quizIcon];

  return (
    <div style={containerStyle}>
      <div style={barStyle}>
        <div style={slidingPartStyle} />
        {[1, 2].map((num) => (
          <div key={num} onClick={() => handleStepClick(num)} style={clickablePartStyle}>
            <img src={iconPaths[num - 1]} alt={`Icon ${PageTitle[num - 1]}`} style={iconStyle} />
            <label style={labelStyle}>{PageTitle[num - 1]}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoPages;
