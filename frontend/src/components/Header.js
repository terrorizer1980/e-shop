import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import AboutUsModal from './AboutUsModal';

import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar
        className=' justify-content-between'
        bg='light'
        variant='light'
        expand='lg'
        collapseOnSelect
      >
        <Nav className=' justify-content-start'>
          {'      '}
          {/* <LinkContainer to='/about-us'>
            <Nav.Link> Our Story</Nav.Link>
          </LinkContainer> */}
          <AboutUsModal />
          <LinkContainer to='/support'>
            <Nav.Link> Support</Nav.Link>
          </LinkContainer>
        </Nav>

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
        <div className='header-container'>
          <Route render={({ history }) => <SearchBox history={history} />} />
          <LinkContainer to='/cart'>
            <Nav.Link>
              {' '}
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id='username'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
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
      </Navbar>
    </header>
  );
};

export default Header;
