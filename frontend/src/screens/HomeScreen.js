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
import Jumbotron from '../components/Jumbo';
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
      <div className='info-section'>
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

export default HomeScreen;
