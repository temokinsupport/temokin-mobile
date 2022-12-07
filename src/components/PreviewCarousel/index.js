import React from "react";
import { Carousel } from "react-bootstrap";
import "../../assets/styles/previewcarousel.scss";

function PreviewCarousel({ slides }) {
  return (
    <Carousel interval={7000} className="preview-carousel" indicators fade>
      {slides.map((item) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images${item}`).default}
              alt="First slide"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default PreviewCarousel;
