import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col, Container } from 'react-bootstrap';
// import Message from '../components/Message';
// import Loader from '../components/Loader';
// import Product from '../components/Product';
// import Paginate from '../components/Paginate';
// import { listProducts } from '../actions/productActions';
// import ProductCarousel from '../components/ProductCarousel';
import Jumbotron from '../components/jumbo/Jumbo';
import Info from '../components/info-head-screen/Info';
import Meta from '../components/Meta';

const HomeScreen = ({ match }) => {
  // const keyword = match.params.keyword;

  // const pageNumber = match.params.pageNumber || 1;

  // const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products, pages, page } = productList;

  // useEffect(() => {
  //   dispatch(listProducts(keyword, pageNumber));
  // }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <Jumbotron />
      <Info />
    </>
  );
};

export default HomeScreen;
