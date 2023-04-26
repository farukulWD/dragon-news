import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="py-3">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={50}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...... Match Highlights: Germany vs
          Spain — as it happened ! Match Highlights: Germany vs Spain as.......
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link  className="text-decoration-none px-2 py-1" to="/">Home</Link>
              <Link className="text-decoration-none px-2 py-1"  to="#">About</Link>
              <Link className="text-decoration-none px-2 py-1"  to="#">Carrier</Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary" >Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
