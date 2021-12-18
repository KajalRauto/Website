import React from "react";
import { Carousel } from "react-bootstrap";
import Metro from "../Images/metro.jpg"

export const Slider1 = () => {
  let sliderStyle = {
      objectfit: "cover",
      objectposition: "center",
      height: "60vh",
      overflow: "hidden"
  };
  return (
    <div className="Container p-4">
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Metro}
            alt="First slide"
            style = {sliderStyle}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Metro}
            alt="Second slide"
            style = {sliderStyle}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Metro}
            alt="Third slide"
            style = {sliderStyle}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
