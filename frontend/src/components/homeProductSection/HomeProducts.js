import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import './homeProduct.css';

const HomeProducts = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  return <div></div>;
};

export default HomeProducts;
