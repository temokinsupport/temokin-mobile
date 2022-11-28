import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

import "../assets/styles/propertyprojects.scss";
import overlayImage from "../assets/images/propertyprojects/PropertyDev_Shapes-01.png";
import polygonImage from "../assets/images/propertyprojects/showcase-mahligai.png";

import Hero from "../components/PropertyDevelopmentProject/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PreviewCard from "../components/PreviewCard";
import PreviewCarousel from "../components/PreviewCarousel";

const IstanaNegara = () => {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(1);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      <svg class="svg">
        <clipPath
          id="previewCarouselClipPath"
          clipPathUnits="objectBoundingBox"
        >
          <path d="m1,0 v0.689 l-0.435,0.311 H0 V0.166 L0.232,0"></path>
        </clipPath>
      </svg>{" "}
      {
        <Projects
          className="--projects
            main-container"
          id="main-container"
          data-scroll-container
        >
          <div className="--bg-1">
            <Navigation />

            <section className="hero">
              <Hero />
            </section>
            <section className="middle">
              <div className="middle__polygon-image">
                <img src={polygonImage} alt="" />
              </div>
              <div className="middle__caption">
                <p>
                  A HAVEN OF TRANQUILITY IN A THRIVING TOWNSHIP. WELCOME HOME.
                </p>
              </div>
            </section>
            <section className="preview">
              <div className="preview-carousel__container">
                <PreviewCarousel />
              </div>
            </section>
            <section className="related">
              <Container>
                <h2 className="section-label">Related Projects</h2>
                <Row className="related__cards">
                  <PreviewCard />
                </Row>
              </Container>
            </section>
            <Footer />
          </div>
        </Projects>
      }{" "}
    </>
  );
};

const Projects = styled.div`
  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: background 0.3s;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: 100vw 100vw;
    height: 100vw;
    width: 100%;
    background: url(${overlayImage}) top 8vw left;
  } */
`;

export default IstanaNegara;
