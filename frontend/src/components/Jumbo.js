import React from 'react'
import AboutUsModal from './AboutUsModal'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import { withRouter } from 'react-router-dom'
const Jumbo = () => {
  let styles = {
    color: 'white',
  }

  return (
    <>
      <Jumbotron style={styles} className='jumbo-bg'>
        {/* <img
            alt=''
            src='./logo.svg'
            width='200'
            height='200'
            className='d-inline-block align-top'
          />{' '} */}

        <div style={styles} className='text-center '>
          <h1 className='jumbo-h1 text-capitalize font-weight-bold '>
            Welcome to EV-Wheels
          </h1>
          <h4 className='jumbo-h4 '>
            Find the best personal transport devices on the Web!
          </h4>
          <AboutUsModal />
        </div>
      </Jumbotron>
    </>
  )
}

export default Jumbo
