import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";

export default function Header() {
  return (
    <div className="--bg-1" data-scroll-section>
      <Navigation />
      <Image
        className="svg svg--1"
        fluid
        src={
          require("../../../assets/images/awardsandachievements/svg-1.svg")
            .default
        }
      />
      <Container>
        <Row>
          <Col>
            <h1 className="--title" data-scroll data-scroll-speed="1">
              Awards and Client <br />
              Survey Forms
            </h1>
            <p className="--desc" data-scroll data-scroll-speed="1">
              Our awards and recognitions are <br /> testament to our sterling
              reputation <br /> in always delivering high-quality <br /> work on
              time.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="header-shape" />
      <div className="header-bg">
        <Image
          className=""
          fluid
          src={
            require("../../../assets/images/awardsandachievements/hero-bg.png")
              .default
          }
        />
      </div>
    </div>
  );
}
