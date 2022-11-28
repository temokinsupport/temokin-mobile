import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/styles/leader.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const YMRajaSulongHizaharBRajaBazian = () => {
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
                    <ul>
                      <li>
                        <NavLink
                          className="control-prev"
                          to="/team-leaders/y-bhg-dato-ir-robert-tan-kim-kuan"
                        />
                      </li>
                      <li>
                        <NavLink
                          className="control-next"
                          to="/team-leaders/tan-chien-wen"
                        />
                      </li>
                    </ul>
                    <Image
                      className="d-block"
                      src={
                        require("../assets/images/leaders/Leaders_IMG-YMRaja-02.png")
                          .default
                      }
                      alt="First slide"
                    />
                    <div className="--about-content">
                      <Row>
                        <Col md={5}>
                          <Name>
                            Y.M. Raja <br />
                            Sulong Hizahar <br />
                            B. Raja Bazian
                          </Name>
                          <Line />
                          <Position>DIRECTOR</Position>
                        </Col>
                        <Col md={7}>
                          <Description>
                            Raja Sulong Hizahar brings with him 15 years’
                            experience in the construction industry, having been
                            involved with numerous large-scale projects across
                            Malaysia. <br />
                            <br />
                            He is an integral part of the core Temokin team and
                            plays a key role in the administration, business
                            development and human resources functions of the
                            company. <br />
                            <br />
                            He also coordinates Temokin’s overseas projects to
                            ensure alignment with our corporate goals and
                            values.
                          </Description>
                          <Line />
                          <Qoute>
                            “If we trust each other completely, like family,
                            then many things can be done quickly and easily. To
                            earn trust, show trust.”
                          </Qoute>
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

const Qoute = styled.p`
  font-weight: 600 !important;
  line-height: 2.8vw;
  font-size: 1.6vw;
  font-family: "gill sans", sans-serif !important;
  color: #283a97;
  margin: 0;
  text-align: left;
  letter-spacing: 0.27vw;
`;

export default YMRajaSulongHizaharBRajaBazian;
