import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <div className='about-us-header'>
        <h2 className='text-center'>Our Story</h2>
        <p className='about-us-text'>
          EV-Wheels have been involved in eletric personal transporter since
          2016. We only offer products which we personally tested. We work
          closely with our suppliers to offer the best products to our
          customers.
        </p>
        <span className='owner'>- Bryant Wallace </span>
      </div>

      <div className='about-us-cards'>
        <div className='cards leadership-card'>
          <h2>leadership</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum porro
            at labore, totam voluptas sunt repellendus obcaecati sed non error!
            Dignissimos dolorem nulla omnis a esse quasi libero asperiores unde,
            nemo placeat magnam amet corrupti porro tempore expedita ea,
            voluptate, blanditiis dicta! Eos, atque magnam.
          </p>
        </div>
        <div className='cards product-card'>
          <h2>products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum porro
            at labore, totam voluptas sunt repellendus obcaecati sed non error!
            Dignissimos dolorem nulla omnis a esse quasi libero asperiores unde,
            nemo placeat magnam amet corrupti porro tempore expedita ea,
            voluptate, blanditiis dicta! Eos, atque magnam.
          </p>
        </div>
        <div className='cards quality-card'>
          <h2>quality</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum porro
            at labore, totam voluptas sunt repellendus obcaecati sed non error!
            Dignissimos dolorem nulla omnis a esse quasi libero asperiores unde,
            nemo placeat magnam amet corrupti porro tempore expedita ea,
            voluptate, blanditiis dicta! Eos, atque magnam.
          </p>
        </div>
      </div>

      <div className='wheel-images'>images</div>
    </div>
  );
};

export default AboutUs;
