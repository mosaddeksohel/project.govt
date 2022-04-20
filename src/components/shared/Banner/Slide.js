import React from "react";
import { Carousel } from "react-bootstrap";

const Slide = ({ banner }) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner.image} alt="First slide" />
          <Carousel.Caption>
            <h3>{banner.banner_title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
