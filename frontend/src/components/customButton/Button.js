import React from 'react';
import './button.css';

const Button = ({ children }) => {
  return (
    <button className='button'>
      <span>{children} </span>
    </button>
  );
};

export default Button;
