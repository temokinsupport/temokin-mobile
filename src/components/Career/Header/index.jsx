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
          src={
            require("../../../assets/images/landacquisition/svg-2.svg").default
          }
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
          className="svg svg--6"
          src={
            require("../../../assets/images/landacquisition/svg-6.svg").default
          }
        />
        <Container className="--max">
          <Row>
            <Col>
              <h1 className="--title" data-scroll id="header-text">
                JOIN OUR TEAM
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center text-header">
            <Col md="8" sm="12" className="pb-5 mb-5 text-header__desc">
              From our humble start, we have grown tremendously and now we are
              looking to go <br />
              next level. We have a no-discrimination policy and believe in
              attitude, not so much <br />
              aptitude. Of course, hard work is rewarded, and excellence is our
              lifestyle. If <br />
              you're energetic, eager to learn and a team player, send us your
              resume and you <br /> could be on your way to a creer with
              Temokin.
            </Col>
            <Col md="12" sm="12" className="mb-4">
              <Row className="row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <Col md="3" className="text-end">
                  <Form.Label column className="land-label text-end">
                    NAME
                  </Form.Label>
                </Col>
                <Col md="7">
                  <Form.Control className="land-form" value="" plaintext />
                </Col>
                <Col md="3" className="text-end">
                  <Form.Label column className="land-label text-end">
                    CONTACT NUMBER
                  </Form.Label>
                </Col>
                <Col md="7">
                  <Form.Control className="land-form" value="" plaintext />
                </Col>
                <Col md="3" className="text-end">
                  <Form.Label column className="land-label text-end">
                    EMAIL ADDRESS
                  </Form.Label>
                </Col>
                <Col md="7">
                  <Form.Control className="land-form" value="" plaintext />
                </Col>

                <Col md="3" className="text-end">
                  <Form.Label column className="land-label text-end">
                    MESSAGE
                  </Form.Label>
                </Col>
                <Col md="7">
                  <Form.Control
                    className="career-form-textarea"
                    value=""
                    as="textarea"
                    rows={10}
                    cols={10}
                  />
                </Col>

                <Col md="3" className="text-end d-flex align-items-center">
                  <Form.Label column className="land-label text-end">
                    UPLOAD RESUME
                  </Form.Label>
                </Col>
                <Col md="7">
                  <div className="text-start">
                    <Button className="career-choosefile-button">
                      CHOOSE FILE
                    </Button>
                    <span className="career-choosefile-text">
                      *PDF FORMAT ONLY, MAXIMUM FILE SIZE IS 10MB
                    </span>
                  </div>
                </Col>
                <Col
                  md={{ span: 7, offset: 3 }}
                  className="text-start mt-5 pt-5 land-submit__container"
                >
                  <Button className="land-submit">SUBMIT</Button>
                </Col>
              </Row>
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
