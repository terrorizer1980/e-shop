import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import './homeProduct.css';

const HomeProducts = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  return <div></div>;
};

export default HomeProducts;
