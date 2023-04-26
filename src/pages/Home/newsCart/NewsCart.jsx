import moment from "moment/moment";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
  const {
    _id,
    title,
    details,
    author,
    total_view,
    thumbnail_url,
    others_info,
    rating,
    image_url,
  } = news;

  return (
    <>
      <Card className="mb-3">
        <Card.Header className="d-flex align-items-center">
          <Image
            src={author?.img}
            roundedCircle
            style={{ height: "40px" }}
          ></Image>
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_date).format("DD- MM- YYYY")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}....
                <Link to={`/news/${_id}`} className="text-warning">
                  Read more
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex align-items-center">
          <div className="flex-grow-1">
            <Rating
              readonly
              placeholderRating={rating.number}
              emptySymbol={
                <FaRegStar className="text-warning"></FaRegStar>
              }
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={
                <FaStar className="text-warning"></FaStar>
              }
            />
            <span> {rating.number}</span>
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default NewsCart;
