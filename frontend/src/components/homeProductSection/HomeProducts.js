import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import { listTopProducts } from '../../actions/productActions';

import './homeProduct.css';

const HomeProducts = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return (
    <div className='product-container'>
      {loading ? (
        <Loader />
      ) : (
        products
          .filter((p, index) => index <= 3)
          .map((product) => (
            <div className='product-section' key={product._id}>
              <img src={product.image} alt={product.name} />
              <div className='product-text'>
                <h2 className='product-name'>{product.name}</h2>
                <h3 className='product-price'>{product.price}</h3>
              </div>
            </div>
          ))
      )}
    </div>
  );
};
export default HomeProducts;
