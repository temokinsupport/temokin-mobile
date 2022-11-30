import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Mission() {
  return (
    <div className="--container-3" data-scroll-section>
      <Image
        className="svg svg--4"
        src={require("../../../assets/images/aboutus/svg-3.svg").default}
      />
      <Container className="d-flex align-items-center justify-content-center">
        <Row>
          <Col className="vision-content">
            <Image
              // data-scroll-speed="-1"

              data-scroll
              src={
                require("../../../assets/images/aboutus/vision-bg.png").default
              }
              className="vision-bg"
            />
            <h2
              data-scroll
              // data-scroll-speed="-1"
              className="--title"
            >
              OUR MISSION
            </h2>
            <p
              data-scroll
              // data-scroll-speed="-1"
              className="--sub-title"
            >
              To deliver outstanding work <br />
              consistently, <br /> punctually and with <br />
              absolute integrity.
            </p>
          </Col>
        </Row>
      </Container>
      <Image
        className="svg svg--4"
        src={require("../../../assets/images/aboutus/svg-3.svg").default}
      />
      {/* <div className="mission-bg" /> */}
    </div>
  );
}
