import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/split.min.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";

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
      <Container className="--max">
        <Row className="justify-content-center">
          <Col md="7">
            <h1 className="--title gnopopd" data-scroll id="header-text">
              GENERAL NOTICE ON PROCESSING OF PERSONAL DATA
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="7" sm="12">
            <div className="--subContent">
              We treat and view your personal data seriously.
              <br />
              This Personal Data & Information Notice is issued to all our
              valued <br /> customers / prospective customers, pursuant to the
              requirements of <br /> the Malaysian Personal Data Protection Act
              (2010).
              <br />
              <br />
              In the course pf your dealings with TEMOKIN [meaning TEMOKIN, and
              <br /> the holding, subsidiary and/or related companies (as
              defined by the <br />
              Companies Act 1965) of TEMOKIN] as our valued customer / <br />
              prospective customer, we may request that your provide data and
              <br />
              information about yourself ("Personal Data") to enable us to enter
              into <br />
              transactions with you or to deliver the necessary notices,
              services and/ <br />
              or products in connection with our business.
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header-bg" data-scroll data-scroll-speed="-3" />
      {/* <div className="header-shapes" data-scroll data-scroll-speed="-1" /> */}
    </div>
  );
}
