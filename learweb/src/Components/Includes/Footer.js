import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="footer bg-dark text-white mx-5">
      <Row className='p-5'>
        <Col md={4} >
          <h6>Company Information</h6>
          <hr/>
          <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </Col>
        <Col md={4} >
          <h6>Quick Links</h6>
        <hr/>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/">Blog</Link></div>
        </Col>
        <Col md={4} >
          <h6>Contact Information</h6>
          <hr/>
          <div><p className='text-white mb-1'></p>#121, Berhampur, Odisha, India</div>
          <div><p className='text-white mb-1'></p>+91 9439XXXXXX</div>
          <div><p className='text-white mb-1'></p>+91 9439XXXXXX</div>
          <div><p className='text-white mb-1'></p>email@domain.com</div>
        </Col>
      </Row>
    </div>
    )
}
