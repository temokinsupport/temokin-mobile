import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

export default function Testimonials() {
  return (
    <div className="testimonials --bg-3 position-relative" data-scroll-section>
      <Container className="--max">
        <Row>
          <Col>
            <h1 className="--title" data-scroll data-scroll-speed="2">
              Testimonials
            </h1>
          </Col>
        </Row>
        <Row className="testimonial">
          <div className="testimonial__client client">
            <h3 className="client__label testimonial__label">Client:</h3>
            <div className="client__content">
              <div className="client__image">
                <Image
                  className=""
                  fluid
                  src={require("../../../assets/images/awards/jkr.png").default}
                />
              </div>
              <p className="client__name">Jabatan Kerja {"\n"} Raya Malaysia</p>
            </div>
          </div>
          <div className="testimonial__scope scope">
            <h3 className="scope__label testimonial__label">
              {" "}
              Scope of Project:{" "}
            </h3>
            <p className="scope__content">
              ROADWAYS AND BRIDGE CONSTRUCTION <span>(DESIGN & BUILT)</span>
            </p>
          </div>
          <hr />
          <div className="testimonial__message message">
            <p className="message__content">
              “GENERALLY THE OVERALL PERFORMANCE HAS BEEN EXCELLENT”
            </p>
          </div>
          <hr />

          <div className="testimonial__sender sender">
            <h4 className="sender__name">IR. HJ. OTHMAN IBRAHIM</h4>
            <h5 className="sender__position">
              <span>
                SENIOR GENERAL MANAGER OF {"\n"} CONSTRUCTION, SPECIAL PROJECT
                UNIT 1,
              </span>
              <span>ROADWORKS DIVISION, JKR {"\n"} HEADQUARTERS MALAYSIA.</span>
            </h5>
          </div>
        </Row>
      </Container>
      <Image
        className="svg svg--4"
        fluid
        src={
          require("../../../assets/images/awardsandachievements/svg-4.svg")
            .default
        }
      />
      <div className="testimonial-bg" />
    </div>
  );
}
