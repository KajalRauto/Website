import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navbar1 = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="bg-test p-4"
      >
        <Container className="d-flex">
          <Navbar.Brand href="/">Hehe</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
            <NavLink to={`/`} className="btn">
                Home
              </NavLink>
              <NavLink to={`/about`} className="btn">
                About
              </NavLink>
              <NavLink to={`/contact`} className="btn">
                Contact
              </NavLink>
              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
