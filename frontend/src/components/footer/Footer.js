import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='main-footer'>
        <div className='footer-logo'>EV-Wheels</div>
        <div className='footer-contact'>Copyright &copy; 2020 EV-Wheels</div>

        <div className='footer-social'>
          <span>
            <a href='https://www.facebook.com/'>
              <i class='fab fa-facebook-f'></i>
            </a>
          </span>{' '}
          <span>
            <a href='https://twitter.com/'>
              <i class='fab fa-twitter-square'></i>
            </a>
          </span>{' '}
          <span>
            <a href='https://www.instagram.com/'>
              <i class='fab fa-instagram'></i>
            </a>
          </span>
        </div>
        <br />
        <div className='footer-copyright'>Copyright &copy; 2020 EV-Wheels</div>
      </div>
    </footer>
  );
};

export default Footer;
