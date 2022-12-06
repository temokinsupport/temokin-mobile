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
        <Col>
          <Col>
            <h1 className="--title" data-scroll id="header-text"> 
              Get In Touch
            </h1>
          </Col>
        </Col>
        <Col>
          <Col md={4} style={{'margin-bottom': '10vw'}}>
            <Image
              data-aos="zoom-in"
              src={
                require("../../../assets/images/contactus/Contact_Icon-01.png")
                  .default
              }
            />

            <Image
              data-aos="zoom-in"
              className="--image"
              src={
                require("../../../assets/images/contactus/Path_482.svg")
                  .default
              }
            />

            <h3 data-aos="zoom-in" data-aos-duration="1000" className="--title" style={{'margin-top': '5vw'}}>
              Address
            </h3>
            <p data-aos="zoom-in" data-aos-duration="1000" className="--desc" style={{'margin-top': '3vw'}}>
              No.2, Jalan 15/48 A, <br />
              Sentul Raya Boulevard, <br />
              51000 Kuala Lumpur
            </p>
          </Col>
          <Col md={4} style={{'margin-bottom': '10vw'}}>
            <Image
              data-aos="zoom-in"
              src={
                require("../../../assets/images/contactus/Contact_Icon-02.png")
                  .default
              }
            />
            <h3 data-aos="zoom-in" data-aos-duration="1000" className="--title" style={{'margin-top': '5vw'}}>
              Tel
            </h3>
            <p data-aos="zoom-in" data-aos-duration="1000" className="--desc" style={{'margin-top': '3vw'}}>
              +603-40441111 <br />
            </p>
          </Col>
          <Col md={4} style={{'margin-bottom': '10vw'}}>
            <Image
              data-aos="zoom-in"
              src={
                require("../../../assets/images/contactus/Contact_Icon-03.png")
                  .default
              }
            />
            <h3 data-aos="zoom-in" data-aos-duration="1000" className="--title" style={{'margin-top': '5vw'}}>
              Email
            </h3>
            <p data-aos="zoom-in" data-aos-duration="1000" className="--desc" style={{'margin-top': '5vw'}}>
              temokin@temokin.com
            </p>
          </Col>
        </Col>
      </Container>
      <div className="header-bg" />
      {/* <div className="header-shapes" data-scroll data-scroll-speed="-1" /> */}
    </div>
  );
}
