import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './jumbo.css';

const videoSource =
  'https://ia601402.us.archive.org/35/items/bgvideo_20210608_0132/bgvideo.mp4';

const Jumbo = () => {
  return (
    <>
      <div className='jumbo-bg d-flex justify-content-center align-items-center '>
        <video
          className='myVideo'
          playsInline
          autoPlay
          loop
          fullscreen='true'
          muted
          id='my-video-id'
        >
          <source src={videoSource} type='video/mp4' />
        </video>

        <div className='jumbo-text'>
          <h1 className='jumbo-h1 text-capitalize font-weight-bold '>
            Welcome to <span className='jumboTitle'>EV-Wheels</span>
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
