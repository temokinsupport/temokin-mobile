import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function WeDig() {
  return (
    <div className="--container-8" data-scroll-section>
      <Image
        className="svg svg--5"
        src={require("../../../assets/images/aboutus/Shapes-01.svg").default}
      />
      <Image
        className="svg svg--5"
        src={require("../../../assets/images/aboutus/Shapes-02.svg").default}
      />
      <Container className="d-flex h-100 justify-content-center align-items-center">
        <Row>
          <Col>
            <h1 className="--title">We Dig</h1>
            <p className="--desc">
              More than just our values, we dig is a tribute <br />
              to our early pipe jacking and earthworks days,
              <br />
              and it serves as a constant reminder of how <br />
              even the toughest journeys can lead to the <br />
              most rewarding of destinations. and trust us, <br />
              digging is as tough as it gets.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
