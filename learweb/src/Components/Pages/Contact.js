import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Footer } from "../Includes/Footer";
import { Navbar1 } from "../Includes/Navbar"
export const Contact = () => {
  return (
    <div>
      <Navbar1 />
      <div className="p-4 bg-custom">
        <Container>
          <Row>
            <Col md={8}>
              <div className="my-auto">
                <h4>Contact Us</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="my-auto">
                <h6 className="float-end">Home/Contact</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="p-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Text>
              <Row className="p-5">
                <Col md={6}>
                  <h5>Contact Form</h5>
                  <hr/>
                  <div>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Type your message..."
                        />
                      </Form.Group>
                      <Button variant="primary shadow" type="submit">
                        Send Message
                      </Button>
                    </Form>
                  </div>
                </Col>
                <Col md={6} className="border-start">
                <h3 style={{color:"red"}}>Contact Information</h3>
                
                <div className="underline my-2"></div>
          <div><p className='text-white mb-1'></p>#121, Berhampur, Odisha, India</div>
          <div><p className='text-white mb-1'></p>+91 9439XXXXXX</div>
          <div><p className='text-white mb-1'></p>+91 9439XXXXXX</div>
          <div><p className='text-white mb-1'></p>email@domain.com</div>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};
