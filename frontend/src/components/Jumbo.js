import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LinkContainer } from 'react-router-bootstrap';

const videoSource =
  'https://ia601507.us.archive.org/32/items/video1_20210608/video1.mp4';

const Jumbo = () => {
  return (
    <>
      <div className='jumbo-bg d-flex justify-content-center align-items-center '>
        <video
          className='myVideo'
          playsinline
          autoPlay
          loop
          fullscreen
          muted
          id='my-video-id'
          // preload='none'
        >
          <source src={videoSource} type='video/mp4' />
        </video>

        <div className='jumbo-text'>
          <h1 className='jumbo-h1 text-capitalize font-weight-bold '>
            Welcome to EV-Wheels
          </h1>
          <h4 className='jumbo-h4 '>
            Find the best personal transport devices on the Web!
          </h4>
          <div className='line'></div>

          <LinkContainer to='/store'>
            <a href='#' className='enter-shop link-enter'>
              ENTER THE SHOP
            </a>
          </LinkContainer>
        </div>
      </div>
    </>
  );
};

export default Jumbo;
