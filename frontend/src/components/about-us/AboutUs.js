import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <div className='about-us-header'>
        <div className='wheel-images'>
          <img src='/images/onewheel.jpg' alt='onewheel' />
        </div>
        <div className='about-us-text'>
          <p>
            For over 5 years, EV-Wheels has been built on the vision of
            uncompromising quality and speed.
          </p>
        </div>
      </div>
      <div className='about-us-cards'>
        <div className='leadership-card'>
          <p>
            Today, Ghurka’s standards of quality are just as uncompromising as
            when the brand was founded. Every piece is created by artisans who
            have dedicated their lives to learning the art of making beautiful
            and practical leather goods. Through unparalleled craftsmanship,
            Ghurka is made to last. Over the years, we’ve built long-standing
            relationships with our production partners, each one rooted in trust
            and a commitment to excellence. In fact, the Ghurka original
            collection is still crafted in the same factory in Norwalk, CT that
            produced the very first commercially available Ghurka product — the
            Express No. 2. These artisans created many of the pieces that serve
            as the building blocks of our heritage, from the handcrafted goods
            made for President Ronald Reagan to the countless Examiner No. 5
            briefcases carried by the who’s-who of Wall Street in the late 80’s
            and early 90’s.
          </p>
          <div className='leadership-image'>
            <img src='/images/onewheel.jpg' alt='onewheel' />
          </div>
        </div>
        <div className='quality-card'>
          <div className='leadership-image'>
            <img src='/images/onewheel.jpg' alt='onewheel' />
          </div>

          <p>
            Around the world, you’ll find more skilled artisans that we are
            proud to call our production partners. In the hills of Florence,
            Italy, a number of women’s handbags and select silhouettes are woven
            together with our Ghurka heritage look. And in Ubrique, Spain, a
            town with hundreds of years of leather craftsmanship as its legacy,
            our wallets and other small leather goods come to life. Where and
            how our products are made is an integral part of our heritage. Every
            piece in our collection is made to serve as your trusted companion
            through a lifetime of experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
