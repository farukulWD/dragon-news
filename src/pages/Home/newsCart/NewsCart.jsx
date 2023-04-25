import React from "react";
import { Button, Card } from "react-bootstrap";

const NewsCart = ({ news }) => {
  const { _id, title, author, total_view, thumbnail_url, others_info } = news;

  return (
    <>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewsCart;
