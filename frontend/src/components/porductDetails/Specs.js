import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Specs = ({ weight, speed, range, motorPower, battery }) => {
  return (
    <div>
      <Row className='my-3 textAlign-center'>
        <Col md={2}></Col>
        <Col md={2}>
          <h4>Weight</h4>
          {weight} Ibs
        </Col>
        <Col md={2}>
          <h4>Speed</h4>
          {speed} MPH
        </Col>
        <Col md={2}>
          <h4>Range</h4>
          {range} miles
        </Col>
        <Col md={2}>
          <h4>Motor</h4>
          {motorPower} W
        </Col>
        <Col md={2}>
          <h4>Battery</h4>
          {battery} Wh
        </Col>
      </Row>
    </div>
  );
};

export default Specs;
