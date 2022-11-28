import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";

export default function HeaderBuilding() {
  return (
    <section className="--header-container" data-scroll-section>
      <Navigation />

      <div className="slideshow">
        {/* <label for="button-1" className="arrow a1"></label>
                    <label for="button-2" className="arrow a2"></label> */}

        <div className="content">
          <div className="--header-building">
            <Image
              className="--left"
              src={require("../../../assets/images/building/left.png").default}
            />
            <Container className="--max">
              <Row>
                <Col md={12}>
                  <h1 className="--title">BUILDING</h1>
                </Col>
                <Col md={12}>
                  <p className="--desc">
                    As a builder, we are only as successful as <br />
                    the milestones that we’ve built. <br />
                    <br />
                    Here, we would like to share with you <br />
                    some of the work that proudly carry the <br />
                    TEMOKIN badge.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
