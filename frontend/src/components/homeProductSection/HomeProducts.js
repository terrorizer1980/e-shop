import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../../actions/productActions';
import './homeProduct.css';

const HomeProducts = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return <div></div>;
};

export default HomeProducts;
