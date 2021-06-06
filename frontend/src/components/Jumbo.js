import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Header from './Header';
const Jumbo = () => {
  return (
    <>
      <Jumbotron className='jumbo-bg d-flex justify-content-center align-items-center '>
        <div className='jumbo-text'>
          <h1 className='jumbo-h1 text-capitalize font-weight-bold '>
            Welcome to EV-Wheels
          </h1>
          <h4 className='jumbo-h4 '>
            Find the best personal transport devices on the Web!
          </h4>
          <div className='line'></div>
          <a href='#' className='enter-shop link-enter'>
            ENTER THE SHOP
          </a>
        </div>
      </Jumbotron>
    </>
  );
};

export default Jumbo;
