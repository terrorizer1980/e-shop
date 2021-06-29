import React from 'react';

const AboutUs = () => {
  return (
    <>
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
          <div className='leadership-card'>leadership</div>
          <div className='product-card'>products</div>
          <div className='quality-card'> quality</div>
        </div>

        <div className='wheel-images'>images</div>
      </div>
    </>
  );
};

export default AboutUs;
