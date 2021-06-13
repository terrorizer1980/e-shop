import React from 'react';
import './info.css';

const Info = () => {
  return (
    <>
      <div className='info-section'>
        <div className='info-img'>
          <img src='/images/vs.jpg' alt='' />
        </div>
        <div className='info-text'>
          <h2 className='info-text-heading'>EV-Wheel wheels </h2>
          <p className='info-text-body'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            sapiente provident quo autem soluta facilis earum suscipit! Minima,
            qui aspernatur!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est
            commodi sed optio eaque ducimus culpa, officia, cum dolores harum
            architecto vitae tempore delectus provident labore aspernatur non!
            Sit, culpa.
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
