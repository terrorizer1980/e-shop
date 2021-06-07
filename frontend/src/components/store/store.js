import React from 'react';
import './store.css';

const videoSource =
  'https://ia601401.us.archive.org/12/items/bgvideo_202106/bgvideo.mp4';
const store = () => {
  return (
    <div className='container'>
      <video
        className='video '
        playsinline
        autoPlay='autoplay'
        loop='loop'
        fullscreen
        muted
        id='video-id'
      >
        <source src={videoSource} type='video/mp4' />
      </video>

      <div className='video-banner_content'></div>
    </div>
  );
};

export default store;
