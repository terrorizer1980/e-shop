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
        <LinkContainer to='/support'>
          <Nav.Link> About Us</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/support'>
          <Nav.Link> Support</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/store'>
          <Nav.Link> Store</Nav.Link>
        </LinkContainer>
      </div>

      <div className='header-brand'>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              alt='logo'
              src='/images/racing.png'
              width='30px'
              height='30px'
              className='d-inline-block align-top'
            />{' '}
            EV-Wheels
          </Navbar.Brand>
        </LinkContainer>
      </div>

      <div className='right-header'>
        <LinkContainer to='/cart'>
          <Nav.Link>
            <i className='fas fa-shopping-cart'></i> Cart
          </Nav.Link>
        </LinkContainer>
        {userInfo ? (
          <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <LinkContainer to='/login'>
            <Nav.Link>
              <i className='fas fa-user'></i> Sign In
            </Nav.Link>
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
      </div>
    </header>
  );
};

export default Header;
