import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const AboutUsModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant='light'
        onClick={() => setShow(true)}
        className=' font-weight-bold'
      >
        About US{' '}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        aria-labelledby='about-us'
        size='xl'
      >
        <Modal.Header closeButton>
          <Modal.Title id='about-us'>ABOUT EV-Wheels</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            EV-Wheels have been involved in eletric personal transporter since
            2016. We only offer products which we personally tested. We work
            closely with our suppliers to offer the best products to our
            customers.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AboutUsModal;
