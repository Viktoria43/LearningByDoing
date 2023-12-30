import React from 'react';

const Footer = () => {
    const footerStyle = {
      backgroundColor: 'rgba(30, 10, 20, 0.9)',
      padding: '10px',
      textAlign: 'center',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      height: '4em',
      flex: 1,
    };
  
    return (
      <div style={footerStyle}>
        {/* Footer content goes here */}
      </div>
    );
  };
  
  export default Footer;