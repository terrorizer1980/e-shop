import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Header from './Header';
const Jumbo = () => {
  let styles = {
    color: 'white',
  };

  return (
    <>
      <Jumbotron className='jumbo-bg d-flex justify-content-center align-items-center '>
        <div style={styles} className='text-center'>
          <h1 className='jumbo-h1 text-capitalize font-weight-bold '>
            Welcome to EV-Wheels
          </h1>
          <h4 className='jumbo-h4 '>
            Find the best personal transport devices on the Web!
          </h4>
          <span className='line'></span>
          <a href='#' className='enter-btn'>
            ENTER The SHOP
          </a>
        </div>
      </Jumbotron>
    </>
  );
};

export default Jumbo;
