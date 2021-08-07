import React from 'react';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Message from '../../components/Message';
import Rating from '../../components/Rating';

import './review.css';
const Review = ({
  product,
  errorProductReview,
  userInfo,
  submitHandler,
  setRating,
  setComment,
  comment,
  rating,
}) => {
  return (
    <Row>
      <Col md={12}>
        <h2>Reviews</h2>
        {product.reviews.length === 0 && <Message>No Reviews</Message>}
        <ListGroup variant='flush'>
          {product.reviews.map((review) => (
            <ListGroup.Item key={review._id}>
              <strong>{review.name}</strong>
              <Rating value={review.rating} />

              <p>{review.createdAt.substring(0, 10)}</p>
              <p>{review.comment}</p>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <h2>Write a Customer Review</h2>
            {errorProductReview && (
              <Message variant='danger'>{errorProductReview}</Message>
            )}
            {userInfo ? (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='rating'>
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    as='select'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value=''>Select...</option>
                    <option value='1'>1 - Poor</option>
                    <option value='2'>2 - Fair</option>
                    <option value='3'>3 - Good</option>
                    <option value='4'>4 - Very Good</option>
                    <option value='5'>5 - Excellent</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='comment'>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as='textarea'
                    row='3'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button type='submite' variant='primary'>
                  Submit
                </Button>
              </Form>
            ) : (
              <Message>
                Please <Link to='/login'>Sign In </Link>
                to write a review
              </Message>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Review;
