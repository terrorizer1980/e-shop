import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import Loader from '../Loader';
import { listProductDetails } from '../../actions/productActions';
import './homeProduct.css';

const productId = [
  '5fc980adb71e3d05d84d9174',
  '5fc980adb71e3d05d84d9175',
  '5fc980adb71e3d05d84d9178',
  '5fc980adb71e3d05d84d9171',
];
const HomeProducts = ({ match, history }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails('5fc980adb71e3d05d84d9174'));
    console.log(product);
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/}`);
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                  <ListGroup.Item> Category: {product.category}</ListGroup.Item>
                </ListGroup.Item>

                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
export default HomeProducts;
