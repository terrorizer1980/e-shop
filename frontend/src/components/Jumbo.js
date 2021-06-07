import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LinkContainer } from 'react-router-bootstrap';

const videoSource =
  'https://ia601401.us.archive.org/12/items/bgvideo_202106/bgvideo.mp4';

const Jumbo = () => {
  return (
    <>
      <Jumbotron className='jumbo-bg d-flex justify-content-center align-items-center '>
        <video
          className='myVideo '
          playsinline
          autoPlay='autoplay'
          loop='loop'
          fullscreen
          muted
          id='my-video-id'
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
      </Jumbotron>
    </>
  );
};

export default Jumbo;
