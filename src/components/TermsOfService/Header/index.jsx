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
        <Row>
          <Col>
            <h1 className="--title tac" data-scroll id="header-text">
              TERMS AND
            </h1>
            <h1 className="--title tac" data-scroll id="header-text">
              CONDITIONS OF USE
            </h1>
            <h2 className="--subtitle">PLEASE READ CAREFULLY</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="12">
            <div className="--subContent">
              Welcome to our website. If you continue to <br />
              browse and use website you  are agreeing <br />
              to comply with and be bound by <br />
              the following terms and condition of use, <br />
              set out below. <br /><br />
              The term "TEMOKIN", "us" or "we" refers to <br />
              TEMOKIN Group of Companies, the owner of  <br />
              the website, whose registered office is No 2, <br />
              Jalan 15/48A, Sentul Raya Boulevard, 51000 <br />
              Kuala Lumpur, Wilayah Persekutuan, Malaysia. <br />
              The term "you" refers to the user or viewer <br />
              of our website.
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header-bg" data-scroll data-scroll-speed="-3" />
      {/* <div className="header-shapes" data-scroll data-scroll-speed="-1" /> */}
    </div>
  );
}
