import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";
import slide2 from "../../../Images/slider-1.jpg";
import slide1 from "../../../Images/slider-2.jpg";


function Banner() {
  return (
    <Carousel id="home">
      <Carousel.Item>
        <img
          className="d-block w-100 banner__img"
          src={slide2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>
            EXTREME
            <br /> MOTOR BIKE
            <br /> EXPERIENCE
          </h1>
          <p>
            become the world leader on the internet for the sport of biking.
          </p>
          <Link to="/shop">
            <Button className="primary__button mt-3" variant="primary">
              Explore
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner__img"
          src={slide1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>
            BEST
            <br /> CYCLING
            <br /> EXPERIENCE
          </h1>
          <p>
            become the world leader on the internet for the sport of cycling.
          </p>
          <Link to="/shop">
            <Button className="primary__button mt-3" variant="primary">
              Explore
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
