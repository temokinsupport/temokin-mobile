import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import Navigation from "../../Navigation";
import { NavLink } from "react-router-dom";

export default function AboutTemokin() {
  // TOGGLE CLASS
  const [carouselIndex, setCarouselIndex] = useState(0);

  const controlCarousel = (index) => {
    setCarouselIndex(index);
  };

  useEffect(() => {
    console.log(carouselIndex);
  }, [carouselIndex]);

  const buildProjectLists = [
    {
      id: 0,
      img: require("../../../assets/images/aboutus/About_Icon-AccurateCost.png")
        .default,
      caption: "Accurate \n Cost \n Control",
    },
    {
      id: 1,
      img: require("../../../assets/images/aboutus/About_Icon-LowOver.png")
        .default,
      caption: "Low Over \n Heads",
    },
    {
      id: 2,
      img: require("../../../assets/images/aboutus/About_Icon-AdvancedScheduling.png")
        .default,
      caption: "Advance \n Scheduling",
    },
    {
      id: 3,
      img: require("../../../assets/images/aboutus/About_Icon-TimelyClose.png")
        .default,
      caption: "A Timely \n Close Out",
    },
  ];
  return (
    <section className="--header-container" data-scroll-section>
      <Navigation />
      <h1 className="section-title">Our Story</h1>
      <div className="our-story">
        <Carousel
          interval={7000}
          activeIndex={carouselIndex}
          onSelect={controlCarousel}
          onSlide={controlCarousel}
          fade
        >
          <Carousel.Item className={`carousel-item--0 ${0 === carouselIndex}`}>
            <Image
              className="background"
              src={
                require("../../../assets/images/aboutus/BG-ABOUT-01.png")
                  .default
              }
            />

            <Carousel.Caption>
              <p className="description">
                THEY SAY EVERY GREAT STORY HAS A HUMBLE {" \n"}
                BEGINNING AND OURS IS NO EXCEPTION. {" \n"}
                ESTABLISHED IN 1989, WE SECURED OUR FIRST {" \n"}
                CONTRACT IN INFRASTRUCTURE AND BUILDINGS {" \n"}
                WORK IN EARLY 1990. THEN IN 1993, WE GREW IN {" \n"}
                OUR JOURNEY DELIVERING HIGH-QUALITY PIPE {" \n"}
                JACKING AND EARTHWORKS WITH PROMINENT {" \n"}
                CLIENTS BY DELIVERING AHEAD OF TIME WITH
                {" \n"}
                QUALITY AS OUR FIRST PRIORITY. IN 1997, WE
                {" \n"}
                DELIVERED MALAYSIA’S FIRST-EVER MICRO-
                {" \n"}
                TUNNELLING PROJECT THAT MANAGED TO GAIN {" \n"}
                RECOGNITION THROUGHOUT THE INDUSTRY FROM {" \n"}
                THERE WE PACED FURTHER BY DELIVERING MIDDLE
                {" \n"} RING ROAD SEREMBAN PROJECT FROM 2002 TO 2017.
              </p>
              <NavLink
                to="/land-acquisition" 
                variant="light"
                className="grow-with-us"
              >
                GROW WITH US
              </NavLink>
              <div className="carousel-indicators custom">
                <li
                  className={`${0 === carouselIndex ? "active" : ""}`}
                  onClick={() => controlCarousel(0)}
                ></li>
                <li
                  className={`${1 === carouselIndex ? "active" : ""}`}
                  onClick={() => controlCarousel(1)}
                ></li>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={`carousel-item--1 ${1 === carouselIndex}`}>
            <Image
              className="background"
              src={
                require("../../../assets/images/aboutus/Group 212.jpg").default
              }
            />
            <Carousel.Caption>
              <p className="description">
                FROM A SOLID FOUNDATION, WE EXPANDED TO {"\n"}BECOME THE PRE-EMINENT TURKEY CIVIL{"\n"} ENGINEERING AND PROPERTY conglomerate
                that{"\n"} the nation and the world have come to know{"\n"} and
                trust today.
              </p>
              <p className="description">
                At heart, we are a construction company with{"\n"} an integrated
                engineering division, which {"\n"} allows us to undertake any
                design-and-build {"\n"} projects with.
              </p>
              <div className="features">
                {buildProjectLists.map((projectLists) => (
                  <div className="feature" key={projectLists.id}>
                    <Image src={projectLists.img} />
                    <p className="feature-name">{projectLists.caption}</p>
                  </div>
                ))}
              </div>
              <div className="carousel-indicators custom">
                <li
                  className={`${0 === carouselIndex ? "active" : ""}`}
                  onClick={() => controlCarousel(0)}
                ></li>
                <li
                  className={`${1 === carouselIndex ? "active" : ""}`}
                  onClick={() => controlCarousel(1)}
                ></li>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="overlay-shape1" />
      </div>
      {/* <div className="slideshow">
        <input
          id="button-1"
          type="radio"
          name="radio-set"
          className="selector-1"
          checked="checked"
        />
        <label for="button-1" className="button-label-1"></label>

        <input
          id="button-2"
          type="radio"
          name="radio-set"
          className="selector-2"
        />
        <label for="button-2" className="button-label-2"></label>

        <div className="content">
          <div className="parallax-bg"></div>
          <div className="parallax-bg2"></div>
          <ul className="slider" data-scroll data-scroll-speed="-1">
            <li>
              <div className="slider-content">
                <div className="--about-content">
                  <Container className="--max">
                    <Row>
                      <Col md={2}>
                        <h1 className="--title">Our Story</h1>
                      </Col>
                      <Col md={5} className="d-flex flex-column">
                        <br />

                        <p className="--desc">
                          THEY SAY EVERY GREAT STORY HAS A HUMBLE {" \n"}
                          BEGINNING AND OURS IS NO EXCEPTION. {" \n"}
                          ESTABLISHED IN 1989, WE SECURED OUR FIRST {" \n"}
                          CONTRACT IN INFRASTRUCTURE AND BUILDINGS {" \n"}
                          WORKS IN EARLY 1990. THEN IN 1993, WE GREW IN {" \n"}
                          OUR JOURNEY DELIVERING HIGH QUALITY PIPE {" \n"}
                          JACKING AND EARTH WORKS WITH PROMINENT {" \n"}
                          CLIENTS BY DELIVERING AHEAD OF TIME AND WITH
                          {" \n"}
                          QUALITY AS OUR FIRST PRIORITY. IN 1997, WE
                          {" \n"}
                          DELIVERED MALAYSIA’S FIRST EVER MICRO-
                          {" \n"}
                          TUNNELLING PROJECT THAT MANAGED TO GAIN {" \n"}
                          RECOGNITION THROUGHOUT THE INDUSTRY FROM {" \n"}
                          THERE WE PACED FURTHER BY DELIVERING MIDDLE
                          {" \n"} RING ROAD SEREMBAN PROJECT FROM 2002 TO 2017.
                        </p>
                        <NavLink
                          to="/contact-us"
                          variant="light"
                          className="--grow-with-us"
                        >
                          GROW WITH US
                        </NavLink>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </li>
            <li>
              <div className="slider-content">
                <div className="--about-content">
                  <Container className="--max">
                    <Row>
                      <Col md={2}>
                        <h1 className="--title">Our Story</h1>
                      </Col>
                      <Col md={5}>
                        <p className="--desc">
                          FROM A SOLID FOUNDATION, WE EXPANDED TO BECOME THE
                          PRE- <br />
                          EMINENT TURKEY CIVIL ENGINEERING AND PROPERTY <br />
                          conglomerate that the nation and the world have come{" "}
                          <br />
                          to know and trust today. <br />
                          <br />
                          At heart, we are a construction company with an <br />
                          integrated engineering division, which allows us to{" "}
                          <br />
                          undertake any design-and-build projects with.
                        </p>
                        <div className="--build-project-list">
                          {buildProjectLists.map((projectLists) => (
                            <figure key={projectLists.id}>
                              <Image src={projectLists.img} />
                              <figcaption>
                                <span>{projectLists.caption}</span>
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
}
