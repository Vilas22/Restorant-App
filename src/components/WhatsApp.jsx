import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '8618278785'; // Replace with your WhatsApp number
  const message = 'Hello! I would like to chat with you.'; // Optional predefined message

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={cardContainerStyle}>
      <div style={iconContainerStyle}>
        <img src='/whatsapp.svg' alt='WhatsApp' />
      </div>
      <div style={textContainerStyle} onClick={openWhatsApp}>
        <div style={headingStyle}>ORDER NOW</div>
        <div style={subheadingStyle}>{phoneNumber}</div>
      </div>
      <div style={dividerStyle}>OR</div>
      <div style={linkContainerStyle}>
        <h3>
          <a href="https://zomato.onelink.me/xqzv/kh542lpo" target="_blank" rel="noopener noreferrer">
            checkout on Zomato
          </a>
        </h3>
        <h3>
          <a href="https://www.swiggy.com/menu/879836?source=sharing" target="_blank" rel="noopener noreferrer">
            checkout on Swiggy
          </a>
        </h3>
      </div>
    </div>
  );
};

// Styles for the WhatsApp card button
const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'column', // Change to column to stack elements vertically
  alignItems: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Shadow for the card
  borderRadius: '10px', // Rounded corners
  padding: '15px',
  cursor: 'pointer',
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
};

const iconContainerStyle = {
  marginBottom: '10px',
};

const textContainerStyle = {
  textAlign: 'center',
};

const headingStyle = {
  fontWeight: 'bold',
  fontSize: '14px',
  color: '#333', // Main heading color
};

const subheadingStyle = {
  fontSize: '12px',
  color: '#777', // Subheading color
};

const dividerStyle = {
  margin: '10px 0', // Space between the sections
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#333',
};

const linkContainerStyle = {
  textAlign: 'center',
};

export default WhatsAppButton;
