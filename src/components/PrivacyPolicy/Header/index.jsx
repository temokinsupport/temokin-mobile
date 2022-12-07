import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/split.min.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";

export default function Header() {
  return (
    <div className="--bg-1">
      <Navigation />
      <Container className="--max">
        <Row className="justify-content-center">
          <Col md="7">
            <h1 className="--title">
              GENERAL NOTICE {"\n"} ON PROCESSING{"\n"} OF PERSONAL DATA
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="7" sm="12">
            <div className="--subContent">
              We treat and view your personal data seriously.
              {"\n"}
              This Personal Data & Information Notice is {"\n"} issued to all
              our valued customers / prospective {"\n"} customers, pursuant to
              the requirements of the {"\n"}
              Malaysian Personal Data Protection Act (2010).
              <br />
              <br />
              In the course of your dealings with TEMOKIN [meaning TEMOKIN,
              {"\n"} and the holding, subsidiary {"\n"} and/or related companies
              (as defined by the {"\n"}
              Companies Act 1965) of TEMOKIN] as our valued {"\n"}
              customer / prospective customer, we may {"\n"} request that your
              provide data and information {"\n"} about yourself ("Personal
              Data") to enable us {"\n"} to enter into transactions with you or
              to {"\n"} deliver the necessary notices, services and/ or {"\n"}
              products in connection with our business.
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header-bg" />
      {/* <div className="header-shapes" data-scroll data-scroll-speed="-1" /> */}
    </div>
  );
}
