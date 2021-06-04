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
          <div>
            <img
              alt='logo'
              src='/images/racing.png'
              width='30px'
              height='30px'
              className='d-inline-block align-top'
            />{' '}
            EV-Wheels
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
            <i className='fas fa-shopping-cart '></i>
          </span>
        </LinkContainer>
      </div>
    </header>
  );
};

export default Header;
