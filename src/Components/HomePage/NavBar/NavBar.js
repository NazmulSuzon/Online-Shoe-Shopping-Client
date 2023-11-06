import React from "react";
import "./NavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../../assets/Binova.png';

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="logo-space">
        <img className="logo" src={logo} alt="" />
      </div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Shoe Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div></div>
    </div>
  );
};

export default NavBar;
