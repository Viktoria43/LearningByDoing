import React from 'react';
import './Line.css'; // Import the CSS file

const Line = ({ from, to }) => {
  const lineStyle = {
    left: `${from.x}px`,
    top: `${from.y}px`,
    width: `${to.x - from.x}px`,
    height: `${to.y - from.y}px`,
  };

  return <div className="connector-line" style={lineStyle} />;
};

export default Line;
