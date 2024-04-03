import React, { useState, useEffect } from 'react';

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); 

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true); 
      setTimeout(() => setIsVisible(false), 1000); 
    }, 20000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  const styles = {
    container: {
      backgroundColor: '#fff3cd',
      color: '#856404',
      padding: '10px',
      borderRadius: '9px',
      fontSize: '12px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: isVisible ? 'inline-block' : 'none',
      position: 'absolute',
      top: '59px',
      right: '25px',
      maxWidth: '180px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1000,
      opacity: 1,
      animation: isFadingOut ? 'fadeOut 1s ease-out forwards' : 'fadeIn 1s ease-out forwards',
    },
    closeButton: {
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: '16px',
      color: '#856404',
      float: 'right',
    },
    arrow: {
      position: 'absolute',
      width: '0',
      height: '0',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: `15px solid #fff3cd`,
      top: '-7px',
      right: '10px',
    }
  };

  const handleClose = () => {
    setIsFadingOut(true); 
    setTimeout(() => setIsVisible(false), 1000); 
  };

  return isVisible ? (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}
      </style>
      <button style={styles.closeButton} onClick={handleClose}>&times;</button>
      <p>Log in to save your progress. Remember to practice the modules & pass the quizzes to continue to the next module! Already logged in? You can close this message.</p>
      <div style={styles.arrow} />
    </div>
  ) : null;
};

export default Disclaimer;
