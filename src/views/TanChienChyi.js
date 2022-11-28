import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/styles/leader.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const TanChienChyi = () => {
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
      {" "}
      {
        <div
          className="--leader
                main-container"
          id="main-container"
          data-scroll-container
        >
          <div className="--bg-1" data-scroll-section>
            <Navigation />
            <Container className="--max">
              <Row>
                <Col>
                  <div className="--leader-details">
                    <h1 className="text-center">MEET OUR LEADERS</h1>
                    <div className="--about-content">
                      <Row>
                        <Col md={5}>
                          <Name>
                            Tan <br />
                            Chien Chyi
                          </Name>
                          <Line />
                          <Position>
                            <div className="leader-position">
                              EXECUTIVE <br />
                              DIRECTOR
                            </div>
                          </Position>
                        </Col>
                        <Col md={7}>
                          <Description>
                            Chien Chyi founded the development arm of TEMOKIN,
                            and he’s largely responsible for implementing
                            development strategies to drive growth in our
                            property development division by selectively
                            choosing projects and areas that are profitable and
                            fit TEMOKIN’s portfolio.
                            <br />
                            <br />
                            On a day-to-day basis, he’s in charge of ensuring
                            that operations across all TEMOKIN divisions are
                            running smoothly and efficiently. <br />
                            <br />
                            He graduated with a Bachelor in Civil Engineering
                            (Hons.) degree from University College London,
                            England, and previously interned with BNP Paribas
                            and YTL Power where he was exposed to financial
                            modelling, merger & acquisitions, and operations
                            management.
                          </Description>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <NavLink
                            to="/team-leaders"
                            className="--btn-get-to-know"
                          >
                            GET TO KNOW THE TEAM
                          </NavLink>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="bottom-bg"></div>
            <div className="leader-bg" />
            <Footer />
          </div>
        </div>
      }{" "}
    </>
  );
};

const Name = styled.h3`
  letter-spacing: 0.4vw;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 2.8vw;
  font-size: 2vw;
  font-family: "gill sans", sans-serif !important;
  color: #283a97;
  margin: 0;
  text-align: left;
`;

const Line = styled.hr`
  background-color: #676ab1;
  height: 2px !important;
  width: 6vw;
  opacity: 1;
  margin: 3vw 0 2.5vw 0;
`;

const Position = styled.h6`
  letter-spacing: 0.25vw;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 2vw;
  font-size: 1.6vw;
  font-family: "gill sans", sans-serif !important;
  color: #676ab1;
  text-align: left;
`;

const Description = styled.p`
  font-weight: 600 !important;
  line-height: 1.8;
  font-size: 0.94vw;
  font-family: "gill sans light", sans-serif !important;
  color: #283a97;
  margin: 0;
  text-align: left;
  letter-spacing: 1px;
`;

export default TanChienChyi;
