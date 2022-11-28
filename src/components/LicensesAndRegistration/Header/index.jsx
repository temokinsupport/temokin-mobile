import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";

export default function Header() {
  return (
    <div className="--bg-1" data-scroll-section>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <h1 data-scroll className="--title">
              Licenses <br /> and Registrations
            </h1>
            <p data-scroll className="--desc">
              These licenses and certifications specify <br />
              the range of our capabilities, allowing us <br />
              to take on large-scale, complex projects <br />
              with the approval of the authorities.
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
