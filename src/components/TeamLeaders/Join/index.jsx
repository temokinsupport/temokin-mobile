import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";

export default function Join() {
  const history = useHistory();

  return (
    <Container className="--max">
      <Row>
        <Col className="join-image">
          <Image
            src={
              require("../../../assets/images/teamleaders/Image 78.png").default
            }
          />
        </Col>
        <Col>
          <h1 data-scroll data-scroll-speed="1" className="--title">
            Join Our Team
          </h1>
          <h6 data-scroll data-scroll-speed="1" className="--sub-title">
            Like What <br />
            You See? Join Us!
          </h6>
          <p data-scroll data-scroll-speed="2" className="--desc">
            From our humble start, we have grown tremendously and <br />
            now we are looking to go next level. We have a no- <br />
            discrimination policy and believe in attitude, not so much <br />
            aptitude. Of course, hard work is rewarded, excellence is <br />
            our lifestyle. If you're energetic, eager to learn and a team <br />
            player, send us your resume and you could be on your way to <br />a
            career with Temokin Holdings.
          </p>
          <Button
            onClick={() => history.push("/career")}
            data-scroll
            data-scroll-speed="2"
            className="--btn-send-resume"
          />
        </Col>
      </Row>
    </Container>
  );
}
