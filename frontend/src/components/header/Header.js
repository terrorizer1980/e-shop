import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { logout } from '../../actions/userActions';

import './header.css';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className='header-container'>
      <div className='left-header'>
        <LinkContainer to='/aboutus'>
          <div className='link left-header-link'> ABOUT US</div>
        </LinkContainer>
        <LinkContainer to='/support'>
          <div className='link left-header-link'> SUPPORT</div>
        </LinkContainer>
        <LinkContainer to='/store'>
          <div className='link left-header-link'> SHOP</div>
        </LinkContainer>
      </div>

      <div className='header-brand'>
        <LinkContainer to='/'>
          <div className='header-logo'>
            <span className='logo-text'>EV</span>
            <img alt='logo' src='/images/racing.png' />{' '}
            <span className='logo-text'>Wheels</span>
          </div>
        </LinkContainer>
      </div>

      <div className='right-header'>
        {userInfo ? (
          <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>LOGOUT</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <LinkContainer className='button-content' to='/login'>
            <button className='button button-header'>
              <span>LOGIN</span>
            </button>
          </LinkContainer>
        )}
        {userInfo && userInfo.isAdmin && (
          <NavDropdown title='Admin' id='adminmenu'>
            <LinkContainer to='/admin/userlist'>
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/productlist'>
              <NavDropdown.Item>Products</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/orderlist'>
              <NavDropdown.Item>Orders</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        )}
        <LinkContainer to='/cart'>
          <span className='cart-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='ionicon'
              viewBox='0 0 512 512'
            >
              <title>Cart</title>
              <circle
                cx='176'
                cy='416'
                r='16'
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='32'
              />
              <circle
                cx='400'
                cy='416'
                r='16'
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='32'
              />
              <path
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='32'
                d='M48 80h64l48 272h256'
              />
              <path
                d='M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128'
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='32'
              />
            </svg>
          </span>
        </LinkContainer>
      </div>
    </header>
  );
};

export default Header;
