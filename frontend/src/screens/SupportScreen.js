import React from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, ListGroup, Card, Button, Form } from 'react-bootstrap'

const SupportScreen = () => {
  return (
    <div>
      <Link className='btn btn-light my-3' to='/'>
        {' '}
        Go Back
      </Link>

      <>
        <Row>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Talk to Us</h2>
                <Form>
                  <Form.Group controlId='email'>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type='email'></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='comment'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as='textarea' row='3'></Form.Control>
                  </Form.Group>
                  <Button type='submit' variant='primary'>
                    Submit
                  </Button>
                </Form>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>Contact Us</h3>
              </ListGroup.Item>

              <ListGroup.Item>Email: notReal@gmail.com</ListGroup.Item>
              <ListGroup.Item>Phone: 555-555-5555</ListGroup.Item>
              <ListGroup.Item>
                <h4>Address</h4>
                666 Wrong Street, Anaheim, GA 55555
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Connect with us on social media:</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <i
                        style={{ cursor: 'pointer' }}
                        class='fab fa-facebook fa-2x'
                      ></i>
                    </Col>
                    <Col>
                      <i
                        style={{ cursor: 'pointer' }}
                        class='fab fa-twitter-square fa-2x'
                      ></i>
                    </Col>
                    <Col>
                      <i
                        style={{ cursor: 'pointer' }}
                        class='fab fa-youtube-square fa-2x'
                      ></i>
                    </Col>
                    <Col>
                      <i
                        style={{ cursor: 'pointer' }}
                        class='fab fa-linkedin fa-2x'
                      ></i>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    </div>
  )
}

export default SupportScreen
