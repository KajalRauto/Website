import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Vmv } from "./Include/Vmv";
import { Footer } from "../Includes/Footer";
import { Navbar1 } from "../Includes/Navbar"
export const About = () => {
  return (
    <div>
      <Navbar1 />
      <div className="p-4 bg-custom">
      <Container >
        <Row>
          <Col md={8}>
            <div className="my-auto"><h4>About Us</h4></div>
          </Col>
          <Col md={4}>
          <div className="my-auto"><h6 className="float-end">Home/About</h6></div>
          </Col>
        </Row>
      </Container>
      </div>
      <div className="mx-5">
        <h3  className="my-2" style={{color:"red"}}>Our Company</h3>
        <div className="underline my-2"></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      
      </div>
        
    <div className="mx-5" >
    <Vmv />
    
    </div>
    <Footer />
    </div>
  );
};
