import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-light py-4 text-center">
      <p
        className="mb-0"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '18px',
          letterSpacing: '0.5px',
        }}
      >
        &copy; {new Date().getFullYear()} Designed and developed by{' '}
        <span
          style={{
            color: '#ff4d4d',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px black',
          }}
        >
          Bhanu Keerthi
        </span>
      </p>
    </footer>
  );
};

export default Footer;
