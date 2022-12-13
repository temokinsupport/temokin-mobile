import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/split.min.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    <section className="--header" data-scroll-section>
      <Navigation />
      <div className="load">
        <Image
          className="--home-temokin-img"
          src={require("../../../assets/images/home/Group 833.png").default}
        />
      </div>
      <div className="hero">
        <h1>
          <span style={{ marginLeft: "2.3vw" }}>Winning</span> <br /> your trust{" "}
          <br /> everytime
        </h1>
        <Image
          className="hero-bg"
          src={require("../../../assets/images/home/Page1_BG.png").default}
        />
      </div>
      {/* <div className="hero-container">
        <LazyLoadImage
          src={require("../../../assets/images/home/Home_BG-01.png").default}
          className="header-bg"
          data-scroll
          data-scroll-speed="-2"
        />
      </div> */}
    </section>
  );
}
