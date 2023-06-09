import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button, Container, } from "react-bootstrap";
import Marquee from "react-fast-marquee";



const Header = () => {
  return (
    <Container className="py-3">
      <div className="text-center">
        <img className="img-fluid" src={logo} alt="" />
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

      
    </Container>
  );
};

export default Header;
