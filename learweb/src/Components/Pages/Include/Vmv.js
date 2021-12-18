import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Vmv = () => {
    return (
        <div className="Container p-4">
            <Row  className="bg-c-light border-top">
                <Col md={12} className='Company'>
                <h3 style={{color:"red"}}> Our Vision, Mission and Values</h3>
                    <div className="underline1 mx-auto my-2"></div>
                </Col>
                <Col md={4}>
                    <h6>Our Vision</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>                
                </Col>
                <Col md={4}>
                <h6>Our Mission</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>                
                </Col>
                <Col md={4}>
                <h6>Our Values</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Col>
            </Row>
        
      </div>
    )
}
