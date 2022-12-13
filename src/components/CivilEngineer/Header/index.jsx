import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../Navigation";

export default function Header() {
  return (
    <div className="--bg-1">
      <Navigation />
      <Container>
        <Row>
          <Col>
            <h1 className="--title" data-scroll data-scroll-speed="2">
              Our Showcase
            </h1>
            <p className="--desc" data-scroll data-scroll-speed="2">
              As a builder, we are only as successful as the <br /> milestones
              that we've built. <br />
              Here, we would like to share with you some <br />
              of the work that proudly carry the <br />
              TEMOKIN badge
            </p>
          </Col>
        </Row>
      </Container>
      <div className="header-shapes" />
    </div>
  );
}
