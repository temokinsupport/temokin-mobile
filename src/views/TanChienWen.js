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
          <Image
            className="svg svg--1"
            src={require("../assets/images/leaders/svg-1.svg").default}
            alt="First slide"
          />
          <Image
            className="svg svg--2"
            src={require("../assets/images/leaders/svg-2.svg").default}
            alt="First slide"
          />
          <div className="--bg-1" data-scroll-section>
            <Navigation />
            <Container className="--max">
              <Row>
                <Col>
                  <div className="--leader-details">
                    <PageTitle className="page-title">
                      MEET OUR LEADERS
                    </PageTitle>
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
                              EXECUTIVE DIRECTOR
                            </div>
                          </Position>
                        </Col>
                        <Col md={7}>
                          <Description>
                            Since joining Temokin, Chien Wen has introduced
                            several{"\n"} corporate initiatives to streamline
                            our operations for{"\n"} improved efficiency and
                            effectiveness, and has taken{"\n"} the lead in
                            several large-scale projects.
                            <br />
                            <br />
                            He graduated with a Bachelor in Civil Engineering
                            (Hons.){"\n"} degree from the University of
                            Manchester, England,{"\n"} and previously worked in
                            Wessex Water, an award-winning {"\n"}utilities
                            company in the United Kingdom, where he was{"\n"}{" "}
                            involved in supporting capital programmes Wessex
                            Water,{"\n"} which is United Kingdom’s preeminent
                            awardwinning{"\n"} utilities company that serves
                            over 1.3 million people{"\n"} every day.
                          </Description>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <NavLink
                            to="/team-leaders"
                            className="--btn-get-to-know"
                          >
                            <GetToKnow>GET TO KNOW THE TEAM</GetToKnow>
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

const PageTitle = styled.h1`
  letter-spacing: 0.2em;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 1.5em;
  font-size: 4.3vw;
  font-family: "gill sans", sans-serif !important;
  color: #283a97;
  margin: 25vw 0;
  text-align: center;
`;

const Name = styled.h3`
  letter-spacing: 0.2em;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 1.5em;
  font-size: 4.2vw;
  font-family: "gill sans", sans-serif !important;
  color: #676ab1;
  margin: 0;
  text-align: center;
`;

const Line = styled.hr`
  background-color: #676ab1;
  height: 1px !important;
  width: 10vw;
  opacity: 1;
  margin: 5vw auto;
`;

const Position = styled.h6`
  letter-spacing: 0.2em;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 2em;
  font-size: 3.3vw;
  font-family: "gill sans light", sans-serif !important;
  color: #676ab1;
  text-align: center;
`;

const Description = styled.p`
  font-weight: 600 !important;
  line-height: 2em;
  font-size: 2.7vw;
  font-family: "gill sans light", sans-serif !important;
  color: #676ab1;
  margin: 10vw auto 0;
  width: 80vw;
  text-align: center;
  letter-spacing: 0.1em;
  white-space: pre-line;
`;

const Qoute = styled.p`
  font-weight: 600 !important;
  line-height: 1.8;
  font-size: 4vw;
  font-family: "gill sans", sans-serif !important;
  color: #283a97;
  margin: 10vw auto 0;
  text-align: center;
  letter-spacing: 0.27vw;
  width: 60%;
`;

const GetToKnow = styled.button`
  font-size: 2.5vw;
  letter-spacing: 0.2em;
  padding: 1.8em 4em;
  border: 1px solid white;
  color: white;
  background: #283a97;
  text-transform: none;
  font-family: "gill sans", sans-serif !important;
  border: none;
  margin: 20vw 0;
`;

export default TanChienWen;
