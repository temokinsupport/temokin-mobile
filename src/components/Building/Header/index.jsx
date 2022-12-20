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
              style={{
                position: "absolute",
                width: "30vw",
                left: "-19%",
                top: "18%",
              }}
              src={require("../../../assets/images/building/left.png").default}
            />
            <Container className="--max" style={{ "margin-top": "15vw" }}>
              <Row>
                <Col md={12}>
                  <h1 className="--title">BUILDING</h1>
                </Col>
                <Col md={12}>
                  <p className="--desc">
                    As a builder, we are only as successful as the {"\n"}
                    milestones that we’ve built. {"\n"}
                    Here, we would like to share with you some {"\n"}
                    of the work that proudly carry the {"\n"}
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
