import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/split.min.js";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import Navigation from "../../Navigation";
import Footer from "../../Footer";

export default function Header() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });

    gsap.to(splitParent.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <div className="--bg-1" data-scroll-section>
      <Navigation />
      <div className="position-relative">
        <Image
          className="svg svg--1"
          src={
            require("../../../assets/images/landacquisition/svg-1.svg").default
          }
        />
        <Image
          className="svg svg--2"
          src={require("../../../assets/images/career/1041.svg").default}
        />
        <Image
          className="svg svg--3"
          src={
            require("../../../assets/images/landacquisition/svg-3.svg").default
          }
        />
        <Image
          className="svg svg--4"
          src={
            require("../../../assets/images/landacquisition/svg-4.svg").default
          }
        />
        <Image
          className="svg svg--5"
          src={
            require("../../../assets/images/landacquisition/svg-5.svg").default
          }
        />
        <Image
          className="svg"
          style={{ width: "90vw", height: "40vw", bottom: "-1%", left: "-15%" }}
          src={require("../../../assets/images/career/Shapes-1.png").default}
        />
        <Container className="--max">
          <Row>
            <Col>
              <h1 className="--title" data-scroll id="header-text">
                JOIN OUR
              </h1>

              <h1 className="--title" data-scroll id="header-text">
                TEAM
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center text-header">
            <Col md="8" sm="12" className="pb-5 mb-5 text-header__desc">
              From our humble start, we have grown <br />
              tremendously and now we are looking to <br />
              go next level. We have a no-discrimination <br />
              policy and believe in attitude, not so much <br />
              aptitude. Of course, hard work is rewarded, <br />
              and excellence is our lifestyle. If you're <br />
              energetic, eager to learn and a team player, <br />
              send us your resume and you could be on <br />
              your way to a career with Temokin.
            </Col>
            <Col md="12" sm="12" className="mb-4">
              <Col
                md="3"
                style={{
                  "text-align": "left",
                  "font-size": "12px",
                  "margin-top": "5vw",
                  color: "#283A97",
                  "font-weight": "bold",
                }}
              >
                <Form.Label>NAME</Form.Label>
              </Col>
              <Col md="7">
                <Form.Control
                  className="land-form"
                  plaintext
                  style={{ height: "10vw" }}
                />
              </Col>
              <Col
                md="3"
                style={{
                  "text-align": "left",
                  "font-size": "12px",
                  "margin-top": "5vw",
                  color: "#283A97",
                  "font-weight": "bold",
                }}
              >
                <Form.Label>CONTACT NUMBER</Form.Label>
              </Col>
              <Col md="7">
                <Form.Control
                  className="land-form"
                  plaintext
                  style={{ height: "10vw" }}
                />
              </Col>
              <Col
                md="3"
                style={{
                  "text-align": "left",
                  "font-size": "12px",
                  "margin-top": "5vw",
                  color: "#283A97",
                  "font-weight": "bold",
                }}
              >
                <Form.Label>EMAIL ADDRESS</Form.Label>
              </Col>
              <Col md="7">
                <Form.Control
                  className="land-form"
                  plaintext
                  style={{ height: "10vw" }}
                />
              </Col>

              <Col
                md="3"
                style={{
                  "text-align": "left",
                  "font-size": "12px",
                  "margin-top": "5vw",
                  color: "#283A97",
                  "font-weight": "bold",
                }}
              >
                <Form.Label>MESSAGE</Form.Label>
              </Col>
              <Col md="7">
                <Form.Control
                  className="career-form-textarea"
                  style={{ height: "30vw" }}
                  as="textarea"
                  rows={10}
                  cols={10}
                />
              </Col>

              <Col
                md="3"
                style={{
                  "text-align": "left",
                  "font-size": "12px",
                  "margin-top": "5vw",
                  color: "#283A97",
                  "font-weight": "bold",
                }}
              >
                <Form.Label column>UPLOAD RESUME</Form.Label>
              </Col>
              <Col md="7">
                <div className="text-start">
                  <Button className="career-choosefile-button">
                    CHOOSE FILE
                  </Button>
                  <br />
                  <span className="career-choosefile-text">
                    *PDF FORMAT ONLY, MAXIMUM FILE SIZE IS 10MB
                  </span>
                </div>
              </Col>
              <Col
                md={{ span: 7, offset: 3 }}
                className="text-start pt-5 land-submit__container"
                style={{ "margin-bottom": "25vw" }}
              >
                <Button className="land-submit">SUBMIT</Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      {/* <div className="header-bg" data-scroll data-scroll-speed="-3" /> */}
      {/* <div className="header-shapes" data-scroll data-scroll-speed="-1" /> */}
    </div>
  );
}
