import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";
import { NavLink } from "react-router-dom";

export default function AboutTemokin() {
  const buildProjectLists = [
    {
      id: 0,
      img: require("../../../assets/images/aboutus/About_Icon-AccurateCost.png")
        .default,
      caption: "Accurate Cost Control",
    },
    {
      id: 1,
      img: require("../../../assets/images/aboutus/About_Icon-LowOver.png")
        .default,
      caption: "Low Over Heads",
    },
    {
      id: 2,
      img: require("../../../assets/images/aboutus/About_Icon-AdvancedScheduling.png")
        .default,
      caption: "Advance Scheduling",
    },
    {
      id: 3,
      img: require("../../../assets/images/aboutus/About_Icon-TimelyClose.png")
        .default,
      caption: "A Timely Close Out",
    },
  ];
  return (
    <section className="--header-container" data-scroll-section>
      <Navigation />
      <div className="slideshow">
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

        {/* <label for="button-1" className="arrow a1"></label>
                    <label for="button-2" className="arrow a2"></label> */}

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
                      <Col md={5} className="--pl3v">
                        <br />

                        <p className="--desc">
                          THEY SAY EVERY GREAT STORY HAS A HUMBLE BEGINNING AND{" "}
                          <br />
                          OURS IS NO EXCEPTION. ESTABLISHED IN 1989, WE SECURED
                          OUR <br />
                          FIRST CONTRACT IN INFRASTRUCTURE AND BUILDINGS WORKS{" "}
                          <br />
                          IN EARLY 1990. THEN IN 1993, WE GREW IN OUR JOURNEY,{" "}
                          <br />
                          DELIVERING HIGH QUALITY PIPE JACKING AND EARTH WORKS{" "}
                          <br />
                          WITH PROMINENT CLIENTS BY DELIVERING AHEAD OF TIME AND{" "}
                          <br />
                          WITH QUALITY AS OUR FIRST PRIORITY. IN 1997, WE
                          DELIVERED <br />
                          MALAYSIA’S FIRST EVER MICRO-TUNNELLING PROJECT THAT{" "}
                          <br />
                          MANAGED TO GAIN RECOGNITION THROUGHOUT THE INDUSTRY.{" "}
                          <br />
                          FROM THERE WE PACED FURTHER BY DELIVERING MIDDLE RING{" "}
                          <br />
                          ROAD SEREMBAN PROJECT FROM 2002 TO 2017.
                        </p>
                        <br />
                        <br />
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
                      <Col md={5} className="--pl3v">
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
      </div>
      <div className="overlay-shape1" />
    </section>
  );
}
