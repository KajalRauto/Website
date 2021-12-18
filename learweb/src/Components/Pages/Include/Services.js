import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Metro from "../../Images/metro.jpg"
export const Services = () => {
  return (
    <div className="Container">
      <Row>
        <Col md={12} className="Company">
          <h3 style={{ color: "red" }}> Our Services</h3>
          <div className="underline1 mx-auto "></div>
        </Col>
        <Col md={4} className="p-5">
          <Card className="shadow p-5">
            <Card.Img variant="top" src={Metro} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/Service">Read more</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="p-5">
          <Card className="shadow p-5">
            <Card.Img variant="top" src={Metro} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/Service">Read more</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="p-5">
          <Card className="shadow p-5">
            <Card.Img variant="top" src={Metro} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/Service">Read more</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};