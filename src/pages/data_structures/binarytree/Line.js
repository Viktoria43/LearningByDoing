import React from 'react';
import './Line.css'; // Import the CSS file for styling

const Line = ({ length, angle, top, left }) => {
  const lineStyle = {
    width: `${length}%`,
    transform: `rotate(${angle}deg)`,
    position: 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    border: '1px solid black',
  };

  return <div className="line" style={lineStyle}></div>;
};

export default Line;
