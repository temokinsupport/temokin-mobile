import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";

export default function Join() {
  const history = useHistory();

  return (
    <Container className="--max join-our-team position-relative">
      <Image
        className="svg svg--4"
        src={require("../../../assets/images/teamleaders/svg-3.svg").default}
      />
      <Row>
        <Col
          xs={12}
          className="join-image d-flex justify-content-center position-relative"
        >
          <Image
            className="svg svg--3"
            src={
              require("../../../assets/images/teamleaders/Shape.svg").default
            }
          />
          <Image
            className="join-image__image"
            src={
              require("../../../assets/images/teamleaders/Image 78.png").default
            }
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center text-center">
          <h1 data-scroll data-scroll-speed="1" className="--title">
            Join Our Team
          </h1>
          <h6 data-scroll data-scroll-speed="1" className="--sub-title">
            Like What <br />
            You See? Join Us!
          </h6>
          <p data-scroll data-scroll-speed="2" className="--desc">
            From our humble start, we have grown tremendously and <br />
            now we are looking to go next level. We have <br />a no-
            discrimination policy and believe in attitude, not so <br /> much
            aptitude. Of course, hard work is rewarded, and <br />
            excellence is our lifestyle. If you're energetic, eager to learn{" "}
            <br />
            and a team player, send us your resume and you could be on
            <br /> your way to a career with Temokin Holdings.
          </p>
          <Button
            data-scroll
            data-scroll-speed="2"
            className="--btn-send-resume"
          >
            <NavLink to="/career">Send Resume</NavLink>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
