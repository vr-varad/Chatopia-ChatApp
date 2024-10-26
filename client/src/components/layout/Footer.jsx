/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

// Inline styles
const footerStyle = {
  backgroundColor: '#222', // Dark background color
  color: '#fff', // White text color
  textAlign: 'center',
  padding: '10px 0',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const textStyle = {
  fontSize: '14px',
  margin: '0',
};

export default Footer;
