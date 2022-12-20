import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";

export default function Header() {
  return (
    <div className="--bg-1">
      <Image
        className="svg svg--1"
        fluid
        src={
          require("../../../assets/images/licensesandregistrations/svg-1.svg")
            .default
        }
      />
      <Image
        className="svg svg--2"
        fluid
        src={
          require("../../../assets/images/licensesandregistrations/svg-2.svg")
            .default
        }
      />
      
      <Navigation />
      <Container>
        <Row>
          <Col>
            <h1 className="--title">
              Licenses and <br /> Registrations
            </h1>
            <p className="--desc">
              These licenses and certifications
              <br /> specify the range of our capabilities, <br /> allowing us
              to take on large-scale,
              <br /> complex projects with the approval of <br />
              the authorities.
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
            require("../../../assets/images/licensesandregistrations/hero-bg.png")
              .default
          }
        />
      </div>
    </div>
  );
}
