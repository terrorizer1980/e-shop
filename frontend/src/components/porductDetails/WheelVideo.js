import React from 'react';
import ReactPlayer from 'react-player';
import { Row, Col } from 'react-bootstrap';

const WheelVideo = ({ youtubeURL }) => {
  return (
    <Row>
      <Col md={12}>
        <h2>Video</h2>
        <ReactPlayer
          url={youtubeURL}
          muted={false}
          controls={true}
          volume={0.3}
        />
      </Col>
    </Row>
  );
};

export default WheelVideo;
