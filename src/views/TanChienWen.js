import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/styles/leader.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const TanChienWen = () => {
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
                            Tan
                            <br />
                            Chien Wen
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
                            Since joining Temokin, Chien Wen has introduced
                            several corporate initiatives to streamline our
                            operations for improved efficiency and
                            effectiveness, and has taken the lead in several
                            large-scale projects.
                            <br />
                            <br />
                            He graduated with a Bachelor in Civil Engineering
                            (Hons.) degree from the University of Manchester,
                            England, and previously worked in Wessex Water, an
                            award-winning utilities company in the United
                            Kingdom, where he was involved in supporting capital
                            programmes Wessex Water, which is United Kingdom’s
                            preeminent awardwinning utilities company that
                            serves over 1.3 million people every day.
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

export default TanChienWen;
