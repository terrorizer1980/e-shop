import React from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { withRouter } from 'react-router-dom'
const Jumbo = () => {
  let styles = {
    color: 'white',
    backgroundImage: '../../public/images/ex.jpg',
  }
  return (
    <>
      <Jumbotron style={styles} className='jumbo-bg'>
        <Container>
          {/* <img
            alt=''
            src='./logo.svg'
            width='200'
            height='200'
            className='d-inline-block align-top'
          />{' '} */}

          <div style={styles} className='text-center '>
            <h1 className='text-capitalize font-weight-bold'>
              Welcome to EV-Wheels
            </h1>
            <h4>Find the best personal transport devices on the Web!</h4>
          </div>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Jumbo
