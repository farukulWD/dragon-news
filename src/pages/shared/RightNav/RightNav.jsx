import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png"

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <div>
        <Button className="mb-2" variant="outline-primary">
          {" "}
          <FaGoogle /> Login with Google
        </Button>{" "}
        <Button variant="outline-secondary">
          {" "}
          <FaGithub /> Login with Github
        </Button>{" "}
      </div>
      <div className="my-3">
        <h4 className="">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item> < FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item>< FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item> < FaInstagram /> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Qzone></Qzone>
      </div>
      <div  className="position-relative mx-4">
        <img src={bg} alt="" />
        <div className="position-absolute mt-4 top-0 left-0">
            <div className="mx-auto text-center ">
            <h4 className="text-white fw-bold">Create an Amazing Newspaper</h4>
            </div>
            <div className="text-center px-4 my-5">
                <p className="text-white">
                Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
