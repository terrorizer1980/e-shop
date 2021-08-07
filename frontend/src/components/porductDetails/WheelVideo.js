import React from 'react';
import ReactPlayer from 'react-player';
import './wheelVideo.css';

const WheelVideo = ({ youtubeURL }) => {
  return (
    <div className='review-container'>
      <div className='review-video'>
        <h2>REVIEW VIDEO</h2>
        <ReactPlayer
          url={youtubeURL}
          muted={false}
          controls={true}
          volume={0.3}
        />
      </div>
    </div>
  );
};

export default WheelVideo;
