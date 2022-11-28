import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/styles/leader.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const YBhgDatoIrRobertTanKimKuan = () => {
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
                            DATO' IR. TAN KIM KUAN <br />
                            (ROBERT)
                          </Name>
                          <Line />
                          <Position>
                            <div className="leader-position">
                              MANAGING <br />
                              DIRECTOR
                            </div>
                          </Position>
                        </Col>
                        <Col md={7}>
                          <Description>
                            Dato’ Robert is responsible for the overall
                            strategic direction of Temokin and leads our
                            business development, technical and investment arms.
                            <br />
                            <br />
                            A chartered engineer (UK) by training, he graduated
                            with a Master in Civil Engineering (Hons.) degree
                            from University Malaya, Malaysia, and has worked 40
                            years in the construction industry. He is well
                            respected among his peers for his technical
                            capabilities which have helped in the construction
                            of key infrastructural and development projects in
                            Malaysia.
                            <br />
                            <br />
                            He holds positions in the Klang Chinese Chamber of
                            Commerce, Master Builders Association Malaysia,
                            Construction Industry Development Board, Board of
                            Engineers Malaysia and Institute of Civil Engineers
                            (Malaysia and UK). He is also passionately involved
                            in charities and NGOs, including Dignity for
                            Children and the Little Sisters of the Poor Home for
                            the Aged.
                          </Description>
                          <Line />
                          <Qoute>
                            “We want to be remembered not just for great work,
                            but as good people who did great work. Integrity,
                            fairness and compassion must be the key in all we
                            do.”
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
  letter-spacing: 0.2vw;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 2.8vw;
  font-size: 1.7vw;
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

export default YBhgDatoIrRobertTanKimKuan;
